'use client';

import './style.scss'

import Image from "next/image";
import React, { useState } from 'react';

import DeleteVehicle from "@/components/vehicleCard/deleteVehicle";
import EditVehicleModal from "@/components/vehicleCard/editVehicleModal";
import { VehicleTypeKey } from "@/types/constants";
import { Vehicle } from "@/types/vehicle";

const VehicleCard = ({ vehicle, dictionary }: { vehicle: Vehicle, dictionary: { [K in VehicleTypeKey]: string }}) => {
    const {
        name,
        type,
        description,
        additionalInfo,
        images,
        year,
    } = vehicle;
    const [modalClick, setModalClick] = useState(false);

    const handleClick = () => setModalClick(prevState => !prevState);

    return (
        <div className="VehicleCard" onClick={ () => setModalClick(true) }>
            <div className="VehicleCard-Actions">
                <DeleteVehicle vehicleId={ vehicle.id } />
                <EditVehicleModal vehicle={ vehicle } isModalOpen={ modalClick } handleClick={ () => handleClick() }/>
            </div>
            { images?.fileName && <Image
                width={ 200 }
                height={ 200 }
                src={ images.fileName }
                alt={ name ?? images.fileName }
                className="w-full h-48 object-cover"
            /> }
            <div className="flex flex-col items-start p-4 gap-1 bg-gray-50 rounded-t-[5px]">
                <h3 className={ ` ${!images?.fileName ? 'pt-8' : ''} text-lg font-semibold text-gray-900` }>{ name }</h3>
                <p className="text-sm text-gray-500">{ dictionary[type] }</p>
                <p className="text-xs text-gray-400">{ new Date(year).getFullYear() }</p>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <p className="text-gray-700 text-sm line-clamp-3">{ description }</p>
                { additionalInfo && (
                    <pre className="text-xs bg-gray-100 p-2 rounded-md overflow-auto max-h-24">
                        { JSON.stringify(additionalInfo, null, 2) }
                    </pre>
                ) }
            </div>
        </div>
    );
};

export default VehicleCard;
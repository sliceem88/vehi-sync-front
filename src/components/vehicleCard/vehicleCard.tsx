import { CardHeader } from "@heroui/card";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import React from 'react';

import DeleteVehicle from "@/components/vehicleCard/deleteVehicle";
import { Vehicle } from "@/types/vehicle";

const VehicleCard = ({ vehicle }: { vehicle: Vehicle}) => {
    const {
        name,
        type,
        description,
        additionalInfo,
        images,
        year,
    } = vehicle;
    
    return (
        <Card className="w-full max-w-sm shadow-md border rounded-xl overflow-hidden">
            <DeleteVehicle vehicleId={ vehicle.id } />
            <CardHeader className="flex flex-col items-start p-4 gap-1 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900">{ name }</h3>
                <p className="text-sm text-gray-500">{ type }</p>
                <p className="text-xs text-gray-400">{ new Date(year).getFullYear() }</p>
            </CardHeader>

            { images?.fileName && <Image
                width={ 200 }
                height={ 200 }
                src={ images.fileName }
                alt={ name ?? images.fileName }
                className="w-full h-48 object-cover"
            /> }

            <CardBody className="p-4 flex flex-col gap-2">
                <p className="text-gray-700 text-sm line-clamp-3">{ description }</p>

                { additionalInfo && (
                    <pre className="text-xs bg-gray-100 p-2 rounded-md overflow-auto max-h-24">
                        { JSON.stringify(additionalInfo, null, 2) }
                    </pre>
                ) }
            </CardBody>
        </Card>
    );
};

export default VehicleCard;
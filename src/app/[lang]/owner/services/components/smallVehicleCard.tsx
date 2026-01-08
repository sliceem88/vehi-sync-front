import { CardFooter, CardHeader } from "@heroui/card";
import { Card, CardBody, Checkbox, Divider, Input } from "@heroui/react";
import React, { useState } from 'react';

import { Vehicle } from "@/types/vehicle";

const SmallVehicleCard = ({ vehicle, handler, selectedVehicleId }: {vehicle: Vehicle, handler: (vehicleId: string) => void, selectedVehicleId?: string}) => {
    const [isSelected, setIsSelected] = useState(vehicle.id === selectedVehicleId);

    const handleClick = () => {
        // if(!selectedVehicleId) {
        //     setIsSelected(true);
        //     handler(vehicle?.id);
        //     return;
        // }
        //
        // if(selectedVehicleId !== vehicle.id) {
        //     setIsSelected(false);
        //     handler(vehicle?.id);
        // }

        setIsSelected(prevState => !prevState);
        handler(vehicle?.id);
        //     return;
    }
    return (
        <Card className="max-w-[100px] cursor-pointer" isPressable onPress={ handleClick }>
            <CardHeader className="flex gap-3">
                <Checkbox isSelected={ isSelected } />
                { isSelected && <Input value={ vehicle.id } name='vehicleId' className='hidden' /> }
                <div className="flex flex-col">
                    <p className="text-md">{ vehicle.name }</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{ vehicle.type }</p>
                <Divider />
                <p>{ vehicle.year }</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <p>{ vehicle.description }</p>
            </CardFooter>
        </Card>
    );
};

export default SmallVehicleCard;
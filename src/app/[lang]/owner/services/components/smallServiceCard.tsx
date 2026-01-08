import { CardFooter, CardHeader } from "@heroui/card";
import { Card, CardBody, Checkbox, Divider, Input } from "@heroui/react";
import React, { useState } from 'react';

import { ServiceUserType } from "@/types/user";

const SmallServiceCard = (
    { service, selectedServiceId, handler }:
    {service: ServiceUserType, selectedServiceId?: string, handler: (serviceId: string) => void}
) => {
    const [isSelected, setIsSelected] = useState(service.id === selectedServiceId);

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
        handler(service?.id);
        //     return;
    }

    return (
        <Card className="max-w-[100px] cursor-pointer" isPressable onPress={ handleClick }>
            <CardHeader className="flex gap-3">
                <Checkbox isSelected={ isSelected } />
                { isSelected && <Input value={ service.id } name='serviceId' className='hidden' /> }
                <div className="flex flex-col">
                    <p className="text-md">{ service.companyName }</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{ service.type }</p>
                <Divider />
            </CardBody>
            <Divider />
            <CardFooter>
                <p>{ service.description }</p>
            </CardFooter>
        </Card>
    );
};

export default SmallServiceCard;
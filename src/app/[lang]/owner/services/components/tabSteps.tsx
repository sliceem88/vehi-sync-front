'use client';

import { Textarea } from "@heroui/input";
import { Button } from "@heroui/react";
import { Tab, Tabs } from "@heroui/tabs";
import { Key } from "@react-types/shared";
import { Car, NotebookPen, Wrench } from "lucide-react";
import React, { useState } from 'react';

import { assignOwnerToServiceAction } from "@/actions/serviceRequestAction";
import { useClickHandle } from "@/lib/hooks/useClickHandle";
import { OwnerServiceDictionaryType } from "@/types/dictionary";
import { ServiceUserType } from "@/types/user";
import { Vehicle } from "@/types/vehicle";

import SmallServiceCard from "./smallServiceCard";
import SmallVehicleCard from "./smallVehicleCard";

const TabSteps = (
    { services, vehicles, dictionary }:
    {services: ServiceUserType[], vehicles: Vehicle[], dictionary: OwnerServiceDictionaryType}
) => {
    const { clickHandle } = useClickHandle();
    const [vehicleId, setVehicleId] = useState<string>();
    const [serviceId, setServiceId] = useState<string>();
    const [comment, setComment] = useState<string>();
    const [selected, setSelected] = useState<Key>();

    const disabledKeys = !vehicleId ? ['2', '3'] : [];
    const disabledButtons = Boolean(vehicleId) && Boolean(serviceId);

    const handleReset = () => {
        setVehicleId(undefined);
        setServiceId(undefined);
        setComment(undefined);
        setSelected('1')
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        await clickHandle(() => assignOwnerToServiceAction(serviceId!, vehicleId!, comment!))
        handleReset();
    }

    return (
        <div>
            <form onSubmit={ handleSubmit } id='create-service-request'>
                <Tabs
                    className='w-full flex justify-center'
                    aria-label="Options"
                    color="primary"
                    variant="bordered"
                    disabledKeys={ disabledKeys }
                    selectedKey={ selected }
                    onSelectionChange={ setSelected }
                >
                    <Tab
                        key="1"
                        title={
                            <div className="flex items-center space-x-2">
                                <Car />
                                <span>{ dictionary?.tabs?.step1 }</span>
                            </div>
                        }
                    >
                        <p>{ dictionary?.tabs?.step1Info }</p>
                        <div className='flex gap-2 flex-wrap'>
                            { vehicles.map((vehicle: Vehicle) => <SmallVehicleCard key={ vehicle.id } vehicle={ vehicle } selectedVehicleId={ vehicleId } handler={ setVehicleId }/>) }
                        </div>
                    </Tab>
                    <Tab
                        key="2"
                        title={
                            <div className="flex items-center space-x-2">
                                <Wrench />
                                <span>{ dictionary?.tabs?.step2 }</span>
                            </div>
                        }
                    >
                        <p>{ dictionary?.tabs?.step2Info }</p>
                        <div className='flex gap-2 flex-wrap'>
                            { services.map((service: ServiceUserType) => <SmallServiceCard key={ service.id } service={ service } selectedServiceId={ serviceId } handler={ setServiceId }/>) }
                        </div>
                    </Tab>
                    <Tab
                        key="3"
                        title={
                            <div className="flex items-center space-x-2">
                                <NotebookPen />
                                <span>{ dictionary?.tabs?.step3 }</span>
                            </div>
                        }
                    >
                        <p>{ dictionary?.tabs?.step3Info }</p>
                        <Textarea name='comments' label={ dictionary?.tabs?.step3 } variant='faded' onValueChange={ setComment } value={ comment }/>
                    </Tab>
                </Tabs>
            </form>
            <Button variant='faded' color='default' isDisabled={ !disabledButtons } onPress={ () => handleReset() }>
                { dictionary?.tabs?.resetButton }
            </Button>
            <Button variant='faded' color='primary' isDisabled={ !disabledButtons } type="submit" form='create-service-request'>
                { dictionary?.tabs?.submitButton }
            </Button>
        </div>
    );
};

export default TabSteps;
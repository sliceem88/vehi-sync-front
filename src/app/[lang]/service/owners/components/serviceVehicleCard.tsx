'use client';

import { CardHeader } from "@heroui/card";
import { Textarea } from "@heroui/input";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Button, Card, CardBody, Select, SelectItem, useDisclosure } from "@heroui/react";
import Form from "next/form";
import React, { useState } from 'react';

import { createServiceRespondAction } from "@/actions/servicesAction";
import StatusChip from "@/components/status/statusChip";
import { ServiceRequestStatus } from "@/lib/constants";
import { useClickHandle } from "@/lib/hooks/useClickHandle";
import { useDictionary } from "@/lib/hooks/useDictionary";
import { ServiceRequestStatusType, ServiceRequestType } from "@/types/serviceRequest";

const ServiceVehicleCard = ({ vehicleWithOwner }: {vehicleWithOwner: ServiceRequestType}) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [status, setStatus] = useState<ServiceRequestStatusType>(vehicleWithOwner.status);
    const dictionary = useDictionary('service/owners');
    const isSameStatus = status === vehicleWithOwner.status;
    const { clickHandle } = useClickHandle();
    
    const handleFormSubmit = async (formData: FormData) => {
        const comment = formData.get('comment');

        await clickHandle(() => createServiceRespondAction(vehicleWithOwner.id, comment!.toString(), status, dictionary?.modal?.toastMessage));
        onClose()
    }

    return (
        <>
            <Card className="py-4" isPressable onPress={ onOpen }>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{ }</p>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <p>{ dictionary?.requestCard?.ownerComment }: { vehicleWithOwner?.ownerComment }</p>
                    { dictionary?.status }:<StatusChip status={ vehicleWithOwner?.status }/>
                    <p>{ dictionary?.requestCard?.vehicleData }: { JSON.stringify(vehicleWithOwner?.vehicle?.additionalInfo) }</p>
                    <p>{ dictionary?.requestCard?.vehicleType }: { vehicleWithOwner?.vehicle?.type }</p>
                </CardBody>
            </Card>
            <Modal isOpen={ isOpen } onOpenChange={ onOpenChange }>
                <ModalContent>
                    { (onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{ dictionary?.modal?.title }</ModalHeader>
                            <ModalBody>
                                <Form action={ handleFormSubmit } id='service-respond'>
                                    <Select
                                        name='status'
                                        className="pb-2"
                                        items={ ServiceRequestStatus }
                                        label={ dictionary?.modal?.status }
                                        defaultSelectedKeys={ [status] }
                                        onChange={ (event) => setStatus((event.target.value as ServiceRequestStatusType)) }
                                    >
                                        { (serviceStatus) => <SelectItem>{ dictionary?.modal?.statuses?.[serviceStatus.value] }</SelectItem> }
                                    </Select>
                                    <Textarea isRequired={ status === 'declined' } label={ dictionary?.modal?.comment } name='comment' />
                                </Form>
                            </ModalBody>
                            <ModalFooter className='flex-col'>
                                <div className='flex justify-end'>
                                    <Button color="danger" variant="light" onPress={ onClose }>
                                        { dictionary?.modal?.cancelButton }
                                    </Button>
                                    <Button isDisabled={ isSameStatus } color="primary" type='submit' form='service-respond'>
                                        { dictionary?.modal?.submitButton }
                                    </Button>
                                </div>
                                { isSameStatus && <p>{ dictionary?.modal?.statusError }</p> }
                            </ModalFooter>
                        </>
                    ) }
                </ModalContent>
            </Modal>
        </>

    );
};

export default ServiceVehicleCard;
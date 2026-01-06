'use client';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Button, useDisclosure } from "@heroui/react";
import React from 'react';

import { deleteOwnerToServiceAction } from "@/actions/servicesAction";
import { useClickHandle } from "@/lib/hooks/useClickHandle";
import { ServiceUserType } from "@/types/user";

const ServiceDeleteModal = ({ service }: { service: ServiceUserType}) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { clickHandle } = useClickHandle();

    const handleServiceAssign = async () => {
        await clickHandle(() => deleteOwnerToServiceAction(service.id))
        onClose()
    }
    return (
        <div>
            <Button onPress={ onOpen }>Delete Service</Button>
            <Modal isOpen={ isOpen } onOpenChange={ onOpenChange }>
                <ModalContent>
                    { (onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Service Delete</ModalHeader>
                            <ModalBody>
                                { `Are you sure you want to delete ${service.name} service?` }
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={ onClose }>
                                    No
                                </Button>
                                <Button color="primary" onPress={ handleServiceAssign }>
                                    Yes
                                </Button>
                            </ModalFooter>
                        </>
                    ) }
                </ModalContent>
            </Modal>
        </div>
    );
};

export default ServiceDeleteModal;
'use client';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Button, useDisclosure } from "@heroui/react";
import React from 'react';

import { ServiceUserType } from "@/types/user";

const ServiceSelectModal = ({ service }: { service: ServiceUserType}) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const handleServiceAssign = async () => {
        onClose()
    }
    return (
        <div>
            <Button onPress={ onOpen }>Assign Service</Button>
            <Modal isOpen={ isOpen } onOpenChange={ onOpenChange }>
                <ModalContent>
                    { (onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Service Assign</ModalHeader>
                            <ModalBody>
                                { `Are you sure you want to add ${service.name} service?` }
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

export default ServiceSelectModal;
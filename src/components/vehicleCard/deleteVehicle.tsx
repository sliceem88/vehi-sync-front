'use client'

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Button, useDisclosure } from "@heroui/react";
import { X } from "lucide-react";
import React from 'react';

import { deleteVehicleAction } from "@/actions/vehicleAction";
import { useClickHandle } from "@/lib/hooks/useClickHandle";

const DeleteVehicle = ({ vehicleId }: { vehicleId: string }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { clickHandle } = useClickHandle();

    const handleDeleteClick = async (onClose: () => void) => {
        await clickHandle(() => deleteVehicleAction(vehicleId));

        onClose()
    };
    return (
        <>
            <Button isIconOnly aria-label="Delete" onPress={ onOpen }>
                <X />
            </Button>
            <Modal isOpen={ isOpen } onOpenChange={ onOpenChange }>
                <ModalContent>
                    { (onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Delete Vehicle</ModalHeader>
                            <ModalBody>
                                <p>
                                    Are you sure you want to delete vehicle ?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={ onClose }>
                                    Close
                                </Button>
                                <Button color="primary" onPress={ () => handleDeleteClick(onClose) }>
                                    Delete
                                </Button>
                            </ModalFooter>
                        </>
                    ) }
                </ModalContent>
            </Modal>
        </>
    );
};

export default DeleteVehicle;
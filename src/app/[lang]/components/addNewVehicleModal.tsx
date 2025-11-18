'use client';

import React from 'react';
import {Button, useDisclosure} from "@heroui/react";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@heroui/modal";
import Form from "next/form";

const AddNewVehicleModal = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleFormAction = (formData: FormData) => {

    }
    return (
        <div>
            <Button onPress={onOpen} color="primary" variant="shadow">
                Add new vehicle
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">New vehicle</ModalHeader>
                            <ModalBody>
                                <Form action={handleFormAction} >

                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default AddNewVehicleModal;
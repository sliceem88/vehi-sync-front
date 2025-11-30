'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Button, Input, useDisclosure } from "@heroui/react";
import Form from "next/form";
import React from 'react';

import { addMechanicToServiceAction } from "@/actions/servicesAction";
import { useClickHandle } from "@/lib/hooks/useClickHandle";

const MechanicAddModal = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { clickHandle } = useClickHandle();

    const handleMechanicCreate = async (formData: FormData) => {
        await clickHandle(() => addMechanicToServiceAction(formData))
        onClose()
    }
    return (
        <div>
            <Button onPress={ onOpen }>Create Mechanic</Button>
            <Modal isOpen={ isOpen } onOpenChange={ onOpenChange }>
                <ModalContent>
                    { (onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add Mechanic</ModalHeader>
                            <ModalBody>
                                <Form id="mechanic_add" action={ handleMechanicCreate }>
                                    <Input labelPlacement='outside-top' isRequired label="Name" name='name' placeholder="Enter mechanic name" />
                                    <Input labelPlacement='outside-top' isRequired label="Email" name='email' placeholder="Enter mechanic e-mail" />
                                    <Input labelPlacement='outside-top' label="Description" name='description' placeholder="Enter mechanic description" />
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={ onClose }>
                                    Cancel
                                </Button>
                                <Button type='submit' form='mechanic_add' color="primary">
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    ) }
                </ModalContent>
            </Modal>
        </div>
    );
};

export default MechanicAddModal;
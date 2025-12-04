'use client';

import { Textarea } from "@heroui/input";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import {
    Button,
    DateInput,
    Input,
    useDisclosure
} from "@heroui/react";
import { CalendarDate } from "@internationalized/date";
import Form from "next/form";
import { useRouter } from "next/navigation";
import React from 'react';

import { createVehicleAction } from "@/actions/vehicleAction";

const AddNewVehicleModal = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const router = useRouter();

    const handleFormAction = async (formData: FormData) => {
        console.log('BEFORE SENT', formData.get('images'));
        await createVehicleAction(formData)
        onClose()
        router.refresh()
    }
    return (
        <div>
            <Button onPress={ onOpen } color="primary" variant="shadow">
                Add new vehicle
            </Button>
            <Modal isOpen={ isOpen } onOpenChange={ onOpenChange }>
                <ModalContent>
                    { (onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">New vehicle</ModalHeader>
                            <ModalBody>
                                <Form action={ handleFormAction } id='create-vehicle'>
                                    <Input labelPlacement='outside-top' isRequired label="Name" name='name' placeholder="Enter vehicle name" />
                                    <Input labelPlacement='outside-top' isRequired label="Type" name='type' placeholder="Enter vehicle type" />
                                    <DateInput
                                        isRequired
                                        name='year'
                                        labelPlacement='outside'
                                        className="max-w-sm"
                                        label={ "Birth date" }
                                        placeholderValue={ new CalendarDate(1900, 11, 6) }
                                    />
                                    <Textarea name='description' labelPlacement='outside-top' label='Description' />

                                    <Input
                                        isRequired
                                        label="Images"
                                        labelPlacement="outside"
                                        name="images"
                                        type="file"
                                    />
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={ onClose }>
                                    Cancel
                                </Button>
                                <Button color="primary" type="submit" form='create-vehicle'>
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

export default AddNewVehicleModal;
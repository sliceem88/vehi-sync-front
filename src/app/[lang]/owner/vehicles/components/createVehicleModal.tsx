'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import {
    Button,
    useDisclosure
} from "@heroui/react";
import Form from "next/form";
import { useRouter } from "next/navigation";
import React from 'react';

import { createVehicleAction } from "@/actions/vehicleAction";
import ModalFields from "@/app/[lang]/owner/vehicles/components/modalFields";
import { useClickHandle } from "@/lib/hooks/useClickHandle";
import { OwnerVehicleDictionaryType } from "@/types/dictionary";

const CreateVehicleModal = ({ dictionary }: {dictionary: OwnerVehicleDictionaryType }) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const router = useRouter();
    const { clickHandle } = useClickHandle();

    const handleFormAction = async (formData: FormData) => {
        await clickHandle(() => createVehicleAction(formData));
        onClose()
        router.refresh()
    }

    return (
        <>
            <Button onPress={ onOpen } color="primary" variant="shadow">
                { dictionary?.addModal?.button }
            </Button>
            <Modal isOpen={ isOpen } onOpenChange={ onOpenChange }>
                <ModalContent>
                    { (onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{ dictionary?.addModal?.button }</ModalHeader>
                            <ModalBody>
                                <Form action={ handleFormAction } id='create-vehicle'>
                                    <ModalFields dictionaryModal={ dictionary!.addModal } />
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={ onClose }>
                                    { dictionary?.addModal?.buttonCancel }
                                </Button>
                                <Button color="primary" type="submit" form='create-vehicle'>
                                    { dictionary?.addModal?.buttonSubmit }
                                </Button>
                            </ModalFooter>
                        </>
                    ) }
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateVehicleModal;
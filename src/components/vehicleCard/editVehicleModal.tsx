'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Button,Tooltip, useDisclosure } from "@heroui/react";
import { Pencil } from "lucide-react";
import Form from "next/form";
import { useRouter } from "next/navigation";
import React from 'react';

import { editVehicleAction } from "@/actions/vehicleAction";
import ModalFields from "@/app/[lang]/owner/vehicles/components/modalFields";
import { useClickHandle } from "@/lib/hooks/useClickHandle";
import { useDictionary } from "@/lib/hooks/useDictionary";
import { Vehicle } from "@/types/vehicle";

const EditVehicleModal = ({ vehicle, isModalOpen = false, handleClick }: { vehicle: Vehicle, isModalOpen?: boolean, handleClick: () => void }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure({ isOpen: isModalOpen });
    const router = useRouter();
    const { clickHandle } = useClickHandle();
    const dictionary = useDictionary('owner/vehicles');

    const handleFormAction = async (formData: FormData) => {
        await clickHandle(() => editVehicleAction(formData, vehicle.id));
        handleClick();
        router.refresh()
    }

    return (
        <>
            <Tooltip content={ dictionary?.editModal?.tooltip } closeDelay={ 200 } placement='right'>
                <Button size='sm' isIconOnly aria-label="Edit" onPress={ onOpen }>
                    <Pencil />
                </Button>
            </Tooltip>
            <Modal isOpen={ isOpen } onOpenChange={ onOpenChange } onClose={ () => handleClick() }>
                <ModalContent>
                    { () => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{ dictionary?.editModal?.heading }</ModalHeader>
                            <ModalBody>
                                <Form action={ handleFormAction } id='edit-vehicle'>
                                    <ModalFields dictionaryModal={ dictionary?.editModal } vehicle={ vehicle }/>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={ handleClick }>
                                    { dictionary?.editModal?.buttonCancel }
                                </Button>
                                <Button color="primary" type='submit' form='edit-vehicle'>
                                    { dictionary?.editModal?.buttonSubmit }
                                </Button>
                            </ModalFooter>
                        </>
                    ) }
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditVehicleModal;
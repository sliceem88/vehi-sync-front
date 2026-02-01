import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Button, Input, useDisclosure } from "@heroui/react";
import { Plus } from "lucide-react";
import Form from "next/form";
import React from 'react';
import { toast } from "sonner";

import { registerAction } from "@/actions/registerAction";
import { ServiceJobsType } from "@/types/dictionary";

const CreateNewVehicleOwnerModal = ({ dictionary }: {dictionary: ServiceJobsType | undefined}) => {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const handleRegister = async (formData: FormData) => {
        formData.append('password', Math.random().toString(36).substring(2, 12));
        formData.append('createdByService', 'true');
        formData.append('type', 'owner');
        const response = await registerAction(formData)

        if (response?.error) {
            toast.error(dictionary?.createOwnerForm?.toastErrorMessage)
            return;
        }

        if(response) {
            toast.success(dictionary?.createOwnerForm?.toastSuccessMessage)
            onClose();
            return;
        }
    }

    return (
        <>
            <div onClick={ onOpen } className='flex flex-row items-center gap-2 hover:cursor-pointer max-h-[30px] p-2 border-1'>
                <Plus size={ 18 }/>
                { dictionary?.createForm?.addVehicle }
            </div>
            <Modal isOpen={ isOpen } onOpenChange={ onOpenChange } radius='none'>
                <ModalContent>
                    { (onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{ dictionary?.createOwnerForm?.title }</ModalHeader>
                            <ModalBody>
                                <Form id="register_owner_form" action={ handleRegister }>
                                    <Input
                                        radius='none'
                                        labelPlacement='outside-top'
                                        isRequired={ true }
                                        name='email'
                                        label={ dictionary?.createOwnerForm?.email }
                                        placeholder={ dictionary?.createOwnerForm?.emailPlaceholder }
                                        type="email"
                                        description={ dictionary?.createOwnerForm?.emailMinCharMessage }
                                    />
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onPress={ onClose } radius='none'>
                                    { dictionary?.createOwnerForm?.cancelButton }
                                </Button>
                                <Button color="primary" type='submit' radius='none' form='register_owner_form'>
                                    { dictionary?.createOwnerForm?.submitButton }
                                </Button>
                            </ModalFooter>
                        </>
                    ) }
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateNewVehicleOwnerModal;
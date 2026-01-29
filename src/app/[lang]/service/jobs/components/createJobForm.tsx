'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Button, useDisclosure } from "@heroui/react";
import { Tab, Tabs } from "@heroui/tabs";
import { SquarePlus } from "lucide-react";
import React from 'react';

import { useDictionary } from "@/lib/hooks/useDictionary";
import { MechanicUserType } from "@/types/user";
import { Vehicle } from "@/types/vehicle";

const CreateJobForm = ({ vehicles, mechanics }: { vehicles: Vehicle, mechanics: MechanicUserType[]}) => {
    const dictionary = useDictionary('service/jobs');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <Button startContent={ <SquarePlus /> } radius='none' variant='light' className='border-1' onPress={ onOpen }>{ dictionary?.createForm?.createButton }</Button>
            <Modal
                isDismissable={ false }
                isKeyboardDismissDisabled={ true }
                isOpen={ isOpen }
                onOpenChange={ onOpenChange }
            >
                <ModalContent>
                    { (onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{ dictionary?.createForm?.title }</ModalHeader>
                            <ModalBody>
                                <Tabs aria-label="Jobs tabs" size='lg' radius='none' variant='underlined'>
                                    <Tab key="vehicles" title={ dictionary?.createForm?.tabs?.vehicles } />
                                    <Tab key="mechanics" title={ dictionary?.createForm?.tabs?.mechanics } />
                                    <Tab key="info" title={ dictionary?.createForm?.tabs?.info } />
                                </Tabs>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={ onClose }>
                                    { dictionary?.createForm?.cancelButton }
                                </Button>
                                <Button color="primary" onPress={ onClose }>
                                    { dictionary?.createForm?.submitButton }
                                </Button>
                            </ModalFooter>
                        </>
                    ) }
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CreateJobForm;
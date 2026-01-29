'use client';

import { Textarea } from "@heroui/input";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Radio, RadioGroup } from "@heroui/radio";
import { Button, Card, CardBody, DatePicker, Select, SelectItem, useDisclosure } from "@heroui/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Plus, SquarePlus } from "lucide-react";
import React from 'react';

import { useDictionary } from "@/lib/hooks/useDictionary";

const CreateJobForm = () => {
    const dictionary = useDictionary('service/jobs');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const animals = [
        { key: "cat", label: "Cat" },
        { key: "dog", label: "Dog" },
        { key: "elephant", label: "Elephant" },
        { key: "lion", label: "Lion" },
        { key: "tiger", label: "Tiger" },
        { key: "giraffe", label: "Giraffe" },
        { key: "dolphin", label: "Dolphin" },
        { key: "penguin", label: "Penguin" },
        { key: "zebra", label: "Zebra" },
        { key: "shark", label: "Shark" },
        { key: "whale", label: "Whale" },
        { key: "otter", label: "Otter" },
        { key: "crocodile", label: "Crocodile" },
    ];

    return (
        <div>
            <Button startContent={ <SquarePlus /> } radius='none' variant='light' className='border-1' onPress={ onOpen }>{ dictionary?.createForm?.createButton }</Button>
            <Modal
                isDismissable={ false }
                isKeyboardDismissDisabled={ true }
                isOpen={ isOpen }
                onOpenChange={ onOpenChange }
                classNames={ {
                    body: "py-6",
                    backdrop: "bg-[#292f46]/50",
                    base: "rounded-none",
                } }
                size='5xl'
            >
                <ModalContent>
                    { (onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{ dictionary?.createForm?.title }</ModalHeader>
                            <ModalBody>
                                <Card>
                                    <CardBody>
                                        <div className='flex justify-between items-end'>
                                            <DatePicker
                                                className="max-w-[284px]"
                                                label={ dictionary?.createForm?.jobDate }
                                                granularity="day"
                                                variant='bordered'
                                                labelPlacement='outside-top'
                                                defaultValue={ today(getLocalTimeZone()) }
                                            />
                                            <div className='flex flex-row items-center gap-2 hover:cursor-pointer max-h-[30px] p-2 border-1'><Plus size={ 18 }/>{ dictionary?.createForm?.newOwner }</div>
                                        </div>
                                        <Select variant='bordered' labelPlacement='outside-top' className="max-w-xs" label={ dictionary?.createForm?.ownerSelect } placeholder={ dictionary?.createForm?.ownerSelectPlaceholder }>
                                            { animals.map((animal) => (
                                                <SelectItem key={ animal.key }>{ animal.label }</SelectItem>
                                            )) }
                                        </Select>
                                        <div className='flex justify-between items-end'>
                                            <Select variant='bordered' labelPlacement='outside-top' className="max-w-xs" label={ dictionary?.createForm?.vehicleSelect } placeholder={ dictionary?.createForm?.vehicleSelectPlaceholder }>
                                                { animals.map((animal) => (
                                                    <SelectItem key={ animal.key }>{ animal.label }</SelectItem>
                                                )) }
                                            </Select>
                                            <div className='flex flex-row items-center gap-2 hover:cursor-pointer max-h-[30px] p-2 border-1'><Plus size={ 18 }/>{ dictionary?.createForm?.addVehicle }</div>
                                        </div>
                                        <RadioGroup defaultValue="new" label={ dictionary?.createForm?.statuses?.title } orientation="horizontal">
                                            <Radio value="new">{ dictionary?.createForm?.statuses?.new }</Radio>
                                            <Radio value="inProgress">{ dictionary?.createForm?.statuses?.inProgress }</Radio>
                                            <Radio value="onHold">{ dictionary?.createForm?.statuses?.onHold }</Radio>
                                            <Radio value="completed">{ dictionary?.createForm?.statuses?.completed }</Radio>
                                        </RadioGroup>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody className='flex justify-between flex-row'>
                                        <Textarea
                                            className="max-w-xl"
                                            isClearable
                                            label={ dictionary?.createForm?.taskDescription }
                                            placeholder={ dictionary?.createForm?.taskDescriptionPlaceholder }
                                            variant='bordered'
                                            labelPlacement='outside-top'
                                        />
                                        <Select
                                            variant='bordered'
                                            labelPlacement='outside-top'
                                            className="max-w-xs"
                                            label={ dictionary?.createForm?.mechanicSelect }
                                            placeholder={ dictionary?.createForm?.mechanicSelectPlaceholder }
                                        >
                                            { animals.map((animal) => (
                                                <SelectItem key={ animal.key }>{ animal.label }</SelectItem>
                                            )) }
                                        </Select>
                                    </CardBody>
                                </Card>
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
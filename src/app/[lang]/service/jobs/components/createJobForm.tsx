'use client';

import { CardFooter } from "@heroui/card";
import { Textarea } from "@heroui/input";
import { Radio, RadioGroup } from "@heroui/radio";
import { Button, Card, CardBody, DatePicker, Select, SelectItem } from "@heroui/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import React from 'react';

import AddVehicleToOwnerModal from "@/app/[lang]/service/jobs/components/addVehicleToOwnerModal";
import CreateNewVehicleOwnerModal from "@/app/[lang]/service/jobs/components/createNewVehicleOwnerModal";
import { useDictionary } from "@/lib/hooks/useDictionary";

const CreateJobForm = () => {
    const dictionary = useDictionary('service/jobs');

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
        <div className='flex flex-col gap-5'>
            <Card radius='none'>
                <CardBody className='gap-10'>
                    <div className='flex justify-between items-end'>
                        <DatePicker
                            className="max-w-[284px]"
                            label={ dictionary?.createForm?.jobDate }
                            granularity="day"
                            variant='flat'
                            radius='none'
                            labelPlacement='outside-top'
                            defaultValue={ today(getLocalTimeZone()) }
                        />
                        <CreateNewVehicleOwnerModal dictionary={ dictionary }/>
                    </div>
                    <Select radius='none' variant='flat' labelPlacement='outside-top' className="max-w-xs" label={ dictionary?.createForm?.ownerSelect } placeholder={ dictionary?.createForm?.ownerSelectPlaceholder }>
                        { animals.map((animal) => (
                            <SelectItem key={ animal.key }>{ animal.label }</SelectItem>
                        )) }
                    </Select>
                    <div className='flex justify-between items-end'>
                        <Select radius='none' variant='flat' labelPlacement='outside-top' className="max-w-xs" label={ dictionary?.createForm?.vehicleSelect } placeholder={ dictionary?.createForm?.vehicleSelectPlaceholder }>
                            { animals.map((animal) => (
                                <SelectItem key={ animal.key }>{ animal.label }</SelectItem>
                            )) }
                        </Select>
                        <AddVehicleToOwnerModal dictionary={ dictionary }/>
                    </div>
                    <RadioGroup defaultValue="new" label={ dictionary?.createForm?.statuses?.title } orientation="horizontal">
                        <Radio value="new">{ dictionary?.createForm?.statuses?.new }</Radio>
                        <Radio value="inProgress">{ dictionary?.createForm?.statuses?.inProgress }</Radio>
                        <Radio value="onHold">{ dictionary?.createForm?.statuses?.onHold }</Radio>
                        <Radio value="completed">{ dictionary?.createForm?.statuses?.completed }</Radio>
                    </RadioGroup>
                    <Textarea
                        radius='none'
                        className="max-w-xl"
                        isClearable
                        label={ dictionary?.createForm?.taskDescription }
                        placeholder={ dictionary?.createForm?.taskDescriptionPlaceholder }
                        variant='flat'
                        labelPlacement='outside-top'
                        classNames={ {
                            inputWrapper: 'border-1'
                        } }
                    />
                    <Select
                        radius='none'
                        variant='flat'
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
                <CardFooter className='justify-end gap-2'>
                    <Button radius='none' color="primary">
                        { dictionary?.createForm?.submitButton }
                    </Button>
                </CardFooter>
            </Card>

        </div>
    );
};

export default CreateJobForm;
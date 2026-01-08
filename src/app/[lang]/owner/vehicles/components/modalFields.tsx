'use client';

import { Textarea } from "@heroui/input";
import { Autocomplete, AutocompleteItem, DateInput, Input } from "@heroui/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import dayjs from "dayjs";
import Image from "next/image";
import React, { useEffect, useState } from 'react';

import { getConstantsAction } from "@/actions/constantActions";
import { useDictionary } from "@/lib/hooks/useDictionary";
import { ConstantItem, VehicleTypeKey } from "@/types/constants";
import { OwnerVehicleModalDictionaryType } from "@/types/dictionary";
import { Vehicle } from "@/types/vehicle";

const ModalFields = ({ vehicle, dictionaryModal }: { vehicle?: Vehicle, dictionaryModal?: OwnerVehicleModalDictionaryType}) => {
    const [vehicleTypes, setVehicleTypes] = useState< ConstantItem<VehicleTypeKey>[] | null>(null);
    const dictionary = useDictionary('owner/vehicles');
    const [selectedType, setSelectedType] = useState<VehicleTypeKey | null>(
        vehicle?.type ?? null
    );
    useEffect(() => {
        (async () => {
            try {
                const { data } = await getConstantsAction();
                setVehicleTypes(data!.vehicleTypes);
            }
            catch {
                console.error('Contants not found');
            }
        })();
    }, []);

    return (
        <>
            <Input
                defaultValue={ vehicle?.name }
                labelPlacement='outside-top'
                isRequired
                label={ dictionaryModal?.name }
                name='name'
                placeholder={ dictionaryModal?.namePlaceholder }
            />
            { vehicleTypes && <Autocomplete
                labelPlacement="outside-top"
                isRequired
                label={ dictionaryModal?.type }
                placeholder={ dictionaryModal?.typePlaceholder }
                selectedKey={ selectedType }
                onSelectionChange={ (key) =>
                    setSelectedType(key as VehicleTypeKey)
                }
                items={ vehicleTypes }
            >
                { (vehicleType) => (
                    <AutocompleteItem key={ vehicleType.key }>
                        { dictionary?.vehicleTypes[vehicleType.key] }
                    </AutocompleteItem>
                ) }
            </Autocomplete> }
            <input type="hidden" name="type" value={ selectedType ?? '' } />
            <DateInput
                defaultValue={ vehicle?.year ? parseDate(dayjs(vehicle?.year).format('YYYY-MM-DD')) : null }
                isRequired
                name='year'
                labelPlacement='outside'
                className="max-w-sm"
                label={ dictionaryModal?.date }
                placeholderValue={ new CalendarDate(1900, 11, 6) }
            />
            <Textarea
                defaultValue={ vehicle?.description }
                name='description'
                labelPlacement='outside-top'
                label={ dictionaryModal?.description }
                placeholder={ dictionaryModal?.descriptionPlaceholder }
            />
            { vehicle?.images?.fileName ? <Image
                width={ 150 }
                height={ 150 }
                src={ vehicle?.images?.fileName }
                alt={ vehicle?.name ?? vehicle?.images?.fileName }
                className="w-full h-48 object-cover pt-5 pb-5"
            /> : <Input
                isRequired={ !Boolean(vehicle?.images?.fileName) }
                label={ dictionaryModal?.image }
                labelPlacement="outside"
                placeholder={ dictionaryModal?.imagePlaceholder }
                name="images"
                type="file"
            /> }
        </>
    );
};

export default ModalFields;
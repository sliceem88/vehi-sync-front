'use client';

import { Button, Input } from "@heroui/react";
import Form from "next/form";
import React from 'react';

import { updateUserProfile } from "@/actions/usersAction";
import { useClickHandle } from "@/lib/hooks/useClickHandle";
import { UserUpdateFieldsType } from "@/types/user";

type ProfileFieldsDictionary = {
    title: string
    description: string
    name: string
    surname: string
    type: string
    fastlink: string
    company: string
    updateButton: string
}

const UpdateForm = ({ fields, dictionary }: { fields: UserUpdateFieldsType[], dictionary: ProfileFieldsDictionary }) => {
    const { clickHandle } = useClickHandle();

    const handleFormAction = async (formData: FormData) => {
        const updatedUser = await clickHandle(() => updateUserProfile(formData))
        console.log('#updatedUser#', updatedUser);
    }

    return (
        <div>
            <Form action={ handleFormAction } className='pb-5' id='update-profile-form'>
                <div className='flex gap-2 flex-col'>
                    { fields.map((field) =>
                        <Input
                            labelPlacement='outside-top'
                            key={ field.name }
                            label={ field.name }
                            value={ field.value }
                            isDisabled={ field.isDisabled }
                            name={ field.fieldName }
                        />
                    ) }
                </div>
            </Form>
            <Button color='primary' type='submit' form='update-profile-form'>{ dictionary?.updateButton }</Button>
        </div>
    );
};

export default UpdateForm;
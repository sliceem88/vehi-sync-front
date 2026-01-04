import React from 'react';

import { dictionaryAction } from "@/actions/dictionaryAction";
import UpdateForm from "@/app/[lang]/owner/profile/components/updateForm";
import { auth } from "@/auth";

const Page = async ({ params }: {params: Promise<{ lang: string}>}) => {
    const { lang } = await params;
    const userProfile = await auth();
    const { content } = await dictionaryAction(lang, 'general')
    const profileFields = content?.profile ?? '';
    const fields = [
        { name: profileFields?.description, value: userProfile.description, isDisabled: false, fieldName: 'description' },
        { name: profileFields?.name, value: userProfile.name, isDisabled: false, fieldName: 'name' },
        { name: profileFields?.surname, value: userProfile.surname, isDisabled: false, fieldName: 'surname' },
        { name: profileFields?.type, value: profileFields?.userType[userProfile.userType], isDisabled: true, fieldName: 'type' },
        { name: profileFields?.fastlink, value: userProfile.fastLink, isDisabled: true, fieldName: 'fastlink' },
    ];

    return (
        <div className="flex w-full justify-center">
            <div className="max-w-5xl w-full">
                <div className="pb-5 pt-5">
                    <h2 className='text-2xl/7 font-bold'>{ profileFields?.title }</h2>
                </div>
                <UpdateForm fields={ fields } dictionary={ profileFields } />
            </div>
        </div>
    );
};

export default Page;
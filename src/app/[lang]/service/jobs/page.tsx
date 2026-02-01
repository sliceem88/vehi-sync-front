import './style.scss'

import { Divider } from "@heroui/react";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from 'react';

import { dictionaryAction } from "@/actions/dictionaryAction";
import { UserType } from "@/lib/constants";
import { validUserTypeForPage } from "@/lib/helpers/userType";

const JobsPage = async ({ params }: {params: Promise<{lang: string}>}) => {
    await validUserTypeForPage(UserType.SERVICE);

    const { lang } = await params;
    const { content } = await dictionaryAction(lang, 'service/jobs');

    return (
        <div className="flex p-4 flex-wrap w-full gap-3">
            <Link href={ `/${lang}/service/jobs/new` } className='border-1 pl-2 pr-2 Link-Button'>
                <Plus size={ 18 } />
                { content?.createForm?.createButton }
            </Link>
            <Divider />
            <h3> { content?.pendingForm?.heading }</h3>
        </div>
    );
};

export default JobsPage;
import React from 'react';

import { dictionaryAction } from "@/actions/dictionaryAction";
import CreateJobForm from "@/app/[lang]/service/jobs/components/createJobForm";
import { UserType } from "@/lib/constants";
import { validUserTypeForPage } from "@/lib/helpers/userType";
import { getServiceMechanics, getVehicleForJobs } from "@/lib/queries/services";

const NewJobPage = async ({ params }: {params: Promise<{lang: string}>}) => {
    await validUserTypeForPage(UserType.SERVICE);
    const mechanics = await getServiceMechanics();
    const vehiclesForJob = await getVehicleForJobs();
    const { lang } = await params;
    const { content } = await dictionaryAction(lang, 'service/jobs');

    return (
        <div className='p-5'>
            <h3>{ content?.createForm?.createButton }</h3>
            <CreateJobForm />
        </div>
    );
};

export default NewJobPage;
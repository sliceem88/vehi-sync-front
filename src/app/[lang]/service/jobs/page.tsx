import { Divider } from "@heroui/react";
import React from 'react';

import { dictionaryAction } from "@/actions/dictionaryAction";
import { UserType } from "@/lib/constants";
import { validUserTypeForPage } from "@/lib/helpers/userType";
import { getServiceMechanics, getVehicleForJobs } from "@/lib/queries/services";

import CreateJobForm from "./components/createJobForm";

const JobsPage = async ({ params }: {params: Promise<{lang: string}>}) => {
    await validUserTypeForPage(UserType.SERVICE);

    const { lang } = await params;
    const mechanics = await getServiceMechanics();
    const vehiclesForJob = await getVehicleForJobs();
    const { content } = await dictionaryAction(lang, 'service/jobs');

    return (
        <div className="flex p-4 flex-wrap w-full gap-3">
            <CreateJobForm />
            <Divider />
            <h3> { content?.pendingForm?.heading }</h3>
        </div>
    );
};

export default JobsPage;
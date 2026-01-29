import React from 'react';

import { getServiceMechanics, getVehicleForJobs } from "@/lib/queries/services";

import CreateJobForm from "./components/createJobForm";

const JobsPage = async () => {
    const mechanics = await getServiceMechanics();
    const vehiclesForJob = await getVehicleForJobs();

    return (
        <div className="flex p-4 flex-wrap w-full">
            <CreateJobForm mechanics={ mechanics } vehicles={ vehiclesForJob }/>
        </div>
    );
};

export default JobsPage;
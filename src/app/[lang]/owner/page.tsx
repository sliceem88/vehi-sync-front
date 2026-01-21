import { Card, CardBody } from "@heroui/react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { Chip } from "@heroui/chip";
import React from "react";

import { dictionaryAction } from "@/actions/dictionaryAction";
import ProcessingServiceCard from "@/app/[lang]/owner/component/processingServiceCard";
import { UserType } from "@/lib/constants";
import { validUserTypeForPage } from "@/lib/helpers/userType";
import { getOwnerAssignedOrRequestedServices } from "@/lib/queries/services";
import { ServiceRequestStatusType } from "@/types/serviceRequest";

const OwnerPage = async ({ params }: {params: Promise<{lang: string}>}) => {
    await validUserTypeForPage(UserType.OWNER)

    const requestedAssignedServices = await getOwnerAssignedOrRequestedServices();
    const { lang } = await params;
    const { content } = await dictionaryAction(lang, 'general');

    const statusColor: Record<ServiceRequestStatusType, "primary" | "success" | "danger" | "default" | "secondary" | "warning"> = {
        pending: "primary",
        approved: "success",
        declined: "danger"
    };

    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <Card>
                <CardBody>
                    Service Owner Dashboard
                </CardBody>
            </Card>
            <div>
                { requestedAssignedServices.map(requestedAssignedService => {
                    return (
                        <ProcessingServiceCard key={ requestedAssignedService.id } data={ requestedAssignedService }>
                            <Chip color={ statusColor[requestedAssignedService.status] }>{ content?.serviceRequestStatus?.[requestedAssignedService.status] }</Chip>
                        </ProcessingServiceCard>
                    )
                }) }
            </div>
        </div>
    );
}

export default OwnerPage;

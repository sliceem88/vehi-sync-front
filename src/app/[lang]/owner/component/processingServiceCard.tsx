import { CardFooter, CardHeader } from "@heroui/card";
import { Card, CardBody, Divider } from "@heroui/react";
import React from 'react';

import { ServiceRequestType } from "@/types/serviceRequest";

const ProcessingServiceCard = ({ data, children }: {data: ServiceRequestType, children: React.ReactNode}) => {
    return (
        <div>
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-small text-default-500">{ data.service.companyName }</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="text-md">{ data?.service.description }</p>
                    <p className="text-md">{ data?.serviceComment }</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    { children }
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProcessingServiceCard;
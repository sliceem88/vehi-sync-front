'use client'

import { Accordion, AccordionItem, ScrollShadow } from "@heroui/react";
import React from 'react';

import { ServiceUserType } from "@/types/user";

const Services = ({ services }: {services: ServiceUserType[]}) => {
    return (
        <ScrollShadow className="w-[300px] h-[300px]">
            <Accordion variant="splitted">
                { services.map((service) => <AccordionItem key={ service.id } aria-label={ service.name } title={ service.name }>
                    { JSON.stringify(services) }
                </AccordionItem>) }
            </Accordion>
        </ScrollShadow>
    );
};

export default Services;
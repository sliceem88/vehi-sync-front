'use client'

import { Accordion, AccordionItem, ScrollShadow } from "@heroui/react";
import React from 'react';

import ServiceSelectModal from "@/app/[lang]/owner/components/serviceSelectModal";
import { ServiceUserType } from "@/types/user";

const Services = ({ services, title, modal }: {services: ServiceUserType[], title: string, modal: React.ComponentType<{ service: ServiceUserType }>}) => {
    const ModalComponent = modal;

    return (
        <ScrollShadow className="w-[300px] h-[300px]">
            <p>{ title }</p>
            <Accordion variant="splitted">
                { services.map((service) => <AccordionItem key={ service.id } aria-label={ service.name } title={ service.name }>
                    <ModalComponent service={ service }/>
                    { JSON.stringify(service) }
                </AccordionItem>) }
            </Accordion>
        </ScrollShadow>
    );
};

export default Services;
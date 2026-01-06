import { Card, CardBody } from "@heroui/react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import Services from "@/components/services/services";
import { UserType } from "@/lib/constants";
import { validUserTypeForPage } from "@/lib/helpers/userType";
import { getAllServices, getUserAssignedServices } from "@/lib/queries/services";

import ServiceDeleteModal from "./components/serviceDeleteModal";
import ServiceSelectModal from "./components/serviceSelectModal";

export default async function OwnerPage() {
    await validUserTypeForPage(UserType.OWNER)

    const services = await getAllServices();
    const myServices = await getUserAssignedServices();

    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <Services services={ services } title='Services to select' modal={ ServiceSelectModal }/>
            <Card>
                <CardBody>
                    <Services services={ myServices } title='My services' modal={ ServiceDeleteModal }/>
                </CardBody>
            </Card>
        </div>
    );
}

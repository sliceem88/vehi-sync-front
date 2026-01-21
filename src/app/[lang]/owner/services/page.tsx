import { dictionaryAction } from "@/actions/dictionaryAction";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { UserType } from "@/lib/constants";
import { validUserTypeForPage } from "@/lib/helpers/userType";
import { getAllServices, getOwnerAssignedOrRequestedServices } from "@/lib/queries/services";
import { getMyVehicles } from "@/lib/queries/vehicle";
import { InActionServiceItemsType } from "@/types/serviceRequest";

import TabSteps from "./components/tabSteps";

const ServiceAssignPage = async({ params }: { params: Promise<{ lang: string}>})=> {
    await validUserTypeForPage(UserType.OWNER)

    const { lang } = await params;
    const services = await getAllServices();
    const requestedAssignedServices = await getOwnerAssignedOrRequestedServices();
    const vehicles = await getMyVehicles();
    const { content } = await dictionaryAction(lang, 'owner/service');
    const inActiveItems = requestedAssignedServices.reduce((acc: InActionServiceItemsType, requestedAssignedService) => {
        acc.vehicleIds.push(requestedAssignedService.vehicleId);
        acc.serviceIds.push(requestedAssignedService.serviceId);

        return acc;
    }, { vehicleIds: [], serviceIds: [] });

    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-360 mx-auto w-full">
            <TabSteps services={ services } vehicles={ vehicles } dictionary={ content } inActiveItems={ inActiveItems }/>
        </div>
    );
}

export default ServiceAssignPage;
import { dictionaryAction } from "@/actions/dictionaryAction";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { UserType } from "@/lib/constants";
import { validUserTypeForPage } from "@/lib/helpers/userType";
import { getAllServices, getUserAssignedServices } from "@/lib/queries/services";
import { getMyVehicles } from "@/lib/queries/vehicle";

import TabSteps from "./components/tabSteps";

const ServiceAssignPage = async({ params }: { params: Promise<{ lang: string}>})=> {
    await validUserTypeForPage(UserType.OWNER)

    const { lang } = await params;
    const services = await getAllServices();
    const myServices = await getUserAssignedServices();
    const vehicles = await getMyVehicles();
    const { content } = await dictionaryAction(lang, 'owner/service');

    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            { /*<Services services={ services } title='Services to select' modal={ ServiceSelectModal }/>*/ }
            { /*<Card>*/ }
            { /*    <CardBody>*/ }
            { /*        <Services services={ myServices } title='My services' modal={ ServiceDeleteModal }/>*/ }
            { /*    </CardBody>*/ }
            { /*</Card>*/ }
            <TabSteps services={ services } vehicles={ vehicles } dictionary={ content } />
        </div>
    );
}

export default ServiceAssignPage;
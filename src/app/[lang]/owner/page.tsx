import { Card, CardBody } from "@heroui/react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import AddNewVehicleModal from "@/app/[lang]/components/addNewVehicleModal";
import ServiceDeleteModal from "@/app/[lang]/owner/components/serviceDeleteModal";
import ServiceSelectModal from "@/app/[lang]/owner/components/serviceSelectModal";
import Services from "@/components/services/services";
import VehicleCard from "@/components/vehicleCard/vehicleCard";
import { getAllServices, getUserAssignedServices } from "@/lib/queries/services";
import { getMyVehicles } from "@/lib/queries/vehicle";

export default async function Home() {
    const vehicles = await getMyVehicles();
    const services = await getAllServices();
    const myServices = await getUserAssignedServices();

    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <Card>
                <CardBody className='px-4 py-6'>
                    <p>My vehicles</p>
                    { vehicles.map((vehicle) => <VehicleCard key={ vehicle.id } vehicle={ vehicle }/>) }
                    <AddNewVehicleModal />
                </CardBody>
            </Card>
            <Services services={ services } title='Services to select' modal={ ServiceSelectModal }/>
            <Card>
                <CardBody>
                    <Services services={ myServices } title='My services' modal={ ServiceDeleteModal }/>
                </CardBody>
            </Card>
        </div>
    );
}

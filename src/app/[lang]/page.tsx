import { Card, CardBody } from "@heroui/react";

import AddNewVehicleModal from "@/app/[lang]/components/addNewVehicleModal";
import PwaButton from "@/components/pwaButton/pwaButton";
import Services from "@/components/services/services";
import RegisterSW from "@/components/sw/register-sw";
import VehicleCard from "@/components/vehicleCard/vehicleCard";
import { getAllServices } from "@/lib/queries/services";
import { getMyVehicles } from "@/lib/queries/vehicle";

export default async function Home() {
    const vehicles = await getMyVehicles();
    const services = await getAllServices();

    console.log('###', services);
    
    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <RegisterSW />
            <PwaButton />
            <Card>
                <CardBody className='px-4 py-6'>
                    <p>My vehicles</p>
                    { vehicles.map((vehicle) => <VehicleCard key={ vehicle.id } vehicle={ vehicle }/>) }
                    <AddNewVehicleModal />
                </CardBody>
            </Card>
            <p> Services to select </p>
            <Services services={ services }/>
            <Card>
                <CardBody>
                    <p>My services</p>
                </CardBody>
            </Card>
        </div>
    );
}

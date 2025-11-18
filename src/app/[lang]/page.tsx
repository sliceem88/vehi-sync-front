import {Button, Card, CardBody} from "@heroui/react";
import AddNewVehicleModal from "@/app/[lang]/components/addNewVehicleModal";
import RegisterSW from "@/components/sw/register-sw";

export default function Home() {
  return (
    <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        <RegisterSW />
        <Card>
            <CardBody className='px-4 py-6'>
                <p>My vehicles</p>
               <AddNewVehicleModal />
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <p>My services</p>
            </CardBody>
        </Card>
    </div>
  );
}

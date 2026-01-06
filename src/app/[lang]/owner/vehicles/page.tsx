export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { dictionaryAction } from "@/actions/dictionaryAction";
import VehicleCard from "@/components/vehicleCard/vehicleCard";
import { UserType } from "@/lib/constants";
import { validUserTypeForPage } from "@/lib/helpers/userType";
import { getMyVehicles } from "@/lib/queries/vehicle";

import CreateVehicleModal from "./components/createVehicleModal";

export default async function OwnerVehiclePage({ params }: {params: Promise<{lang: string}>}) {
    await validUserTypeForPage(UserType.OWNER)
    const vehicles = await getMyVehicles();
    const { lang } = await params;
    const { content } = await dictionaryAction(lang, 'owner/vehicles');

    return (
        <div className="flex w-full justify-center">
            <div className="max-w-5xl w-full">
                <div className="pb-5 pt-5">
                    <CreateVehicleModal dictionary={ content } />
                </div>
                <div className=''>
                    <h2 className="text-2xl/7 font-bold pb-5 text-center">My vehicles</h2>
                    <div className="flex vehicle-group flex-wrap justify-around ml-2.5">
                        { vehicles.map((vehicle) => <VehicleCard key={ vehicle.id } vehicle={ vehicle } dictionary={ content.vehicleTypes }/>) }
                    </div>
                </div>
            </div>
        </div>
    );
}

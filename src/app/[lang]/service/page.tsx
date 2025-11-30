import { Card, CardBody } from "@heroui/react";

import MechanicAddModal from "@/app/[lang]/service/components/mechanicAddModal";
import { getServiceAssignedOwners } from "@/lib/queries/owners";
import { getServiceMechanics } from "@/lib/queries/services";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ServicePage() {
    const vehicleOwners = await getServiceAssignedOwners()
    const myMechanics = await getServiceMechanics()

    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <Card>
                <CardBody className='px-4 py-6'>
                    ServicePage
                </CardBody>
            </Card>
            <Card>
                <MechanicAddModal />
                <p>My mechanics</p>
                <CardBody className='px-4 py-6'>
                    { myMechanics.map((mechanic) => <p key={ mechanic.id }>{ mechanic.email }</p>) }
                </CardBody>
            </Card>
            <div>
                <p>Assigned Users</p>
                <Card>
                    { vehicleOwners.map((owner) => (<CardBody key={ owner.id }>
                        { JSON.stringify(owner) }
                    </CardBody>)) }
                </Card>
            </div>
        </div>
    );
}

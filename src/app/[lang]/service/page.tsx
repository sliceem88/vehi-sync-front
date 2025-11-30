import { Card, CardBody } from "@heroui/react";

import { getServiceAssignedOwners } from "@/lib/queries/owners";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ServicePage() {
    const vehicleOwners = await getServiceAssignedOwners()
    
    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <Card>
                <CardBody className='px-4 py-6'>
                    ServicePage
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

import { Card, CardBody } from "@heroui/react";

import { getMechanicService } from "@/lib/queries/mechanic";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function MechanicPage() {
    const myService = await getMechanicService();

    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <Card>
                <CardBody className='px-4 py-6'>
                    MechanicPage
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <p>My service</p>
                    { JSON.stringify(myService, null, 2) }
                </CardBody>
            </Card>
        </div>
    );
}

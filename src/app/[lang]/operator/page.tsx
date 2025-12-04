import { Card, CardBody } from "@heroui/react";

import { UserType } from "@/lib/constants";
import { validUserTypeForPage } from "@/lib/helpers/userType";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function OperatorPage() {
    await validUserTypeForPage(UserType.OPERATOR)

    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <Card>
                <CardBody className='px-4 py-6'>
                    OperatorPage
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

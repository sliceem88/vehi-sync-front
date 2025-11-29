import { Card, CardBody } from "@heroui/react";

export default async function MechanicPage() {
    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <Card>
                <CardBody className='px-4 py-6'>
                    MechanicPage
                </CardBody>
            </Card>
            <p> Services to select </p>
            <Card>
                <CardBody>
                    <p>My services</p>
                </CardBody>
            </Card>
        </div>
    );
}

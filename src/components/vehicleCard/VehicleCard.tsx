import React from 'react';
import {Card, CardBody} from "@heroui/react";
import {CardHeader} from "@heroui/card";
import Image from "next/image";

const VehicleCard = ({vehicle}) => {
    const {
        name,
        type,
        description,
        images,
        additionalInfo,
        year,
    } = vehicle;

    const mainImage = images?.[0] || "https://via.placeholder.com/400x250?text=No+Image";

    return (
        <Card className="w-full max-w-sm shadow-md border rounded-xl overflow-hidden">
            <CardHeader className="flex flex-col items-start p-4 gap-1 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">{type}</p>
                <p className="text-xs text-gray-400">{new Date(year).getFullYear()}</p>
            </CardHeader>

            <Image
                width={200}
                height={200}
                src={mainImage}
                alt={name}
                className="w-full h-48 object-cover"
            />

            <CardBody className="p-4 flex flex-col gap-2">
                <p className="text-gray-700 text-sm line-clamp-3">{description}</p>

                {additionalInfo && (
                    <pre className="text-xs bg-gray-100 p-2 rounded-md overflow-auto max-h-24">
            {JSON.stringify(additionalInfo, null, 2)}
          </pre>
                )}
            </CardBody>
        </Card>
    );
};

export default VehicleCard;
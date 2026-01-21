import { Chip } from "@heroui/chip";
import React from 'react';

type Status = "pending" | "approved" | "declined";

const StatusChip = ({ status }: {status: Status}) => {
    const statusColor: Record<Status, "primary" | "success" | "danger"> = {
        pending: "primary",
        approved: "success",
        declined: "danger"
    };

    return (
        <Chip color={ statusColor[status] }>{ status.toString() }</Chip>
    );
};

export default StatusChip;
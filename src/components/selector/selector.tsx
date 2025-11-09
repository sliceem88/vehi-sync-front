'use client';

import React from 'react';
import {Select, SelectItem} from "@heroui/react";

const Selector = ({items}: {items:  Iterable<{ key: string, label: string|number }>}) => {
    return (
        <Select
            className="max-w-xs"
            items={items}
            label="Type"
            placeholder="Select type of account"
        >
            {(type) => <SelectItem key={type.key}>{type.label}</SelectItem>}
        </Select>
    );
};

export default Selector;
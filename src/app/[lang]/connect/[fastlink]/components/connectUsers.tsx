'use client';

import { Button } from "@heroui/react";
import React from 'react';

import { usersConnectAction } from "@/actions/usersAction";
import { UsersType } from "@/lib/constants";
import { useClickHandle } from "@/lib/hooks/useClickHandle";
import { BasicUser } from "@/types/user";

const ConnectUsers = ({ fastLinkUser }: {fastLinkUser: BasicUser}) => {
    const { clickHandle } = useClickHandle();

    const handleUsersConnect = async () => {
        await clickHandle(() => usersConnectAction(fastLinkUser.id));
    }

    return (
        <div>
            Do you want to connect this user { fastLinkUser?.name } - { fastLinkUser?.email } - { UsersType[fastLinkUser?.type] }?
            <Button color="default" >No</Button>
            <Button color="primary" onPress={ handleUsersConnect }>Yes</Button>
        </div>
    );
};

export default ConnectUsers;
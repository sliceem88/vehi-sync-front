'use client';

import { Button } from "@heroui/react";
import React from 'react';

import { usersConnectAction } from "@/actions/usersAction";
import { UsersType } from "@/lib/constants";
import { useClickHandle } from "@/lib/hooks/useClickHandle";
import { ConnectDictionaryType } from "@/types/dictionary";
import { BasicUser } from "@/types/user";

const ConnectUsers = ({ fastLinkUser, dictionary }: {fastLinkUser: BasicUser, dictionary: ConnectDictionaryType}) => {
    const { clickHandle } = useClickHandle();

    const handleUsersConnect = async () => {
        await clickHandle(() => usersConnectAction(fastLinkUser.id));
    }

    const connectText = dictionary.connectRequestText.replace('{{email}}', fastLinkUser.email).replace('{{type}}', UsersType[fastLinkUser?.type]);

    return (
        <div>
            { connectText }
            <Button color="default" >No</Button>
            <Button color="primary" onPress={ handleUsersConnect }>Yes</Button>
        </div>
    );
};

export default ConnectUsers;
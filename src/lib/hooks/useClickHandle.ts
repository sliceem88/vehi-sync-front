import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

import { ActionHandlerResponseType } from "@/types/actionHandler";

export const useClickHandle = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const clickHandle = async <T>(
        callBack: () => Promise<ActionHandlerResponseType<T>>,
    ): Promise<T | undefined> => {
        setIsLoading(true);
        try {
            const result = await callBack();

            if (result.status) {
                toast.success(result.message);
                router.refresh();

                return result.data!;
            }

            toast.error(result.message);
            setIsError(true);

            return undefined;
        }
        catch (error) {
            toast.error('An unexpected error occurred');
            console.error('Click handle error:', error);
            setIsError(true);

            return undefined;
        }
        finally {
            setIsLoading(false);
        }
    };

    return { clickHandle, isLoading, isError };
};
import { fetcher } from "@/lib/fetcher";
import { BasicUser } from "@/types/user";

export const getUser = () => {
    return fetcher.get('user/me').json();
}

export const register = async (data: { email: string, password: string, type: string}): Promise<{ error?: string, user: BasicUser}> => {
    return await fetcher.post('user/register', { json: data }).json();
}

export const updateProfile = async (data: FormData) => {
    return await fetcher.put('user', { body: data }).json();
}
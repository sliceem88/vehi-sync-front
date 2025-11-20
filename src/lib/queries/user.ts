import { fetcher } from "@/lib/fetcher";

export const getUser = () => {
    return fetcher.get('user/me').json();
}
export const register = async (data: { email: string, password: string, type: string}) => {
    return await fetcher.post('user/register', { json: data }).json();
}
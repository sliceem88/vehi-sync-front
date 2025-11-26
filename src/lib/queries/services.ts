import { fetcher } from "@/lib/fetcher";

export const getAllServices = async () => {
    return await fetcher.get('service/all').json();
}
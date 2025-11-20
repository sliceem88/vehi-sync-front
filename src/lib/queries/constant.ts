import { fetcher } from "@/lib/fetcher";
import { Constant } from "@/types/constants";

export const getAccountTypes = () => {
    return fetcher.get<Constant[]>('constant/all').json();
}
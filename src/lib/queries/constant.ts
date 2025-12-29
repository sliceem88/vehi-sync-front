import { fetcher } from "@/lib/fetcher";
import { Constants } from "@/types/constants";

export const getConstants = () => {
    return fetcher.get<Constants>('constant/all').json();
}
import {fetcher} from "@/lib/fetcher";

export const getProfile = () => {
    return fetcher.get('user/me').json();
}
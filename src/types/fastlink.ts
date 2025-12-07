import { BasicUser } from "@/types/user";

export type FastLinkResult =
    | { success: true; user: BasicUser }
    | { success: false; status: number };
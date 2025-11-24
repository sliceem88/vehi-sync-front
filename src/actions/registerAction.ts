'use server'

import { register } from "@/lib/queries/user";

export const registerAction = async (formData: FormData) => {
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();
    const type = formData.get('type')?.toString();

    if (type && password && email) {
        const user = {
            email,
            password,
            type
        }

        return await register(user)
    }

    return null;
}
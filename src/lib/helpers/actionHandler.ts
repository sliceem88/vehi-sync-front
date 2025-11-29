import { ActionHandlerResponseType } from "@/types/actionHandler";

export async function actionHandler<T>(
    callback: () => Promise<T>,
    successMessage = "Operation successful",
    errorMessage = "Error occurred while doing operation"
): Promise<ActionHandlerResponseType<T>> {
    try {
        const data = await callback();
        return {
            status: true,
            message: successMessage,
            data,
        };
    }
    catch (error: unknown) {
        if (error instanceof Error) {
            return {
                status: false,
                message: error.message || errorMessage,
            };
        }
        return {
            status: false,
            message: errorMessage,
        };
    }
}
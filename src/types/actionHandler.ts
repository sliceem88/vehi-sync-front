export type ActionHandlerResponseType<T> = {
    status: boolean;
    message: string;
    data?: T;
    errors?: Record<string, string[]>;
};
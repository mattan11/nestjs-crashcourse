import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from '@server//trpc/trpc.router'

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `${process.env.NEXT_PUBLIC_NESTJS_SERVER_URL}/trpc`, // TODO:you should update this to use env variables
        }),
    ],
});
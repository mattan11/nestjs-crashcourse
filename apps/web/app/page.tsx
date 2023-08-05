import ClientSide from "./ClientSide";
import { trpc } from "./trpc";

export default async function Home() {
    const response = await trpc.hello.query({name: "Server"});
    return (
        <div>
            <p>Server side - {response}</p>
            <ClientSide />
        </div>
    );
}
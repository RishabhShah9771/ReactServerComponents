import ClientDemo from "@/components/clientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCdemo";
import ServerActionsDemo from "@/components/ServerActions";

export default function Home() {
  return (
    <main>
      <ClientDemo>
        <RSCDemo />
        <DataFetchingDemo />
        <ServerActionsDemo />
      </ClientDemo>
    </main>
  );
}

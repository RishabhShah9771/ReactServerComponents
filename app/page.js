import ClientDemo from "@/components/clientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCdemo";
import ServerActionsDemo from "@/components/ServerActions";
import UsePromiseDemo from "@/components/UsePromiseDemo";
import { Suspense, use } from "react";
import { readFile } from "node:fs/promises";
import ErrorBoundary from "@/components/ErrorBoundry";

export default async function Home() {
  const fetchUserPromise = new Promise((resolve, reject) =>
    setTimeout(async () => {
      const dataDemo = await readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(dataDemo);
      resolve(users);
    }, 2000)
  );

  return (
    <main>
      <ClientDemo>
        <RSCDemo />
        <DataFetchingDemo />
        <ServerActionsDemo />
      </ClientDemo>

      <ErrorBoundary fallback={<p>something went wrong..</p>}>
        <Suspense fallback={<p>loading...</p>}>
          <UsePromiseDemo usersPromise={fetchUserPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}

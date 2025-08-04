"use client";
import { use } from "react";
export default function UsePromiseDemo({ usersPromise }) {
  const users = use(usersPromise);
  return (
    <div className="rsc">
      <h2>RSC with Data Fetching</h2>
      <p>
        Uses <strong>async / await</strong> for data fetching.
      </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.title})
          </li>
        ))}
      </ul>
    </div>
  );
}

// It is used to access promises wihtout using async await in the client side components.
// It can also be used for getting access to Context.
// It Works together with suspense to handle data fetching and loading fallbacks.
// this use hook only works with suspense feature or it works with the specila promise that is used by react server components.

"use client";

export default function ClientDemo({ children }) {
  console.log("ClientDemo rendered");
  return (
    <div className="client-cmp">
      <h2>A React Client Component</h2>
      <p>
        Will be rendered on the client <strong>AND</strong> the server.
      </p>
      {children}
    </div>
  );
}

// Rendered on the server and the client side.
// if a react server component is called inside a client component then it will be converted to client component as well.
// to force a server component tobe a server component then we need to pass the component function in server component as a async function.

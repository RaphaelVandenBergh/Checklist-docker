import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { sessionStorage } from "~/utils/session.server";
import { authenticator } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({request}) => {
  await authenticator.authenticate("TeamLeader", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
}

export default function AuthCallback() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Callback</h1>      
    </div>
  );
}
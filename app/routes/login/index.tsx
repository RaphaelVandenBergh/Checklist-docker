import type { LoaderFunction } from "@remix-run/node"
import { authenticator } from "~/utils/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  // If the user is already authenticated redirect to /dashboard directly
  return await authenticator.authenticate("TeamLeader", request, {
    successRedirect: "/",
    failureRedirect: "/error",
  },
  );
};
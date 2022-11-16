import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
import { OAuth2Strategy } from "remix-auth-oauth2";
import { tokenCookie } from "./session.server";
import {redirect} from "@remix-run/node";
import { useFetcher } from "@remix-run/react";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator(sessionStorage);

authenticator.use(
    new OAuth2Strategy(
        {
            authorizationURL: `https://focus.teamleader.eu/oauth2/authorize`,
            tokenURL: `https://focus.teamleader.eu/oauth2/access_token`,
            clientID: "00a9695dcbed9d3c0694cfc0cf39184f",
            clientSecret: "9bcb3cf7b46fd0260390dcea4860c9d6",
            callbackURL: "http://localhost:3000/login/callback",

        },
        async ({ accessToken, refreshToken, extraParams }) => {
            return (accessToken);
            
            
            
            
        }
    ),
    // this is optional, but if you setup more than one OAuth2 instance you will
    // need to set a custom name to each one
    "TeamLeader"
);

export async function validateCredentials() { }
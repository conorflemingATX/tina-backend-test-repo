import { TinaNodeBackend, LocalBackendAuthProvider } from "@tinacms/datalayer";
import { TinaAuthJSOptions, AuthJsBackendAuthProvider } from "@tinacms/authjs";
import { GithubProvider } from "tinacms-gitprovider-github";

import databaseClient from "../../../tina/__generated__/databaseClient";
import databaseBackend from "./database";

const isLocal = process.env["TINA_PUBLIC_IS_LOCAL"] === 'true';

const token = process.env["GITHUB_PERSONAL_ACCESS_TOKEN"];
const owner = process.env["GITHUB_OWNER"];
const repo = process.env["GITHUB_REPO"];
const branch = process.env["GITHUB_BRANCH"];

const githubProvider = new GithubProvider({
    branch,
    owner,
    repo,
    token
});

const handler = TinaNodeBackend({
    authProvider: isLocal
        ? LocalBackendAuthProvider()
        : AuthJsBackendAuthProvider({
            authOptions: TinaAuthJSOptions({
                databaseClient,
                secret: process.env["NEXTAUTH_SECRET"]
            })
        })
});

export default (req, res) => {
    return handler(req, res);
};

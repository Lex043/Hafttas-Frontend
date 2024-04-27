import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const baseURL = "https://hafttas-backend.onrender.com";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username",
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password",
                },
            },

            async authorize(credentials) {
                const res = await fetch(
                    "http://localhost:3000/api/auth/signin",
                    {
                        method: "POST",
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" },
                    }
                );
                const user = await res.json();

                // If no error and we have user data, return the user object
                if (user) {
                    return user;
                }
                // Return null if user data could not be retrieved
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/signin",
        signOut: "/signout",
    },
};

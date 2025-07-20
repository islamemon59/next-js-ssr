import dbConnect, { collectionName } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        userName: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("this is credential", credentials);
        const { userName, password } = credentials;
        const user = await dbConnect(collectionName.ALL_DATA).findOne({ userName });

        const isPasswordOk = password == user?.password;

        if (isPasswordOk) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        session.user.userName = token.userName;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.userName = user.userName;
        token.role = user.role;
      }
      return token;
    },
  },
};

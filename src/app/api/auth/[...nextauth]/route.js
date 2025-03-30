import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials;

          // [IMPROVED] Basic validation
          if (!email || !password) {
            throw new Error("Missing credentials");
          }

          const db = await connectDB();
          const user = await db.collection("users").findOne({ email });

          if (!user) {
            throw new Error("User not found");
          }

          // [IMPROVED] Async password comparison
          const passwordValid = await bcrypt.compare(password, user.password);

          if (!passwordValid) {
            throw new Error("Incorrect password");
          }

          // [IMPROVED] Return essential user data only
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error("Authentication error:", error.message);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {},
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };

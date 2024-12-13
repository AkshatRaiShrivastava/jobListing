import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { NextApiRequest, NextApiResponse } from "next"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
}

const handler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions)

export { handler as GET, handler as POST }

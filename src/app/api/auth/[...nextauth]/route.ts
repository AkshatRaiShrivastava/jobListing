import { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
    // ...add more providers here
  ],
  
}

const nextAuthHandler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions)

export const GET = (req: NextApiRequest, res: NextApiResponse) => nextAuthHandler(req, res)
export const POST = (req: NextApiRequest, res: NextApiResponse) => nextAuthHandler(req, res)

export default nextAuthHandler;

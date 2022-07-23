import axios from "axios"
import { API_URL } from "../config"
import { AuthenticationTokens } from "../types/authentication"
import { AUTHENTICATION, VERIFY } from "./graphql_queries"

export const authenticate = async (address: string, signature: string): Promise<AuthenticationTokens | any> => {
	try {
		const data = await axios.post(API_URL, {
			query: AUTHENTICATION,
			variables: {
				request: {
					address,
					signature
				}
			}
		})

		const authentication_tokens: AuthenticationTokens = data.data.data.authenticate

		return authentication_tokens
	} catch (e: any) {
		return e.response.data.errors
	}
}

export const verify = async (access_token: string): Promise<boolean | any> => {
	try {
		if (!access_token) throw "No Authentication Token"
		const data = await axios.post(API_URL, {
			query: VERIFY,
			variables: {
				request: {
					accessToken: access_token,
				}
			}
		})

		const verification = data.data.data.verify

		return verification
	} catch (e: any) {
		return e.response.data.errors
	}
}
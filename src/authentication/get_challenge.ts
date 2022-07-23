import axios from "axios"
import { API_URL } from "../config"
import { ChallengeRequest } from "../types/authentication"
import { GET_CHALLENGE } from "./graphql_queries"

export const get_challenge = async (address: string): Promise<ChallengeRequest | any> => {
	try {
		const data = await axios.post(API_URL, {
			query: GET_CHALLENGE,
			variables: {
				request: {
					address
				}
			}
		})

		const challenge: ChallengeRequest = data.data.data

		return challenge
	} catch (e: any) {
		return e.response.data
	}
}
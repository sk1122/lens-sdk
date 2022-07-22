import axios from "axios"
import { API_URL } from "../config"
import { Followers } from "../types/profile"
import { GET_FOLLOWERS } from "./graphql_queries"

export const get_followers = async (id: string, limit: number): Promise<Followers[] | any> => {
	try {
		const data = await axios.post(API_URL, {
			query: GET_FOLLOWERS,
			variables: {
				request: {
					profileId: id,
					limit: limit
				},
			},
		})

		const followers: Followers[] = data.data.data.followers.items

		return followers
	} catch (e: any) {
		return e.response.data.errors
	}
}
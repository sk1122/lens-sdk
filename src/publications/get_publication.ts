import axios from "axios";
import { API_URL } from "../config";
import { ExplorePublicationResult } from "../types/explore";
import { GetPublicationsParams } from "../types/publication";
import { GET_PUBLICATION } from "./graphql_queries";

export const get_publication = async (publicationId: string) => {
	try {
		const data = await axios.post(API_URL, {
			query: GET_PUBLICATION,
			variables: {
				request: {
					publicationId
				}
			}
		})

		let result = data.data.data.publication
		result.profile.picture = result.profile?.picture?.original?.url
		result.profile.coverPicture = result.profile?.coverPicture?.original?.url

		return result as ExplorePublicationResult
	} catch (e) {
		throw e
	}
}
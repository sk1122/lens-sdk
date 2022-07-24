import axios from "axios"
import { API_URL } from "../config"
import { ExplorePublicationRequest, ExplorePublicationResult, SortCriteria } from "../types/explore"
import { EXPLORE_PUBLICATIONS } from "./graphql_queries"

export const explore_publications = async (explorePublicationsParams: ExplorePublicationRequest) => {
	try {
		const data = await axios.post(API_URL, {
			query: EXPLORE_PUBLICATIONS,
			variables: {
				request: explorePublicationsParams
			}
		})

		const explore_data_need = data.data.data.explorePublications.items
		const explore_data = explore_data_need.map((d: any) => {
			d.profile.picture = d.profile?.picture?.original?.url
			d.profile.coverPicture = d.profile?.coverPicture?.original?.url
			return d
		}) as ExplorePublicationResult[]

		return explore_data
	} catch (e) {
		throw e
	}
}
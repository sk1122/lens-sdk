import axios from "axios"
import { API_URL } from "../config"
import { ExploreProfileRequest, ExploreProfileResult, ProfileSortCriteria } from "../types/explore"
import { EXPLORE_PROFILES } from "./graphql_queries"

export const explore_profiles = async (explore_profile_params: ExploreProfileRequest) => {
	try {
		const data = await axios.post(API_URL, {
			query: EXPLORE_PROFILES,
			variables: {
				request: explore_profile_params
			}
		})

		const explore_data_need = data.data.data.exploreProfiles.items
		const explore_data = explore_data_need.map((d: any) => {
			d.picture = d.picture?.original?.url
			d.coverPicture = d.coverPicture?.original?.url
			return d
		}) as ExploreProfileResult[]

		return explore_data
	} catch (e) {
		throw e
	}
}
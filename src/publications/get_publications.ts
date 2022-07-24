import axios from "axios";
import { API_URL } from "../config";
import { ExplorePublicationResult } from "../types/explore";
import { GetPublicationsParams, PublicationType } from "../types/publication";
import { GET_PUBLICATIONS } from "./graphql_queries";

export const get_publications = async (params: GetPublicationsParams) => {
	try {
		const data = await axios.post(API_URL, {
			query: GET_PUBLICATIONS,
			variables: {
				request: params
			}
		})

		const explore_data_need = data.data.data.publications.items
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
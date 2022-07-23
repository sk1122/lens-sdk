import axios from "axios"
import { API_URL } from "../config"
import { Profile } from "../types/profile"
import { GET_PROFILES, GET_PROFILE_BY_LENS_ID } from "./graphql_queries"

export const get_profile_by_address = async (address: string): Promise<Profile | any> => {
	try {
		const data = await axios.post(API_URL, {
			query: GET_PROFILES,
			variables: {
				address: address
			}
		})

		if (data.data.data && data.data.data.profiles.length <= 0 && data.data.data.profiles.items.length <= 0) {
			return false
		}

		const item = data.data.data.profiles.items[0]

		if (!item) throw "can't find profile at " + address

		let profile: Profile = {
			id: item.id,
			name: item.name,
			bio: item.bio,
			attributes: item.attributes,
			followNftAddress: item.followNftAddress,
			metadata: item.metadata,
			isDefault: item.isDefault,
			picture: item?.picture?.original?.url,
			handle: item.handle,
			coverPicture: item?.coverPicture?.original?.url,
			ownedBy: item.ownedBy,
			dispatcher: item.dispatcher,
			stats: item.stats,
			followModule: item.followModule
		}

		return profile
	} catch (e: any) {
		console.log(e)
	}
}

export const get_profile_by_lens_id = async (lens_id: string): Promise<Profile | any> => {
	try {
		const data = await axios.post(API_URL, {
			query: GET_PROFILE_BY_LENS_ID,
			variables: {
				id: lens_id
			}
		})

		if (!(data.data.data) && !(data.data.data.profile)) {
			return false
		}

		const item = data.data.data.profile

		if (!item) throw "can't find profile"

		let profile: Profile = {
			id: item.id,
			name: item.name,
			bio: item.bio,
			attributes: item.attributes,
			followNftAddress: item.followNftAddress,
			metadata: item.metadata,
			isDefault: item.isDefault,
			picture: item?.picture?.original?.url,
			handle: item.handle,
			coverPicture: item?.coverPicture?.original?.url,
			ownedBy: item.ownedBy,
			dispatcher: item.dispatcher,
			stats: item.stats,
			followModule: item.followModule
		}

		return profile
	} catch (e: any) {
		console.log(e)
	}
}
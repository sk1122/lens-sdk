import { Profile } from "./profile"

export enum SortCriteria {
	LATEST = "LATEST",
	TOP_COLLECTED = "TOP_COLLECTED",
	TOP_MIRRORED = "TOP_MIRRORED",
	TOP_COMMENTED = "TOP_COMMENTED"
}

export enum ProfileSortCriteria {
	CREATED_ON = 'CREATED_ON',
	MOST_FOLLOWERS = 'MOST_FOLLOWERS',
	LATEST_CREATED = 'LATEST_CREATED',
	MOST_POSTS = 'MOST_POSTS',
	MOST_COMMENTS = 'MOST_COMMENTS',
	MOST_MIRRORS = 'MOST_MIRRORS',
	MOST_PUBLICATION = 'MOST_PUBLICATION',
	MOST_COLLECTS = 'MOST_COLLECTS',
}


export interface ExplorePublicationRequest {
	sortCriteria: SortCriteria,
	limit: number
}

export interface ExplorePublicationResult {
	__typename: string,
	id: string,
	profile: Profile,
	stats: {
		totalAmountOfMirrors: number,
		totalAmountOfCollects: number,
		totalAmountOfComments: number
	},
	metadata: {
		name: string,
		description: string,
		content: string,
		media: any[],
		attributes: {
			displayType?: string,
			traitType: string,
			value: string
		}
	}[],
	createdAt: Date,
	collectModule: {
		__typename: string,
		type: string
	},
	referenceModule?: any,
	appId?: string,
	hidden: boolean,
	reaction?: any,
	mirrors: any[],
	hasCollectedByMe: boolean
}

export interface ExploreProfileRequest {
	sortCriteria: ProfileSortCriteria
	limit: number
}

export interface ExploreProfileResult {
	id: string
	name: string
	bio: string
	isDefault: boolean
	attributes: {
		displayType?: any,
		traitType: string,
		key: string,
		value: any
	}[],
	metadata?: {
		name: string,
		description: string,
		content: string,
		media: any[],
		attributes: {
			displayType?: string,
			traitType: string,
			value: string
		}
	}[]
	followNftAddress?: string
	handle: string
	picture: string
	coverPicture: string
	ownedBy: string
	dispatcher?: any
	stats: {
		totalFollowers: number,
		totalFollowing: number,
		totalPosts: number,
		totalComments: number,
		totalMirrors: number,
		totalPublications: number,
		totalCollects: number
	}
	followModule?: any
}
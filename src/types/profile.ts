export interface Profile {
	id: string,
	name: string,
	bio: string,
	attributes: {
		displayType?: any,
		traitType: string,
		key: string,
		value: any
	}[],
	followNftAddress: string,
	metadata: string,
	isDefault: boolean,
	picture: string,
	handle: string,
	coverPicture?: string,
	ownedBy: string,
	dispatcher?: any,
	stats: {
		totalFollowers: number,
		totalFollowing: number,
		totalPosts: number,
		totalComments: number,
		totalMirrors: number,
		totalPublications: number,
		totalCollects: number
	},
	followModule?: any
}

export interface Followers {
	wallet: {
		address: string,
		defaultProfile?: Profile
	}
}
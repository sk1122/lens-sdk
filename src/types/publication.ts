export interface MetadataMedia {
	item: any;
	/**
	 * This is the mime type of media
	 */
	type: MimeType;
}

export enum MetadataVersions {
	one = '1.0.0',
}

export enum MetadataDisplayType {
	number = 'number',
	string = 'string',
	date = 'date',
}

export interface MetadataAttribute {
	displayType?: MetadataDisplayType;
	traitType?: string;
	value: string;
}

export interface Metadata {
	/**
	 * The metadata version.
	 */
	version: MetadataVersions;

	/**
	* The metadata lens_id can be anything but if your uploading to ipfs
	* you will want it to be random.. using uuid could be an option!
	*/
	metadata_id: string;

	/**
	 * A human-readable description of the item.
	 */
	description?: any;

	/**
	 * The content of a publication. If this is blank `media` must be defined or its out of spec.
	 */
	content?: any;

	/**
	 * This is the URL that will appear below the asset's image on OpenSea and others etc
	 * and will allow users to leave OpenSea and view the item on the site.
	 */
	external_url?: any;

	/**
	 * Name of the item.
	 */
	name: string;

	/**
	 * These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the 
	item.
	 */
	attributes: MetadataAttribute[];

	/**
	 * legacy to support OpenSea will store any NFT image here.
	 */
	image?: any;

	/**
	 * This is the mime type of image. This is used if you uploading more advanced cover images
	 * as sometimes IPFS does not emit the content header so this solves the pr
	 */
	imageMimeType?: MimeType;

	/**
	 * This is lens supported attached media items to the publication
	 */
	media?: MetadataMedia[];

	/**
	 * Legacy for OpenSea and other providers
	 * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
	 * and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
	 * Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
	 * WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
  
	 */
	animation_url?: any;

	/**
	 * This is the appId the content belongs to
	 */
	appId?: any;
}

export interface FeeCollectModuleParams {
	amount: {
		currency: string,
		value: string
	},
	recipient: string,
	referralFee: number,
	followerOnly?: boolean
}

export interface LimitedFeeCollectModuleParams {
	collectLimit: string,
	amount: {
		currency: string,
		value: string
	},
	recipient: string,
	referralFee: number,
	followerOnly?: boolean
}

export interface LimitedTimedFeeCollectModuleParams {
	collectLimit: string,
	amount: {
		currency: string,
		value: string
	},
	recipient: string,
	referralFee: number,
	followerOnly?: boolean
}

export interface TimedFeeCollectModuleParams {
	amount: {
		currency: string,
		value: string
	},
	recipient: string,
	referralFee: number,
	followerOnly?: boolean
}

export interface CollectModule {
	freeCollectModule?: Boolean
	revertCollectModule?: Boolean
	feeCollectModule?: FeeCollectModuleParams
	limitedFeeCollectModule?: LimitedFeeCollectModuleParams
	limitedTimedFeeCollectModule?: LimitedTimedFeeCollectModuleParams
	timedFeeCollectModule?: TimedFeeCollectModuleParams
}

export interface CreatePublicationParams {
	profileId: string,
	contentURI: string,
	collectModule: CollectModule,
	referenceModule: { followerOnlyReferenceModule: boolean }
}

export enum PublicationType {
	POST = "POST",
	COMMENT = "COMMENT",
	MIRROR = "MIRROR"
}

export interface GetPublicationsParams {
	profileId?: string
	publicationTypes?: PublicationType[]
	sources?: string[]
	commentsOf?: string
	collectedBy?: string
	publicationIds?: string[]
}
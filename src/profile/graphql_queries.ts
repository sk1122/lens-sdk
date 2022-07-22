export const GET_PROFILES = `
query Profiles($address: EthereumAddress!) {
	profiles(request: { ownedBy: [$address], limit: 10 }) {
	  items {
		id
		name
		bio
		attributes {
		  displayType
		  traitType
		  key
		  value
		}
		metadata
		isDefault
		picture {
		  ... on NftImage {
			contractAddress
			tokenId
			uri
			verified
		  }
		  ... on MediaSet {
			original {
			  url
			  mimeType
			}
		  }
		  __typename
		}
		handle
		coverPicture {
		  ... on NftImage {
			contractAddress
			tokenId
			uri
			verified
		  }
		  ... on MediaSet {
			original {
			  url
			  mimeType
			}
		  }
		  __typename
		}
		ownedBy
		dispatcher {
		  address
		  canUseRelay
		}
		stats {
		  totalFollowers
		  totalFollowing
		  totalPosts
		  totalComments
		  totalMirrors
		  totalPublications
		  totalCollects
		}
		followModule {
		  ... on FeeFollowModuleSettings {
			type
			amount {
			  asset {
				symbol
				name
				decimals
				address
			  }
			  value
			}
			recipient
		  }
		  ... on ProfileFollowModuleSettings {
		   type
		  }
		  ... on RevertFollowModuleSettings {
		   type
		  }
		}
	  }
	  pageInfo {
		prev
		next
		totalCount
	  }
	}
  }
`

export const GET_PROFILE_BY_LENS_ID = `
query Profile($id: Handle!) {
  profile(request: { handle: $id }) {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
    followNftAddress
    metadata
    isDefault
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    handle
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    ownedBy
    dispatcher {
      address
      canUseRelay
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            symbol
            name
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
        type
      }
      ... on RevertFollowModuleSettings {
        type
      }
    }
  }
}
`
export const GET_FOLLOWERS = `
  query($request: FollowersRequest!) {
    followers(request: $request) { 
             items {
        wallet {
          address
          defaultProfile {
            id
            name
            bio
            handle
            picture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  mimeType
                }
              }
            }
            coverPicture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  mimeType
                }
              }
            }
            ownedBy
            dispatcher {
              address
              canUseRelay
            }
            stats {
              totalFollowers
              totalFollowing
              totalPosts
              totalComments
              totalMirrors
              totalPublications
              totalCollects
            }
            followModule {
              ... on FeeFollowModuleSettings {
                type
                contractAddress
                amount {
                  asset {
                    name
                    symbol
                    decimals
                    address
                  }
                  value
                }
                recipient
              }
              ... on ProfileFollowModuleSettings {
               type
              }
              ... on RevertFollowModuleSettings {
               type
              }
            }
          }
          
        }
        totalAmountOfTimesFollowed
      }
      pageInfo {
        prev
        next
        totalCount
      }
        }
  }
`

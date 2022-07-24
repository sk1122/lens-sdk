import axios from "axios";
import { ethers } from "ethers";
import { API_URL, lensHub } from "../config";
import { CreatePublicationParams } from "../types/publication";
import { CREATE_POST_TYPED_DATA } from "./graphql_queries";
import type { TypedDataSigner } from "@ethersproject/abstract-signer";
// @ts-ignore
import omitDeep from 'omit-deep'
import { wait_for_tx } from "../transactions";

export const create_publication = async (create_post_request: CreatePublicationParams, access_token: string, signer: ethers.Signer & TypedDataSigner) => {
	try {
		const data = await axios.post(API_URL, {
			query: CREATE_POST_TYPED_DATA,
			variables: {
				request: create_post_request
			}
		}, {
			headers: {
				'x-access-token': `Bearer ${access_token}`
			}
		})

		if (!data.data.data) throw data.data.errors

		const typedData = data.data.data.createPostTypedData.typedData

		const sig = await signer._signTypedData(
			omitDeep(typedData.domain, '__typename'),
			omitDeep(typedData.types, '__typename'),
			omitDeep(typedData.value, '__typename')
		)
		const { v, r, s } = ethers.utils.splitSignature(sig);

		const lens_hub = lensHub(signer)

		const tx = await lens_hub.postWithSig({
			profileId: typedData.value.profileId,
			contentURI: typedData.value.contentURI,
			collectModule: typedData.value.collectModule,
			collectModuleInitData: typedData.value.collectModuleInitData,
			referenceModule: typedData.value.referenceModule,
			referenceModuleInitData: typedData.value.referenceModuleInitData,
			sig: {
				v,
				r,
				s,
				deadline: typedData.value.deadline,
			},
		});

		const result = await wait_for_tx(tx.hash)

		return result
	} catch (e: any) {
		console.log(e)
	}
}
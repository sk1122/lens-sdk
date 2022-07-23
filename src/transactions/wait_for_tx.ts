import axios from "axios"
import { API_URL } from "../config"
import { HAS_TX_BEEN_INDEXED } from "./graphql_queries"

export const wait_for_tx = async (tx_hash: string) => {
	while (true) {
		const result = await check_if_tx_indexed(tx_hash);
		const response = result;
		if (response.__typename === 'TransactionIndexedResult') {
			if (response.metadataStatus) {
				if (response.metadataStatus.status === 'SUCCESS') {
					return response;
				}

				if (response.metadataStatus.status === 'METADATA_VALIDATION_FAILED') {
					throw new Error(response.metadataStatus.reason);
				}
			} else {
				if (response.indexed) {
					return response;
				}
			}

			// sleep for a second before trying again
			await new Promise((resolve) => setTimeout(resolve, 500));
		}

		// it got reverted and failed!
		throw new Error(response.reason);
	}

}

export const check_if_tx_indexed = async (tx_hash: string) => {
	const data = await axios.post(API_URL, {
		query: HAS_TX_BEEN_INDEXED,
		variables: {
			request: {
				txHash: tx_hash
			}
		}
	})

	return data.data.data.hasTxHashBeenIndexed
}
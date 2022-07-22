import { ethers } from 'ethers'

export const signText = async (signer: ethers.Signer, message: string): Promise<string> => {
	if (!signer) throw "Signer not Present"
	const sign = await signer.signMessage(message)

	return sign
}

export * from "./authenticate"
export * from "./get_challenge"
export * from "./login"
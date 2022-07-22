import { ethers } from 'ethers'
import { signText } from '.'
import { AuthenticationTokens } from '../types/authentication'
import { authenticate } from './authenticate'
import { get_challenge } from './get_challenge'

export const login = async (signer: ethers.Signer): Promise<AuthenticationTokens | any> => {
	const address = await signer.getAddress()

	const challenge = await get_challenge(address)

	const signature = await signText(signer, challenge.challenge.text)

	const accessTokens: AuthenticationTokens = await authenticate(address, signature)

	return accessTokens
}
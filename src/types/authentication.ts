export interface ChallengeRequest {
	challenge: { text: string }
}

export interface AuthenticationTokens {
	access_token: string
	refresh_token: string
}
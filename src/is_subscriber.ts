interface User {
	readonly is_subscriber: boolean
	readonly email: string
}

export interface UserResponse {
	readonly success: boolean
	readonly user: User | []
}

/**
 * How do you check if a user is a subscriber?
 */
export function isSubscriber(response: UserResponse): boolean {
	// Replace this code with your answer.
	response
	return false
}

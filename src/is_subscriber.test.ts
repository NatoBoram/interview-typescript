import { expect, test } from "vitest"
import type { UserResponse } from "./is_subscriber.js"
import { isSubscriber } from "./is_subscriber.js"

test("with a subscriber", () => {
	const subscriber: UserResponse = {
		success: true,
		user: {
			is_subscriber: true,
			email: "example@example.org",
		},
	}

	expect(isSubscriber(subscriber)).toBe(true)
})

test("with a non-subscriber", () => {
	const nonSubscriber: UserResponse = {
		success: true,
		user: {
			is_subscriber: false,
			email: "example@example.org",
		},
	}

	expect(isSubscriber(nonSubscriber)).toBe(false)
})

test("with an invalid user", () => {
	const invalidUser: UserResponse = {
		success: true,
		user: [],
	}

	expect(isSubscriber(invalidUser)).toBe(false)
})

import { describe, test } from "vitest"
import type { UserResponse } from "./is_subscriber.js"
import { isSubscriber } from "./is_subscriber.js"

describe.concurrent("isSubscriber", () => {
	test("with a subscriber", ({ expect }) => {
		const subscriber: UserResponse = {
			success: true,
			user: {
				is_subscriber: true,
				email: "example@example.org",
			},
		}

		expect(isSubscriber(subscriber)).toBe(true)
	})

	test("with a non-subscriber", ({ expect }) => {
		const nonSubscriber: UserResponse = {
			success: true,
			user: {
				is_subscriber: false,
				email: "example@example.org",
			},
		}

		expect(isSubscriber(nonSubscriber)).toBe(false)
	})

	test("with an invalid user", ({ expect }) => {
		const invalidUser: UserResponse = {
			success: true,
			user: [],
		}

		expect(isSubscriber(invalidUser)).toBe(false)
	})
})

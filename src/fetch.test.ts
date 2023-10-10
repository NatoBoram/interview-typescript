import { describe, test } from "vitest"
import { getPeople, hairColor } from "./fetch.js"

describe.sequential("fetch", () => {
	test("fetches Luke Skywalker", async ({ expect }) => {
		const lukeHairColor = await getPeople(1)
		expect(lukeHairColor).toBe("blond")
		expect(hairColor).toBe("blond")
	})

	test("fetches Leia Organa", async ({ expect }) => {
		const leiaHairColor = await getPeople(5)
		expect(leiaHairColor).toBe("brown")
		expect(hairColor).toBe("brown")
	})
})

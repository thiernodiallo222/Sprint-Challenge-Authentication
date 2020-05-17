const supertest = require("supertest")
// our server won't actually start when it's required in,
// due to the if statement in index.js
const server = require("../index")

test("POST /", async () => {
	// we start by arranging the test data we need
	const endpoint = "/login"
	const status = 200

	// then we ACT on whatever we're testing
	const res = await supertest(server).get(endpoint)
	
	// then we ASSERT the response data
	expect(res.statusCode).toBe(status)
	expect(res.type).toBe("application/json") // res.type is shorthand for res.headers["content-type"]
	expect(res.body.username).toBe("thiernodiallo64")
})

test("POST /", async () => {
	// we start by arranging the test data we need
	const endpoint = "/login"
	const status = 200

	// then we ACT on whatever we're testing
	const res = await supertest(server).get(endpoint)
	
	// then we ASSERT the response data
	expect(res.statusCode).toBe(status)
	expect(res.type).toBe("application/json") // res.type is shorthand for res.headers["content-type"]
    expect(res.body.username).toBe("thiernodiallo864");
})
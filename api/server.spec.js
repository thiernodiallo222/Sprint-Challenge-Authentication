const server = require("./server");
const supertest = require("supertest");
const db = require("../database/dbConfig");

beforeEach(async () => {
	await db.seed.run()
})

afterAll(async () => {
	await db.destroy()
})

describe("register and login integration test", () => {
	it("POST /register", async () => {
		const data = {
			username: 'thiernodiallo864',
			password:'passPlease',
		}
		const res = await supertest(server).post("/register").send(data)
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
		expect(res.body.username).toBe("thiernodiallo864");
	})


	it("POST /login", async () => {
		const data = {
			username: "thiernodiallo864",
			password:'passPlease',
		}
		const res = await supertest(server).post("/login").send(data)
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
		expect(res.body.username).toBe("thiernodiallo864");
	})
})
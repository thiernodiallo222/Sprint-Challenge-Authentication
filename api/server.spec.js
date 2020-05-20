const supertest = require("supertest");
const server = require("./server");

const db = require("../database/dbConfig");

beforeEach(async () => {
	await db.seed.run()
})

afterAll(async () => {
	await db.destroy()
})

describe("register and login integration test", () => {
	describe("register route", async() => {
		it("POST /register", () => {
			const payload = {
				username: 'mariam90',
				password: 'passPlease',
			}
	const res = await supertest(server).post("/register").send(payload)
	    expect(res.status).toEqual(201)
		expect(res.type).toEqual("application/json")
		expect(res.body.username).toEqual("mariam90");
				
		})
	})
	describe("login route", () => {
		it("POST /login", async () => {
		const payload = {
			username: "mariam90",
			password:'passPlease',
		}
		const res = await supertest(server).post("/login").send(payload)
		expect(res.statusCode).toEqual(200)
		expect(res.type).toEqual("application/json")
		expect(res.body.username).toEqual("mariam90");
	})
	})
})
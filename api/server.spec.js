const supertest = require("supertest");
const server = require("./server");
// const server = require('../auth/auth-router');

const db = require("../database/dbConfig");

beforeEach(async () => {
	await db.seed.run()
})

afterAll(async () => {
	await db.destroy()
})

describe("register and login integration test", () => {
	describe("register route", async() => {
		it("POST /register", async() => {
			// const payload = {
			// 	username: 'mariam90',
			// 	password: 'passPlease',
			// }
	const res = await supertest(server).post("/register").send({username:'alex98', password:'passPlease'})
	    expect(res.status).toBe(200)
		expect(res.type).toEqual("application/json")
		expect(res.body.username).toEqual("mariam90");
				
		})
	})
	describe("login route", () => {
		it("POST /login", async () => {
		// const payload = {
		// 	username: "mariam90",
		// 	password:'passPlease',
		// }
		const res = await supertest(server).post("/login").send({username:'mariam90', password:'passPlease'})
		expect(res.status).toBe(200)
		expect(res.type).toEqual("application/json")
		expect(res.body.username).toEqual("mariam90");
	})
	})
})
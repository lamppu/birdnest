const request = require('supertest');
const expect = require('chai').expect;
const app = require('../../server.js');

describe("Testing API", () => {
    it("should respond with status code 200", async () => {
        await request(app).get("/").expect(200);
    })
})
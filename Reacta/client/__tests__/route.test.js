"use strict";

const { debug } = require("console");
const { it } = require("date-fns/locale");
const request = require("request"),
    assert = require("assert");
let base_url = "http://localhost:3001";

Run|debug
describe("Test the server routes", () => {
    Run|debug
    describe("Test the url of the route get", () => {
        Run|debug
        it("Should return code 200", (done)=> {
            request.get(base_url, (err,response,body)=>{
                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
    Run|debug
    describe("test the users set", () => {
        Run|debug
        it("should return 404 not found erreur", (done)=>{
            request.get(base_url + "users", (err,response,body) => {
                assert.equal(404, response.statusCode);
                done();
            });
        });
    });
})
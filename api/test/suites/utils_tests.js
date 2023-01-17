const request = require('supertest');
const expect = require('chai').expect;
const fetchData = require('../../utils/fetch_data');
const tenMinuteCheck = require('../../utils/ten_minute_check');
const getTestMap = require('../test_data/get_test_map');


describe("Testing API utils", () => {
    it("should delete entry with key 1 from map", () => {
        const testMap = getTestMap();

        tenMinuteCheck(testMap);

        expect(testMap.has("1")).to.be.false;
    })
})
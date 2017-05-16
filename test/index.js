'use strict';

const assert = require('assert');
const db = require('..')();

describe('database', () => {
    it('return a string that indicates the MySQL server version', done => {
        db.execute('SELECT VERSION()').then(ret => {
            assert.notEqual(ret, null);
            done();
        });
    });
});

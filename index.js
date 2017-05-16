'use strict';

class MySql {

	constructor(options) {
		const mysql = require('mysql');

		options = options || {};
		options.host = options.host || 'localhost';

		this.connection = mysql.createConnection(options);
		this.connection.connect();
	}

	execute(sql, params) {
		return new Promise((resolve, reject) => {
			// console.info(sql, params || '');

			this.connection.query(sql, params, (err, rows, fields) => {
				if (err) {
					reject(err);
					console.error(err);
				}
				else {
					resolve(rows, fields);
				}
			});
		});
	}
}

module.exports = (options) => {
    return new MySql(options);
};

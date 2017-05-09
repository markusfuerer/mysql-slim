'use strict';

class MySql {

	constructor(config) {
		const mysql = require('mysql');

		config.host = config.host || 'localhost';

		this.connection = mysql.createConnection(config);
		this.connection.connect();
	}

	execute(sql, params) {
		return new Promise((resolve, reject) => {
			console.info(sql, params || '');

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

module.exports = MySql;
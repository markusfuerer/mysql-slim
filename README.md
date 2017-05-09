#MySQL driver



    const config = {
      user: 'user',
      password: 'password',
      database: 'foobar'
    };

    const MySql = require('mysql-slim');
    const db = new MySql(config);

    db.execute('SELECT * FROM users WHERE id = ?', [1]).then((rows) => {
      console.info(rows);
    });

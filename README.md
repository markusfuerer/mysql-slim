# MySQL driver


```js
    const options = {
      user: 'dbuser',
      password: 'dbpassword',
      database: 'foobar'
    };

    const db = require('mysql-slim')(options);

    db.execute('SELECT * FROM users WHERE id = ?', [1]).then((rows) => {
      console.info(rows);
    });
```

## Installation

```bash
$ npm i mysql-slim
```

## Options

**const db = require('mysql-slim')([options]);**

| Property | Description                                                | Default     |
|----------|------------------------------------------------------------|-------------|
| host     | The hostname of the database you are connecting to.        | "localhost" |   
| port     | The port number to connect to.                             | 3306        |   
| user     | The MySQL user to authenticate as.                         |             | 
| password | The password of that MySQL user.                           |             | 
| database | Name of the database to use for this connection.           |             | 

## Tests
To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm i
$ npm test
```
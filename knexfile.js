// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    debug: true,
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './data/migrations'
    },
    ssl:true,
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      }
    }
  },

  production: {
    client: 'postgresql',
    debug: true,
    connection: process.env.DATABASE_URL, 
    migrations: {
      directory: "./data/migrations"
    },
    ssl: {
      rejectUnauthorized: false
    }
  },

};

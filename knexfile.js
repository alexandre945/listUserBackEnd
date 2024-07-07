module.exports = {
    development: {
      client: 'pg',
      connection: {
        connectionString: 'postgresql://db_user_list_owner:39DlhjpUiaEH@ep-purple-pine-a5h15efe.us-east-2.aws.neon.tech/db_user_list?sslmode=require',
        ssl: {
          rejectUnauthorized: false
        }
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations'
      }
    }
  };
  
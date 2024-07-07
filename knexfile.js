module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'ep-purple-pine-a5h15efe.us-east-2.aws.neon.tech',
        user: 'db_user_list_owner',
        password: '39DlhjpUiaEH',
        database: 'db_user_list',
        ssl: { rejectUnauthorized: false }  // Adicione isso para aceitar conexões SSL
      },
      migrations: {
        directory: './migrations'
      }
    }
  };
  
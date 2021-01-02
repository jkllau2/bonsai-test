// #1 Import Express and Apollo Server
import { createServer } from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express'; // #3 Import GraphQL type definitions
// import typeDefs from '../modules/merchant/graphqlSchema';
// #4 Import GraphQL resolvers
// import resolvers from '../modules/merchant/resolvers';
// #5 Initialize an Apollo server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// })

import Sequelize from 'sequelize'; // import Logger from '../utils/logger.util'
// const logger = new Logger()

let options; // const logging = !(process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'production')

if (process.env.NODE_ENV === 'test') {
  options = {
    dialect: 'sqlite',
    storage: 'test-db.sqlite3',
    define: {
      freezeTableName: true
    },
    logging: console.log
  };
} else {
  options = {
    host: process.env.RAZZLE_MYSQL_DB_HOST,
    dialect: 'mariadb',
    pool: {
      max: 40,
      min: 0,
      acquire: 60000,
      idle: 10000
    },
    define: {
      freezeTableName: true,
      timestamps: false
    },
    logging: false,
    operatorsAliases: Sequelize.Op
  };
}

const sequelize = new Sequelize(process.env.MARIA_DB_NAME, process.env.MARIA_DB_USERNAME, process.env.MARIA_DB_PASSWORD, options); // const setupTestSequelize = async () => {
//   if (process.env.NODE_ENV === 'test') {
//     try {
//       await sequelize.drop()
//       await sequelize.sync({ force: true })
//       logger.log('✅ Initialized database')
//     } catch (err) {
//       logger.error('An error occurred while creating the table:', err)
//       throw err
//     }
//   }
// }

const setupSequelize = () => {
  if (process.env.NODE_ENV !== 'test') {
    logger.log(`⚡ connecting to ${process.env.MARIA_DB_NAME}`);
  }

  return new Promise((resolve, reject) => {
    sequelize.authenticate().then(() => {
      logger.log('✅  Database connection established!');
      resolve();
    }).catch(err => {
      logger.error('❌  Failed to connect to database', err);
      reject(err);
    });
  });
};

const app = express(); // #7 Use the Express application as middleware in Apollo server
// server.applyMiddleware({ app });

const httpServer = createServer(app); // #8 Set the port that the Express application will listen to

httpServer.listen({
  port: 3000
}, () => {
  setupSequelize();
  console.log(`Server running`);
});
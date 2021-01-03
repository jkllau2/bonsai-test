import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import Sequelize from 'sequelize'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import { createServer } from 'http'
import { setupRoutes } from './routes/index.js'
import configureStore from '../client/src/redux/store/configureStore.js'

let options

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
    host: process.env.MARIA_DB_HOST,
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

const sequelize = new Sequelize(process.env.MARIA_DB_NAME, process.env.MARIA_DB_USERNAME, process.env.MARIA_DB_PASSWORD, options);

const setupSequelize = () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`⚡ Connecting to ${process.env.MARIA_DB_NAME}`);
  }

  return new Promise((resolve, reject) => {
    sequelize.authenticate().then(() => {
      console.log('✅ Database connection established!');
      resolve();
    }).catch(err => {
      console.error('❌ Failed to connect to database', err);
      reject(err);
    });
  });
};

const server = express()
server.use(helmet())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cookieParser())
setupRoutes(server)

const httpServer = createServer(server)
const serverPort = 3000

httpServer.listen({ port: serverPort }, () => {
  setupSequelize()
  console.log(`☀️  Server running at port ${serverPort}`)
})

// server
//   .disable('x-powered-by')
//   .get('/*', async (req, res) => {
//     const store = configureStore({})
//     const markup = renderToString(
//       <Provider store={store}>
//         <StaticRouter context={context} location={req.url}>
//           <App />
//         </StaticRouter>
//       </Provider>
//     )
//   })

// if (context.url) {
//   res.redirect(context.url)
// } else {
//   res.status(200).send(`
//     <!doctype html>
//     <html>
//     <head>
//       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//       <meta charset="utf-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </head>
//       <body>
//       <div id="root">${markup}</div>
//       <script>
//       // WARNING: See the following for security issues around embedding JSON in HTML:
//       // https://redux.js.org/recipes/server-rendering/#security-considerations
//       window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
//     </script>
//     </body>
//     </html>
//   `)
// }

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

export default sequelize;
export { setupSequelize };
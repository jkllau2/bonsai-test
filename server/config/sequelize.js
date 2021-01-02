import Sequelize from 'sequelize'

let options

if (process.env.NODE_ENV === 'test') {
  options = {
    dialect: 'sqlite',
    storage: 'test-db.sqlite3',
    define: {
      freezeTableName: true,
    },
    logging: console.log,
  }
} else {
  options = {
    host: process.env.MARIA_DB_HOST,
    dialect: 'mariadb',
    pool: {
      max: 40,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
    define: {
      freezeTableName: true,
      timestamps: false,
    },
    logging: false,
    operatorsAliases: Sequelize.Op,
  }
}

const sequelize = new Sequelize(
  process.env.MARIA_DB_NAME,
  process.env.MARIA_DB_USERNAME,
  process.env.MARIA_DB_PASSWORD,
  options
)

const setupSequelize = () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`⚡ connecting to ${process.env.MARIA_DB_NAME}`)
  }
  return new Promise((resolve, reject) => {
    sequelize.authenticate()
      .then(() => {
        console.log('✅  Database connection established!')
        resolve()
      })
      .catch(err => {
        console.error('❌  Failed to connect to database', err)
        reject(err)
      })
  })
}

export default sequelize
export { setupSequelize }

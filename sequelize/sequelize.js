var Sequelize =  require('sequelize')
require('dotenv').config();
console.log('DB:', process.env.DB);
console.log('HOST:', process.env.HOST);
console.log('USER:', process.env.USER);
console.log('PASSWORD:', process.env.PASSWORD)


const sequelize  =  new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD,
    {
        host:process.env.HOST,
        dialect:'postgres'
    }
)

const connection  = () =>{
    sequelize.authenticate().then(
        console.log("Autenticated successfully")
    ).catch((e)=>{
        console.log("Error", e)
    })
}

module.exports = connection
var Sequelize =  require('sequelize')

var sequelize  =  new Sequelize('ring', 'postgres', 'test', {
    host:'localhost',
    dialect:'postgres'
})

const connection  = () =>{
    sequelize.authenticate().then(
        console.log("Autenticated successfully")
    ).catch((e)=>{
        console.log("Error", e)
    })
}

module.exports = connection
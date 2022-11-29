const database = require(`./db.json`)
let newId = 4

module.exports={
    getAllHouses:(req,res) => {
        res.status(200).send(database)
    },

    deleteHouse:(req,res) => {
        let{id} = req.params
        let index = database.findIndex(houseObj => houseObj.id === +id)
        database.splice(index,1)
        res.status(200).send(database)
    },

    createHouse:(req,res) =>{
        let{address,price,imageURL} = req.body
        let newHouse = {
            id: newId,
            address,
            price,
            imageURL
        }
        database.push(newHouse)
        res.status(200).send(database)
        newId++
    },

    updateHouse:(req,res)=>{
        let{id} = req.params
        let{type} = req.body
        console.log(type)
        console.log(id)
        let index = database.findIndex(houseObj => houseObj.id === +id)
        if(type === `minus`&& database[index].price){
            database[index].price-=10000
        }else if(type === 'plus'&& database[index].price){
            database[index].price+=10000
        }

        res.status(200).send(database)
    }
}
const { Router } = require('express');
const users = require('../models/Users');
const { getUsers } = require('../services/Services.users');
const router = Router();


router.get('/', async(req,res) => {
    const { name } = req.query;
    try {
        if(name){
            const user = await users.find({ name: name }); 
            user.length ? res.json(user): res.json({message: 'No se encontro una persona con ese nombre', error: 404});
        }else{
            const dataApi = await getUsers();
            res.json(dataApi)
        }
    } catch (error) {
        console.log(error)
    }
});

router.get('/byId/:id', async(req,res) => {
    const { id } = req.params;
    try {
        if(id){
            const user = await users.findById({ _id: id })
            user.length ? res.json(user) : res.json({ message : 'No se encontro un usuario con dicho ID', error: 404 });
        }
    } catch (error) {
        console.error(error.message);
    }
})

router.post('/', async(req,res) => {
    try{
        const {name, lastname, email, books } = req.body;
        const createUser = users({name, lastname, email, books});
        const newUser = await createUser.save();
        res.json(newUser);
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router;

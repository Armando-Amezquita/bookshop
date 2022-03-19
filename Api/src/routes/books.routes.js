const { Router } = require('express');
const books = require('../models/Books');
// const { getGenres } = require('../services/genres');
const router = Router();
const booksFake = require('../fakeData/db.json');


// router.get('/fake', async(req,res) => {
//     try {
//         const booksFake = booksFake.find()
//         console.log(booksFake)
//         if(booksFake){
//             res.json(booksFake);
//         }
//     } catch (error) {
        
//     }
// })

router.post('/', async(req,res) => {
    try{
        const {name, released, image } = req.body;
        const createBook = books({ name, released, image });
        const newBook = await createBook.save();
        res.json(newBook);
    }
    catch(error){
        console.log(error)
    }
})
router.get('/', async(req,res) => {
    const data = await books.find();
    res.json(data);
})

module.exports = router;
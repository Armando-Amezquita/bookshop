const { Router } = require('express');
const routerUsers = require('./users.routes');
const routerBooks = require('./books.routes');
const router = Router();

router.use('/users', routerUsers);
router.use('/books', routerBooks);

module.exports = router;

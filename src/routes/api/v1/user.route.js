const express =  require('express');
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     description: Use to request all users
 *     responses:
 *       '200':
 *         description: A successful response
*/
router.get('/users', (req, res) => {
    // res.send("Welcome to dragon api");
    res.status(200).json({ data: "List users" })
})


module.exports = router;
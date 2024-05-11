let express = require("express");
let Router = express.Router();

let list_controller = require('../controllers/list')


Router.post('/create', list_controller.create)
Router.get('/alllists', list_controller.read)
Router.delete('/delete', list_controller.del)
Router.put('/update', list_controller.update)




module.exports = Router
const express = require('express');

const router = express.Router();
const TicketController = require('../controllers/TicketController');

router.get('/getTicket', TicketController.getTicket);


module.exports = router;
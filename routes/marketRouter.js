const express = require('express');
const router = express.Router();
const marketController = require('../controllers/markertController');

router.post('/createTicket', marketController.CreateTicket);
router.get('/getTicket', marketController.getMarketTickets);




module.exports = router;

const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/serviceController');


router.get('/getTickets', serviceController.getServiceTickets);

router.patch('/updateTicket', serviceController.updateTicket);

router.get('/getAvailableTechnician', serviceController.getAvailableTechnician);



module.exports = router;

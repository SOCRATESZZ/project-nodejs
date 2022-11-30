const Ticket = require('../models/Ticket');
const User = require('../models/User');



const getServiceTickets = (req,res,next) => {

    Ticket.find().sort({
        'createdAt': -1, 
    }
    )
    .then(tickets => {
        if(tickets) {
            res.status(200).json({
                tickets: tickets,
            })
        }
    })
    .catch(err => {
        res.json({
            err
        })
    })
   
}


const updateTicket = (req,res,next) => {
       var ticketID = req.query.id;

    Ticket.findOneAndUpdate({_id: ticketID})
    .then(ticket => {
        if(ticket) {
            ticket.update({
                Customer:{
                    name: req.body.name,
                    latlong: req.body.latlong,
                    productType: req.body.productType,
                    DateToFix: req.body.DateToFix,
                    TimeToFix: req.body.TimeToFix
                },

                Technician :{
                    tID: req.body.tID,
                    name: req.body.tname
                }

            })
        }
    })
    .catch(err => {
        res.json({
            err
        })
    })

}

const getAvailableTechnician = (req,res,next) => {
    User.find({
        type: 'tech'
    })
    .then(users => {
        if(users) {
            res.status(200).json({
                technicians: users,
            })   
        }
    })
    .catch(err => {
        res.json({
            err
        })
    })
}


module.exports = {
    getServiceTickets,
    updateTicket,
    getAvailableTechnician
}
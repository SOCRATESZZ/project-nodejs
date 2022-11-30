
const User = require('../models/User');
const Ticket = require('../models/Ticket');



const CreateTicket = (req,res, next) => {

    var createrID = req.query.id;

    console.log(createrID);

    User.findOne({_id: createrID})
    .then(user => {
        if(user) {
            console.log(user);
            let ticket = new Ticket(
                {
                    status: '0',
                    Creater: {
                        name: user.name,
                        phone: user.phone,
                        createrID: user._id
                    },

                    Customer: {
                        name: req.body.customerName,
                        address: req.body.address,
                        latlong: 'add latlong',
                        productType: 'add product type',
                        phone: req.body.customerPhone,
                        DateToFix: Date.now(),
                        TimeToFix: 'NA'
                    },
                    
                    Technician: {
                        tID: '',
                        name: '',
                        photos: [],
                        reachTime: '',
                        completionTime: '',
                        distanceTravelled: ''
                    }

                }
            )
            
            console.log(ticket)
            ticket.save()
            .then(ticket => {
                res.status(200).json({
                    message: 'ticket created',
                })
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: 'An error occured',
                    err
                })
            })
        }
        else {
            res.status(404).json({
                message: 'user not found'
            })
        }
    })
    .catch(err => {
        res.status(100).json({
            err: 'in catch block'
        })
    })


}



const getMarketTickets = (req,res,next) => {
    var createrID = req.query.id;

    Ticket.find(
        {
            "Creater.createrID" : createrID //check for 'c' and 'C' new ticket has 'C' 
        },
        ['status', 'Customer.name', 'Customer.address'],
    ).sort({
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

module.exports = {
    CreateTicket,
    getMarketTickets,
}
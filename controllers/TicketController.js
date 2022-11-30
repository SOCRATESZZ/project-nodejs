const express = require('express');

const Ticket = require('../models/Ticket');



const getTicket = (req,res,next) => {
    var createrID = req.query.id;

    Ticket.find(
        {
            "Creater.createrID" : createrID //check for 'c' and 'C' new ticket has 'C' 
        },
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
    getTicket
}
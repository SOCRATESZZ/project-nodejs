const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema ({

    status: {
        type: String,
    },

    Creater: {
        name: {
            type: String
        },
        phone: {
            type: Number,
        },
        createrID: {
            type: String
        },
    },

    Customer: { //--------------------------------------------------------------------
        name: {
            type: String
        },

        address: {
            type: String
        },

        latlong: {
            type: String
        },

        productType: {
            type: String
        },

        phone: {
            type: Number,
        },

        DateToFix: {
            type: Date,
            min: Date.now()
        },

        TimeToFix: {
            type: String
        }


    },//customer------------------------------------------------------------------------

    Technician: {//-------------------------------------------------------------
        tID: {
            type: String
        },

        name: {
            type: String
        },

        photos: [{
            type: String
        }],

        reachTime: {
            type: String
        },

        completionTime: {
            type: String
        },

        distanceTravelled: {
            type: String
        }

    }//technician-----------------------------------------------------------------------



}, {timestamps: true});


const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
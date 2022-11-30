const express = require('express');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const register = (req,res, next) => {

    bcrypt.genSalt(10, (err, salt) => {

        if(err){
            res.json({
                error: err
            })
        }

        bcrypt.hash(req.body.password, salt, function(err, hashedPass) {
            if(err) {
                res.json({
                    error: err
                })
            }
    
            let user = new User ( {
              name: req.body.name,
              email: req.body.email,
              phone: req.body.phone,
              password: hashedPass,
              type: req.body.type
            });
    
            console.log(user);
    
            user.save()
            .then(user=>{
                res.json({
                    message: 'Added successfully',
                }).status(200)
            })
            .catch(err => {
                console.log(err);
                res.json({
                    message: 'An error occured',
                    err
                }).status(400)
            });
    
        } 
        
        )
    })

    
};



const login = (req,res,next) => {
    var phone = req.body.username;
    var password = req.body.password;

    User.findOne({phone})
    .then(user => {
        console.log(password, user.password);
        if(user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if(err) {
                    res.json({
                        err
                    })   
                }

                console.log(result);

                if(result) {
                    let token = jwt.sign(
                        {
                            name: user.name,
                            type: user.type,
                            phone: user.phone,
                        }, 
                        'secureAF', 
                        {expiresIn: '1h'})
                    
                    res.status(200).json({
                        userID: user._id,
                        message: 'login successful',
                        token
                    })

                }

                else {
                    res.status(401).json({
                        message: 'password incorrect'
                    })
                }

            })
        }

        else {
            res.status(404).json({
                message: 'user not found'
            })
        }
    }
    
    )
    .catch(err => {
        res.json({
            err
        }).status(500)
    })


}


module.exports = {
    register,
    login
}

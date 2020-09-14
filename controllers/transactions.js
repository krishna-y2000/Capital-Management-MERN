const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
const transactionData = require('../models/transactionModel');
// getTransaction
router.get('/',async (req,res,next) =>{
   try{
    const transactions = await transactionData.find();       
        return  res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
          });
   }
   catch(err){
         return res.status(500).json({
        success: false,
        error: 'Server Error'
        })
    }
});
 // addTransaction
router.post('/',async (req,res,next) =>{
    
        try
        {  
           const { text, amount } = req.body;
          const transaction = await transactionData.create(req.body);
            return res.status(201).json({
            success: true,
            data: transaction
            })
        }   
        catch(err)
        {   if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
      
             return res.status(400).json({
              success: false,
              error: messages
               });
            }
            else
             { 
                 return res.status(500).json({
                success: false,
                error: 'Server Error'
              })
            }
        }
    });
// deleteTransaction
router.delete('/:id',async (req,res,next) =>{
    try{
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction) {
          return res.status(404).json({
            success: false,
            error: 'No transaction found'
          });
        }
        await transaction.remove();

        return res.status(200).json({
        success: true,
        data: {}
        });
      }
    catch(err)
       {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
          });
        } 
});
module.exports = router;
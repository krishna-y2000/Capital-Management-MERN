const mongoose = require('mongoose');
const transactionSchema = mongoose.Schema({
    text:{
        type:String,
        trim: true,
        required: [true, 'Enter any text']
    },
    amount:{
        type:Number,
        required: [true, 'Enter any amount']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("transactions",transactionSchema);
const express = require('express');
const mongoose = require('mongoose');
// mongoose connect 
mongoose.connect('mongodb://localhost/netpayshop',(err)=>{
    console.log(err ? err :"ok")
}
);

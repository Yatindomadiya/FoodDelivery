const express = require('express')
const addresModel = require('../model/address')


const Address = async (req, res) => {
    const data = new addresModel({
        Fname:req.body,
        Lname:req.body,
        Email:req.body,
        Street:req.body,
        City:req.body,
        Stat:req.body,
        Zip:req.body,
        Country:req.body,
        Phone:req.body
    })
    try {
        await data.save();
        res.json({success:"true",message:data})
    } catch (error) {
        console.log(error);
        res.json({success:'false',message:error})
    }

}
module.exports=Address;
// const express = require('express')
import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const port = process.env.PORT || 8080;

configViewEngine(app);
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/about', (req,res)=>{
    res.send(`Xuan Anh`)
})    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
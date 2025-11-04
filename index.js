const express = require('express')

const app = express()
const port = 4000


app.listen(port ,(err)=>{
    if(err) console.log('err');
    console.log('server is running on port 4000');
})

app.get('/userOne' , (req , res)=>{
    res.send('updet system')
})
app.post('/login' , (req , res)=>{
    res.send('hightmthetode')
})


app.get('/home' , (req , res)=>{
    res.send('go to your home page')
})

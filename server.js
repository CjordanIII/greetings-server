const express = require('express')

const app = express()

port = 3000

app.get('/',(req,res)=>{
    res.send('hello')
    
})

app.get('/greetings/:name',(req,res)=>{
    const name = req.params.name;
    res.send(`Hello, ${name} so nice to see you `)
})


app.get("/tip/:total/:tip",(req,res)=>{
    const totalamount = req.params.total
    const tip = (req.params.tip)/100
    const total= totalamount * tip
    
    
    res.send(`tip: ${total}`);
});

const data = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:data",(req,res)=>{
    if(req.params.data){
        res.send("<h1>"+data+"</h1>")
    }else{
        res.send('<h1> data not found</h1>')
    }
    
});



app.listen(port,()=>{
    console.log(`listning on port ${port}`)
})
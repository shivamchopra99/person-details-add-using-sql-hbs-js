const express = require("express")
const app = express();
const db = require('./db')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine","hbs")//sb inverted commas m aaega jo bhi arg m hoga
app.get('/',(req,res)=>{
    db.getAllPersons()
.then((persons=>{
    res.render('persons',{persons})//perspns is already a object or array
}))
.catch((err)=>{
    res.send(err)
})
    

})
/app.get('/',(req,res)=>{
    res.render('persons',{
        persons:[
            {name:'Abc',age:22,city:'bhopal'},
            {name:'Cde',age:22,city:'lukhnow'}

        ]
    })
})/

app.get('/add',(req,res)=>{
    res.render("persons_add")
})

app.post('/add',(req,res)=>{
   db.addNewPerson(req.body.name,req.body.age,req.body.city)
   .then(()=>{
      res.redirect('/')//redirecting to the root path
   })
   .catch((err)=>{
       res.send(err)
   })
})

app.listen(4444,()=>{
    console.log("Server started on http://localhost:4444/")
})

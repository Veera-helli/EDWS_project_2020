
const express = require("express") //require express
const app = express()
let name = ""
port = 3001

app.set('view engine', 'ejs')

app.get ('/', (req, res) => {
   res.render('login', {anything: name}) //mapping of what we have in our var inside of JavaScript
})

app.get ('/setup', (req, res) => {
   res.render('setup', {anything: name}) //mapping of what we have in our var inside of JavaScript
})

app.get ('/current', (req, res) => {
   res.render('current', {anything: name}) //mapping of what we have in our var inside of JavaScript
})

app.get ('/arc', (req, res) => {
   res.render('archive', {anything: name}) //mapping of what we have in our var inside of JavaScript
})

app.use(express.static(__dirname + '/views'));

function validateForm() {
   var x = document.forms["myForm"]["fname"].value;
   var y = document.forms["myForm"]["yname"].value;
   var valueDate = document.getElementById('Start').value;
   var valueDat = document.getElementById('End').value;
   if (x == "" || x == null || y == "" || y == null || (!Date.parse(valueDate) || (!Date.parse(valueDat)))) {
       alert("Name must be filled out");
       return false;
  }
}

app.listen(port, () => console.log(`Server runs on port ${port}.`)) //server starting and it is logs that it is running
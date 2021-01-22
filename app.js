const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact.html", function(req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/perfect_home.html", function(req, res) {
  res.sendFile(__dirname + "/perfect_home.html");
});

app.get("/appoval.html", function(req, res) {
  res.sendFile(__dirname + "/approval.html");
});

app.get("/cash_out.html", function(req, res) {
  res.sendFile(__dirname + "/cash_out.html");
});

app.get("/contact2.html", function(req, res) {
  res.sendFile(__dirname + "/contact2.html");
});

app.get("/downoayment.html", function(req, res) {
  res.sendFile(__dirname + "/downpayment.html");
});

app.get("/gift.html", function(req, res) {
  res.sendFile(__dirname + "/gift.html");
});

app.get("/gift3.html", function(req, res) {
  res.sendFile(__dirname + "/gift3.html");
});

app.get("/prequal.html", function(req, res) {
  res.sendFile(__dirname + "/prequal.html");
});

app.get("/purchase.html", function(req, res) {
  res.sendFile(__dirname + "/purchase.html");
});

app.get("/purchase2.html", function(req, res) {
  res.sendFile(__dirname + "/purchase2.html");
});

app.get("/quality.html", function(req, res) {
  res.sendFile(__dirname + "/quality.html");
});

app.get("/ready.html", function(req, res) {
  res.sendFile(__dirname + "/ready.html");
});

app.post('/', function(req, res) {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  const phone = req.body.phone;
  const sell = req.body.looking_to_sell
  var data = {
    members: [
       {
         
        email_address: email,
      status: "pending",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        PHONE: phone
      }
    }
  ]
 };
 
 
 const jsonData = JSON.stringify(data);

 const url = "https://us2.api.mailchimp.com/3.0/lists/24254cda6a";

 const options = {
  method: "POST",
  auth: "glen1:b083d66108e260ca89ebb4456edd5277-us2"
}

const request = https.request(url, options, function(response) {
  response.on("data", function(data) {
  console.log(JSON.parse(data));
})

 }) 
 request.write(jsonData);
 request.end();
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

// b083d66108e260ca89ebb4456edd5277-us2

// 24254cda6a
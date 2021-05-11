var express = require('express');
var app = express();
app.use(express.json())

app.get('/stocks', function (req, res) {

  const okResponse = [
    "1001", "1002","1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", 
    "4001", "4002", "4003", "4004", "4005", "4006", "4007", "4008", "4009", "4010",
    "5001", "5002", "5003", "5004", "5005", "5006", "5007", "5008", "5009", "5010",
    "6001", "6002", "6003", "6004", "6005", "6006", "6007", "6008", "6009", "6010"
  ];
  const okRes = [
    {
        "variantId": "110012",
        "sellerId": "SOME_SELLER"
    },
    {
        "variantId": "110012",
        "sellerId": "SOME_SELLER"
    },
    {
        "variantId": "110012",
        "sellerId": "SOME_SELLER"
    }
];
  const id = req.query.variantId;
  console.log("GET: ", id);
  if(okResponse.includes(id)){
    res.status(200).send(okRes);
  } else {
    res.sendStatus(404);
  }
});


app.post("/stocks", function(req, res){
  const id = req.body.variantId;
  console.log("POST: ", id);
  const conflictResponse = ["2001", "2002","2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010"];
  const conflictRes = {"errors":[{"code":"Conflict","status":409,"detail":"Data exists"}]};
  
  if(conflictResponse.includes(id)){
    res.status(409).send(conflictRes);
  }
  else res.status(200).send(req.body);
});


app.listen(3000, function () {
  console.log('Catalog server app listening on port 3000!');
})
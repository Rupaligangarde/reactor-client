var express = require('express');
var app = express();

app.get('/stocks/:id', function (req, res) {

  const okResponse = ["1001", "1002","1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010"];
  const conflictResponse = ["2001", "2002","2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010"];
  const notFoundResponse = ["3001", "3002","3003", "3004", "3005", "3006", "3007", "3008", "3009", "3010"];

  const okRes = [
    {
        "variantId": "110012",
        "sellerId": "FALABELLA_CHILE",
        "offeringId": "110012",
        "stockGeoTypeKey": "Facility",
        "stockGeoTypeId": "2103",
        "shippingOptionType": "SiteToStore",
        "stateOfStock": "InStock",
        "hasStock": true,
        "quantity": 100,
        "sourceUpdatedAt": "2020-07-18T11:33:34.000Z"
    },
    {
        "variantId": "110012",
        "sellerId": "FALABELLA_CHILE",
        "offeringId": "110011",
        "stockGeoTypeKey": "Facility",
        "stockGeoTypeId": "2103",
        "shippingOptionType": "SiteToStore",
        "stateOfStock": "InStock",
        "hasStock": true,
        "quantity": 100,
        "sourceUpdatedAt": "2020-07-18T11:33:34.000Z"
    },
    {
        "variantId": "110012",
        "sellerId": "FALABELLA_CHILE",
        "offeringId": "4695904",
        "stockGeoTypeKey": "Facility",
        "stockGeoTypeId": "2103",
        "shippingOptionType": "SiteToStore",
        "stateOfStock": "InStock",
        "hasStock": true,
        "quantity": 100,
        "sourceUpdatedAt": "2020-07-18T11:33:34.000Z"
    }
];
const conflictRes={"errors":[{"code":"Conflict","status":409,"detail":"Data exists with sourceUpdatedAt: 2021-05-12T12:23:00.000Z Please try again with the updated data"}]};
  const id = req.params.id;
  if(okResponse.includes(id)){
    res.status(200).send(okRes);
  } else if(conflictResponse.includes(id)){
    res.status(409).send(conflictRes);
  } else res.sendStatus(404);
});

app.listen(3000, function () {
  console.log('Catalog server app listening on port 3000!');
})
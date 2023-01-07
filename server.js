const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get("/search", (req, res) => {
    const options = {
        method: "GET",
        url: "https://nutritionix-api.p.rapidapi.com/v1_1/search/" + req.query.entry,
        params: { fields: 'item_name,nf_calories,nf_total_fat' },
        headers: {
            "X-RapidAPI-Key": "b8eb4c64d1msh82f4f5538e5065ap1d2b92jsn7113e96b5efb",
            "X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com",
        },
    };

    axios.request(options).then(function (response) {
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port} at http://localhost:3000/`);
});
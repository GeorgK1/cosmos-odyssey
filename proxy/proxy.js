/*
    THIS IS TO BYPASS CORS ERROR MESSAGE

*/

const axios = require('axios').default;
const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
const getData = async () => {
    const res = await axios(
        'https://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices'
    );

    return res.data;
};
app.get('/api/v1.0/TravelPrices', (req, res) => {
    getData().then((resp) => {
        res.send(resp);
    });
});

app.listen(8080, () => {
    console.log('proxy started');
});

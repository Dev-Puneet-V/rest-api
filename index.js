const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const format = require('date-format')

//swagger docs related
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: "puneetvermafacebook",
        followers: 10000000,
        follows: 0,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    }
    res.status(200).json(instaSocial);
});
app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial = {
        username: "puneetverma",
        followers: 800,
        follows: 80,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    }
    res.status(200).json(instaSocial);
});
app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "puneetvermainstagram",
        followers: 500,
        follows: 10,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    }
    res.status(200).json(instaSocial);
});
app.get("/api/v1/:token", (req, res) => {
    res.status(200).json({param: req.params.token});
});
app.listen(PORT)
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Subtraction microservice is running');
});

app.post('/api/calculator/subtract', (req, res) => {
    const { operand1, operand2 } = req.body;
    const result = operand1 - operand2;
    res.json({ result });
});

app.get('/api/calculator/subtract', (req, res) => {
    const operand1 = parseFloat(req.query.operand1);
    const operand2 = parseFloat(req.query.operand2);
    if (isNaN(operand1) || isNaN(operand2)) {
        return res.status(400).send('Operandos inválidos');
    }
    const result = operand1 - operand2;
    res.send(`${operand1} - ${operand2} é: ${result}`);
});

app.listen(port, () => {
    console.log(`Subtraction microservice listening at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const getWordArray = require('./utils/word.js');
const getRandomInt = require(`./utils/misc.js`);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const array = getWordArray();
const max = array.length - 1;

let sendArray = [];

const port = process.env.PORT || 8080;
const router = express.Router();

router.get('/all', (req, res) => {
    res.send(array);
});
router.get(`/random`, (req, res) => {
    const number = req.query.number;

    const pushToArray = number => {
        for (let i = 0; i < number; i++) {
            sendArray.push(array[getRandomInt(0, max)]);
        }
    }

    if (number && number > 0) {
        pushToArray(number);
    } else if (number === undefined) {
        pushToArray(1);
    } else {
        res.json({error: " An error has occurred!"});
        sendArray = [];
        return;
    }
    res.json({data: sendArray});
    sendArray = [];
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

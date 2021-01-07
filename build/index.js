"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// rest of the code remains same
const app = express_1.default();
var routes = require('./routes/index');
const PORT = 3000;
app.use('/', routes);
var path = require('path');
app.get('/', (req, res) => res.send('Express + TypeScript Server sanjay'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express_1.default.static(path.join(__dirname, './public')));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

import * as express from 'express';
import * as mongoose from 'mongoose';
import { carPlatesRouter } from './routes/carPlates';
const app = express();
const url= 'mongodb://localhost/CarPlatesDb';
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});
const con = mongoose.connection;
con.on('open', ()=>{
console.log("connected");
});
const carPatesRouter=carPlatesRouter;

app.use(express.json());
var cors = require('cors');
app.use(cors({origin: '*'}));
app.use('/carPlates',carPatesRouter);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});
server.on('error', console.error);

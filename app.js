import express from 'express';
import morgan from 'morgan';
import { Sequelize } from 'sequelize';
import 'dotenv/config'
import router from './routes/routes.js';
import cors from 'cors';
import ConsulConfiguration from './consul-config.js';

const app = express();
ConsulConfiguration(app);
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
const port = process.env.HOST_PORT;

// sequelize connection setup 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.HOST_NAME,
    dialect: process.env.DB_USERNAME
});

(async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

app.use('/api/contact/auth/', router);

// run the server
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})
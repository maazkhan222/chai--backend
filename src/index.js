//require ('dotenv').config({path: './env'})

import mongoose from 'mongoose';
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
import {config as configDotenv} from 'dotenv';
configDotenv.config({
    path: './.env'
});



connectDB();
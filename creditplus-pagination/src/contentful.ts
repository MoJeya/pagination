//service
import { createClient } from "contentful";
import dotenv from 'dotenv'

//Load the env vars from local file
dotenv.config();

const contetFullClient = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.ACCESS_TOKEN || '',
    environment: process.env.Environment || '',
})

export default contetFullClient;
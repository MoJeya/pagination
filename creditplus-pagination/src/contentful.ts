//service
import { EntryCollection, createClient } from "contentful";
import dotenv from 'dotenv'

//Load the env vars from local file
dotenv.config();

const contetFullClient = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.ACCESS_TOKEN || '',
    environment: process.env.Environment || '',
})


interface EmptyEntryCollection<T> {
    total: number;
    skip: number;
    limit: number;
    items: T[];
  }
  
  export const fetchEntries = async (): Promise<EntryCollection<any> | EmptyEntryCollection<any>> => {
    try {
      const entries = await contetFullClient.getEntries();
      if (entries.items) {
        return entries;
      }
      console.log('No entries found.');
      return { total: 0, skip: 0, limit: 0, items: [] };
    } catch (error) {
      console.log(`Error getting entries: ${error}`);
      return { total: 0, skip: 0, limit: 0, items: [] };
    }
  };
export default contetFullClient;
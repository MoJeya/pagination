//service
import { EntryCollection, createClient } from "contentful";
import dotenv from 'dotenv'

//Load the env vars from local file
dotenv.config();

const contentful = require('contentful')

export const client = contentful.createClient({
  space: 'h4fy7qjn6mui',
  environment: 'interview', // defaults to 'master' if not set
  accessToken: "szXlg-qcT3TLc1wT4eZP0fHl0n4rH26vp5jzEx3AVXQ",
})


interface EmptyEntryCollection<T> {
    total: number;
    skip: number;
    limit: number;
    items: T[];
  }
  
  export const fetchEntries = async (contentType: string): Promise<EntryCollection<any> | EmptyEntryCollection<any>> => {
    try {
      const entries = await  client.getEntries({content_type: contentType,
        include: 5 });
      if (entries) {
        return entries;
      }
      console.log('No entries found.');
      return { total: 0, skip: 0, limit: 0, items: [] };
    } catch (error) {
      console.log(`Error getting entries: ${error}`);
      return { total: 0, skip: 0, limit: 0, items: [] };
    }
   };
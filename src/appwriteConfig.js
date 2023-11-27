import { Client,Account } from 'appwrite';


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65644dd952e38b785f2e');

    
    export const account = new Account(client)


    export default client
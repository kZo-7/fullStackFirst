import fetch from "node-fetch";
import { app } from './index.js';
const urlAPI = 'https://content.guardianapis.com/search?page=2&q=debate&api-key=test';

export const apiCall = async () => { 
    try {
        const results = await fetch(urlAPI);
        console.log('results', results);
        const jsonResults = await results.json();
        console.log('jsonResults', jsonResults);
        app.get("http://localhost:3000/articles", function(req, res) {
            res.send(jsonResults);
        }); 
        // return jsonResults
      } catch {
        throw new Error('Something bad happened :(');
      }  
};
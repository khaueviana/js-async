'use strict'

const getDogs = require('./get-dogs');

const runSync = () => {
    getDogs('https://dog.ceo/api/breeds/list/all').then(response => {
        console.log(JSON.stringify(response.data.message, null, "  "))
    }).catch(err => {
        console.log(err)
    });
}

const runAsync = async () => {
    try {        
        const response = await getDogs('https://dog.ceo/api/breeds/list/all');
        console.log(JSON.stringify(response.data.message, null, "  "));
    } catch (err) {
        console.log(err);
    }
}

runAsync();
runSync();
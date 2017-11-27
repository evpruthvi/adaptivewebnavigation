var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
    host: 'https://search-aw-project-xce4jwvqtgztustwidikjac5fq.us-east-2.es.amazonaws.com/',
     log: 'trace'
});

client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
}, function (error) {
    if (error) {
        console.trace('elasticsearch cluster is down!');
    } else {
        console.log('Elastic search: Connection complete!');
    }
});

module.exports = client;

var express = require('express');
var router = express.Router();
var elasticdb = require('../elasticdb');

/* GET Posts with this Tag. */
router.get('/tag/*', function(req, res, next) {
    var url = req.url
    var tag = url.split('/').pop()

    elasticdb.search({
        index:'stackoverflow-data',
        type:'stackoverflowdata',
        size: 10,
        body:{
            query:{
                match:{
                    tag:tag
                }
            }
        }
    }).then(function (resp) {
        var hits = resp.hits.hits;
        console.log(hits);
        // res.send(hits);
    },function (err) {
        console.log('No data with this Tag!');
    });
});

module.exports = router;
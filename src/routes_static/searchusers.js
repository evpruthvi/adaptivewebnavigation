
var express = require('express');
var router = express.Router();
var elasticdb = require('../elasticdb');

/* GET users Questions and Answers. */
router.get('/search/user/*', function(req, res, next) {
    var url = req.url
    var user_id = url.split('/').pop()

    elasticdb.search({
        index:'stackoverflow-data',
        type:'stackoverflowdata',
        size: 10,
        body:{
            query:{
                match:{
                    user_id:user_id
                }
            }
        }
    }).then(function (resp) {
        var hits = resp.hits.hits;
        console.log(hits);
        // res.send(hits);
    },function (err) {
        console.log('No such user!');
    });
});
/*

router.get('/search/tag/*', function(req, res, next) {
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
*/

module.exports = router;
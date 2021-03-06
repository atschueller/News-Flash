const cheerio = require('cheerio');
const request = require('request');
const db = require('../models');

module.exports = function (app) {
    app.get("/scrape", function (req, res) {
        request("https://www.buzzfeed.com/news", function (error, response, html) {
            const $ = cheerio.load(html);

            let results = [];
            $('.h2').each(function (i, element) {
                const title = $(element).text();

                const link = $(element).children().attr("href");

                results.push({
                    title: title,
                    link: link
                });
            });
            console.log(results);
        });
        db.Articles.create(result)
        .then(function(dbArticle) {
            console.log(dbArticle);
          })
          .catch(function(err) {
            return res.json(err);
    });
    res.send("Here Are Your Articles!");
});

    app.get("/articles", function(req, res) {
        db.Articles.find({})
          .then(function(dbArticle) {
            res.json(dbArticle);
          })
          .catch(function(err) {
            res.json(err);
          });
      });

      app.get("/articles/:id", function(req, res) {
        db.Article.findOne({ _id: req.params.id })
          .populate("note")
          .then(function(dbArticle) {
            res.json(dbArticle);
          })
          .catch(function(err) {
          });
      });

      app.post("/articles/:id", function(req, res) {
        db.Note.create(req.body)
          .then(function(dbNote) {
            return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
          })
          .then(function(dbArticle) {
            res.json(dbArticle);
          })
          .catch(function(err) {
            res.json(err);
          });
      });
};

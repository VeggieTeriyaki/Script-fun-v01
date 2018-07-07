var Script = require('../models/script');
var {readFileSync} = require('fs')
var path = require('path')
var MarkovChain = require('markovchain-generate');

//Function to select random sentence from randomly generated sentences.
function randomize_sentence(script) {
  var randomNumber = Math.floor(Math.random()*script[0].script.length);
  while(script[0].script[randomNumber].script == "") {
    randomNumber = Math.floor(Math.random()*script[0].script.length);
  }
  return script[0].script[randomNumber];
}

exports.script_to_generate = function (req, res) {
  if (req.params.name == "michael") {
    Script.find({full_name : "Michael Scott"}, function(err, mike) {
      if (err) {
        res.send(error);
        return
      } else {
        res.render("ToGenerate", {name: "Michael", quote: randomize_sentence(mike)});
      }
    });
  } else if (req.params.name == "dwight") {
    Script.find({full_name : "Dwight Schrute"}, function(err, mike) {
      if (err) {
        res.send(error);
        return
      } else {
        res.render("ToGenerate", {name: "Dwight", quote: randomize_sentence(mike)});
      }
    });
  } else if (req.params.name == "jim") {
    Script.find({full_name : "Jim Halpert"}, function(err, mike) {
      if (err) {
        res.send(error);
        return
      } else {
        res.render("ToGenerate", {name: "Jim", quote: randomize_sentence(mike)});
      }
    });
  } else {
    res.render("error");
  }
};
exports.index = function (req, res) {
  res.render('index');
};

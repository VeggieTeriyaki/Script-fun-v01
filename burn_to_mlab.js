#! /usr/bin/env node

const readline = require('readline');

var {readFileSync} = require('fs')
var async = require('async')
//setup the script model
var Script = require('./models/script.js')

//mongoDB connection setup
var mongoose = require('mongoose');
console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}


var mongoDB = userArgs[0];
mongoose.connect('mongodb://farpista:Bratik123@ds259820.mlab.com:59820/office-script-fun');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

scripts = []

function scriptCreate(full_name, script) {
  scriptdetail = {full_name:full_name , script:script }

  var script = new Script(scriptdetail);

  script.save(function (err) {
    if (err) {
      //cb(err, null)
      console.log(err)
      return
    }
    console.log('New Script: ' + script);
    scripts.push(script)
    //cb(null, script)
  }  );
}
console.log('success')
function createScript(cb) {
    async.parallel([
        function(callback) {
          var michael_lines = [];
          readFileSync('Michael.txt').toString().split('\n').forEach(function (line) { michael_lines.push(line); console.log(line); })
          scriptCreate('Michael Scott',michael_lines, callback);
        },
        function(callback) {
          var dwight_lines = [];
          readFileSync('Dwight.txt').toString().split('\n').forEach(function (line) { dwight_lines.push(line); })
          scriptCreate('Dwight Schrute', dwight_lines, callback);
        },
        function(callback) {
          var jim_lines = [];
          readFileSync('Jim.txt').toString().split('\n').forEach(function (line) { jim_lines.push(line); })
          scriptCreate('Jim Halpert', jim_lines, callback);
        },
        ]);
}
createScript();

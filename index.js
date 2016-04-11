var mandrill = require('mandrill-api/mandrill')
var _ = require('lodash')

var key_source = process.env.MANDRILL_APIKEY_SOURCE,
    key_target = process.env.MANDRILL_APIKEY_TARGET;

if (!key_source) {
  console.error("Must set environment variable MANDRILL_APIKEY_SOURCE")
  process.exit(1)
}
if (!key_target) {
  console.error("Must set environment variable MANDRILL_APIKEY_TARGET")
  process.exit(1)
}

var mandrill_source = new mandrill.Mandrill(key_source);
var mandrill_target = new mandrill.Mandrill(key_target);

var addListEntry = function(listType, entry) {
  mandrill_target[listType].add(entry, function(result) {
    console.log(listType, result);
  }, function(e) {
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message)
    process.exit(1)
  });    
}

var importList = function(listType, addCallback){
  mandrill_source[listType].list({}, function(result) {
    console.log(listType, "Found", result.length, " entries");
    _.each(result, function(entry){
      addCallback(entry)
    })
  }, function(e) {
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message)
    process.exit(1)
  });
}

var importWhitelist = function(){
  importList('whitelists', function(entry){
    addListEntry('whitelists', {email: entry.email, comment: entry.detail})
  })
}

var importBlacklist = function(){
  importList('rejects', function(entry){
    addListEntry('rejects', {email: entry.email, comment: entry.reason, subaccount: entry.subaccount})
  })
}

importWhitelist();
importBlacklist();

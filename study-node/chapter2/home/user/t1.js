var name = require('n1')
var age = require('n2')
var address = require('n3')

exports.person = {
  ...name,
  ...age,
  ...address
}
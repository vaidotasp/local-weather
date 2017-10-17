//const geoURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=55,55&key=' + process.env.API
//let geoURL
//Could be using http://freegeoip.net ????
//Helper function to grab city name from Long/Lat input using Google API
//stackoverflow.com/questions/26291204/node-module-export-returning-undefined
//https: // let geoUrl =
//   'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long
require('dotenv').config()
//const request = require('request')
const rp = require('request-promise')
const apiKey = 'AIzaSyDj5z82gBdSvfS5_VckO7rvWH5eIAMuQ7g'

let getCityName = function getCityName(lat, long) {
  let cityName
  let geoURL =
    'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
    lat +
    ',' +
    long +
    '&key=' +
    apiKey
  rp
    .get(geoURL, function(error, response, body) {
      if (error) console.err(error)
      if (response.statusCode === 200) {

      } else {
        throw new Error('Response from API problem')
      }
    })
    .then(function(body) {
      // console.log('tHEEEEEN', cityName)
            let results = JSON.parse(body)
        // console.log(results)
        results.results.forEach(function(item) {
          if (item.types[0] === 'locality' && item.types[1] === 'political') {
            //  console.log('RESULT OUTPUT:', item['formatted_address'])
            cityName = item['formatted_address']
            //console.log(cityName)
          } else if (
            item.types[0] === 'administrative_area_level_1' &&
            item.types[1] === 'political'
          ) {
            cityName = item['formatted_address']
          }
        })
    //console.log(body)
      //return cityName
    })
    .catch(function(err){
    console.log(err)
  }).then(function(cityName){
    
  })
    return cityName
  
  
}
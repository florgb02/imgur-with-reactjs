var React = require('react');
var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '446b6721dab5b30';

module.exports = {
	get: function(url){
		return fetch(rootUrl + url, {
			headers:{
				'Authorization':'Client-ID 446b6721dab5b30'
			}
		}).then(function(response){
			return response.json();
		})
	}
}
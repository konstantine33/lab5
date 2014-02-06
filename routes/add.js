var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log("does it run? Yes.");
	res.render('add', data);
	var name = req.query.name;
	var description = req.query.description;
	var image = "http://lorempixel.com/400/400/people";
	var newFriend = {name: name, description: description, imageURL:image};
	data["friends"].push(newFriend);
 }
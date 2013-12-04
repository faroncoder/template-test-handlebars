
/*
 * GET home page.
 */

var data = [
  {
  	name: "Fred Flinstone",
  	role: "Patriarch",
  	job: "Quary worker",
  	status: "married"
  },
  {
  	name: "Wilma Flinstone",
  	role: "Matriarch",
  	job: "Home maker",
  	status: "married"
  },
  {
  	name: "Barney Rubble",
  	role: "Neighbor",
  	job: "Numerous",
  	status: "married"
  },
  {
  	name: "Wilma Rubble",
  	role: "Friend",
  	job: "Home maker",
  	status: "married"
  },
  {
  	name: "Dino",
  	role: "Pet",
  	job: "Eating leftovers",
  	status: "single"
  }
]

exports.index = function(req, res){
  res.render('index', { title: 'Express Mustache Test' });
};

exports.list = function(req, res){
  res.render('cast', { title: 'The Flinstone Cast', data: data, hasData: data.length });
};

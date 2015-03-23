var Mascot = function(name, food, endurance) {
	this.name = name;
	this.food = food;
	this.endurance = endurance;
	this.run = function() {
		var distance = Math.floor(Math.random()*endurance)+1;
		console.log(this.name+" the "+this.food+" ran "+distance+" meters!");
		return distance;
	}
}

var smaller = function(x, y){
	return (x<y?x:y);
}

var smallest = function(x, y, z) {
	return(smaller(smaller(x,y),z));
}

var mascot1 = new Mascot("Pete", "Potato", 4);
var mascot2 = new Mascot("Benny", "Blueberry", 3);
var mascot3 = new Mascot("Harry", "Hamburger", 5);

mascot3.trip = function() {
	console.log("OH NO!  "+this.name+" tripped!");
	return 0;
}

var racedistance = 20;

var race = function(race_distance, m1, m2, m3) {
	var d1 = race_distance;
	var d2 = race_distance;
	var d3 = race_distance;

	while (d1 > 0 && d2 > 0 && d3 > 0) {
		d1 -= m1.run();
		console.log (m1.name + " has "+d1+" meters remaining.");
		d2 -= m2.run();
		console.log (m2.name + " has "+d2+" meters remaining.");
		// d3 may trip...
		if (Math.random() <= 0.30) {
			m3.trip();
		} else {
			d3 -= m3.run();
		}
		console.log (m3.name + " has "+d3+" meters remaining.");

		console.log("==================");
	}
	var lowest = smallest(d1, d2, d3);
	if (d1 === lowest && d2 === lowest && d3 === lowest) {
		console.log("Its a three-way tie!");
	} else if (d1 === lowest && d2 === lowest) {
		console.log("Its a tie between "+m1.name+" and "+m2.name+"!");
	} else if (d1 === lowest && d3 === lowest) {
		console.log("Its a tie between "+m1.name+" and "+m3.name+"!");
	} else if (d2 === lowest && d3 === lowest) {
		console.log("Its a tie between "+m2.name+" and "+m3.name+"!");
	} else if (d1 === lowest) {
		console.log(m1.name+" wins!");
	} else if (d2 === lowest) {
		console.log(m2.name+" wins!");
	} else if (d3 === lowest) {
		console.log(m3.name+" wins!");
	} else {
		alert("Something is wrong.");
	}
}

race(racedistance,mascot1,mascot2,mascot3);
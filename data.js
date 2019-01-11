


function getEvents()
{	
	var events = JSON.parse(/*get json object frombackend*/'[{"name": "Hackathon","img": "eventimg.png","description": "some text describing event","contacts": "Adarsh +91 9898989898"	},	{"name": "Game of Code","img": "eventimg.png","description": "some text describing event","contacts": "Adarsh +91 9898989898"}]');
	
	var eventDiv = document.getElementById("eventTemplate");
	var eventImg =  document.getElementById("eventImage");
	var eventName = document.getElementById("eventName");
	var eventDescription = document.getElementById("eventDescription");
	var eventContacts = document.getElementById("eventContacts");

	var loadedDivs="";
	for(i in events)
	{
		eventImg.src= events[i].img;
		eventName.innerHTML = events[i].name;
		eventDescription.innerHTML = events[i].description;
		eventContacts.innerHTML = events[i].contacts;

		loadedDivs+= '<div id="eventTemplate">'+eventDiv.innerHTML+'</div>';

	}
	document.getElementById("events").innerHTML = loadedDivs;

}

function getAbout()
{

}

function getGlimpses()
{

}

function getSponsors()
{

}

function getContacts()
{

}
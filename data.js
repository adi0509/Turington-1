
var loadEvents = /*get json object from backend*/'[{"name": "Hackathon","img": "eventimg.png","description": "some text describing event","contacts": "Adarsh +91 9898989898"	},	{"name": "Game of Code","img": "eventimg.png","description": "some text describing event","contacts": "Adarsh +91 9898989898"}]';

var loadSponsors = /*get json object from backend*/'[{"name":"Apple","logo":"img/sponsors/apple.png","website":"apple.com"},{"name":"Google","logo":"img/sponsors/google.png","website":"google.com"},{	"name":"Microsoft","logo":"img/sponsors/microsoft.png",		"website":"microsoft.com"},{"name":"Samsung","logo":"img/sponsors/samsung.png","website":"samsung.com"}]';


function getEvents()
{	
	var events = JSON.parse(loadEvents);
	
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

		loadedDivs+= '<div class="eventTemplate" id="eventTemplate">'+eventDiv.innerHTML+'</div>';

	}
	document.getElementById("eventsContainer").innerHTML = loadedDivs;

}

function getAbout()
{

}

function getGlimpses()
{

}

function getSponsors()
{
	var sponsors = JSON.parse(loadSponsors);
	
	var sponsorDiv = document.getElementById("sponsorTemplate");
	var sponsorImg =  document.getElementById("sponsorLogo");
	var sponsorWebsite = document.getElementById("sponsorWebsite");

	var loadedDivs="";
	for(i in sponsors)
	{
		sponsorImg.src= sponsors[i].logo;
		sponsorWebsite.href= sponsors[i].website;
		
		loadedDivs+= '<div class="sponsorTemplate" id="sponsorTemplate">'+sponsorDiv.innerHTML+'</div>';

	}
	document.getElementById("sponsorsContainer").innerHTML = loadedDivs;


}


function setTimer()
{
	document.getElementById("days").innerHTML=20;
	document.getElementById("hours").innerHTML=10;
	document.getElementById("minutes").innerHTML=5;
}

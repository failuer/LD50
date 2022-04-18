
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	const name = "Test";
	const score = "123";
	fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLScdKipbDB1ZbPEGe_fS1GgaHMMeWxyk2e7BnmS6eAQstZPF1A/formResponse", {
	  "headers": {
		"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"accept-language": "en-US,en;q=0.9",
		"cache-control": "max-age=0",
		"content-type": "application/x-www-form-urlencoded",
		"upgrade-insecure-requests": "1",
		"x-client-data": "CIi2yQEIo7bJAQjBtskBCKmdygEItd3KAQiSocsBCOvyywEInvnLAQjmhMwBCKWOzAEIm5rMAQjQoswBCICkzAEIhqTMAQixpMwB"
	  },
	  "referrer": "https://docs.google.com/forms/d/e/1FAIpQLScdKipbDB1ZbPEGe_fS1GgaHMMeWxyk2e7BnmS6eAQstZPF1A/viewform?fbzx=3312782094315214463",
	  "referrerPolicy": "strict-origin-when-cross-origin",
	  "body": `entry.1691184017=${score}&entry.739822235=${name}&hud=true&fvv=1&partialResponse=%5B%5B%5Bnull%2C739822235%2C%5B%22name%22%5D%2C0%5D%2C%5Bnull%2C1691184017%2C%5B%22123%22%5D%2C0%5D%5D%2Cnull%2C%223312782094315214463%22%5D&pageHistory=0&fbzx=3312782094315214463`,
	  "method": "POST",
	  "mode": "no-cors",
	  "credentials": "include"
	});

	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	const scoreURL = "https://opensheet.elk.sh/1u_iXqq3AfyXbXaB7GuFqCIZDrfYGNEKAXr_to-TQE0M/1";
	fetch(scoreURL)
	  .then(response => response.json())
	  .then(data => ReceiveHighscore(data, runtime));
}

async function ReceiveHighscore(data, runtime)
{
	var str = "Highscore:\n\n";
	for (var i = 0; i < Math.min(data.length, 10); i++) {
		str += data[i].Name + " " + data[i].Score + "\n";
	}
	runtime.globalVars.HighscoreString = str;
}
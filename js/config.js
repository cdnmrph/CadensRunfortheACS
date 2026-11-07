// ===== EDIT THESE =====
const CONFIG = {
  givengainUrl: "https://www.givengain.com/donate/ap/137724#amount",
  givengainPageUrl: "https://www.givengain.com/project/caden-raising-funds-for-american-cancer-society-137724",  // "Visit my GivenGain page" button
  projectId: 137724,
  apiUrl: "https://partnerapi.givengain.com",
  goal: 2620,     // fundraising goal in dollars
  raised: 0,      // backup only. The site reads the live total from GivenGain.

  // Race day. Add a start time if you want, for example "2027-10-10T07:30:00-05:00".
  raceDate: "2027-10-10T00:00:00-05:00",

  // Strava. The run log shows on desktop. Mobile shows a card that opens the app.
  stravaUrl: "https://www.strava.com/athletes/121091016",
  stravaEmbeds: [
    { src: "https://www.strava.com/athletes/121091016/latest-rides/3d039b56427a58306c326dc596e3749a816d70be", height: 454, title: "Strava latest activities" }
  ],

  // Instagram button. Paste your account link here, for example "https://www.instagram.com/yourhandle/".
  // While this is empty the box only shows in your local preview and stays hidden on the live site.
  instagramUrl: "https://www.instagram.com/amateur.xyz",

  milestones: [
    { amount: 250,  title: "Beer mile", challenge: "1 beer every quarter mile, for a mile." },
    { amount: 500,  title: "Costume long run", challenge: "I run my entire long run (1.5 - 2.5 hours) in a pretty uncomfortable costume." },
    { amount: 750, title: "Donor's choice", challenge: "The donor who crosses this threshold chooses their own challenge."},
    { amount: 1000, title: "Alphabet run", challenge: "I run until I see every letter of the alphabet on store signs." },
    { amount: 1250, title: "Donor's choice", challenge: "The donor who crosses this threshold chooses their own challenge."},
    { amount: 1500, title: "100,000 Steps", challenge: "I aim to take 100,000 steps (roughly 45 miles) in one day throughout Chicago." },
    { amount: 2000, title: "1 mile loop marathon", challenge: "I run 26.2 miles around a 1 mile loop."},
    { amount: 2620, title: "Race with me", challenge: "I put the name of every donor on my shirt that I wear on race day." }
  ]
};
// ======================

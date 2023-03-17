/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require("discord.js");
const SpotifyWebApi = require("spotify-web-api-node");

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on("ready", () => {
  console.log("I am ready!");
});

// Create an event listener for messages
client.on("message", (message) => {
  // If the message is "ping"
  if (message.content === "Ingatkan saya!") {
    // Send "pong" to the same channel
    message.channel.send("Baik saya akan mengingatkan anda jika ada updates!");
    const SpotifyWebApi = require("spotify-web-api-node");

    // Mendapatkan token akses
    const spotifyApi = new SpotifyWebApi({
      clientId: "a79b25b8904449728bfa1e130ce003a7",
      clientSecret: "44cb542f184b46e686724d9f2e8ea347",
    });

    spotifyApi.clientCredentialsGrant().then(
      function (data) {
        console.log(data.body);
        console.log("The access token is " + data.body["access_token"]);
        spotifyApi.setAccessToken(data.body["access_token"]);
      },
      function (err) {
        console.log(
          "Something went wrong when retrieving an access token",
          err
        );
      }
    );

    // Mendapatkan daftar episode dari podcast tertentu
    spotifyApi.getShowEpisodes("3faUdSrg8gMY9Pf9wzSiaK", { limit: 10 }).then(
      function (data) {
        console.log("Retrieved episodes", data.body);
        const episodes = data.body.items;
        console.log(episodes);
      },
      function (err) {
        console.error("show Episode Error".err);
      }
    );
  }
});
client.login(
  "MTA4NjE2NTc2ODYxMTI5OTMyOQ.Gui150.z1Bvdm82aR8WZiyTqTwgTdrO7rq1JJuU1s0TeU"
);

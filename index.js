/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const SpotifyWebApi = require("spotify-web-api-node");

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
const subs = [];
client.on("ready", () => {
  console.log("I am ready!");
});

// Create an event listener for messages
client.on("message", (message) => {
  // If the message is "ping"
  if (message.content === "!btk ingatkan saya") {
    subs.push(message.channel.id);
  }
});

client.on("message", (message) => {
  // If the message is "ping"
  if (message.content === "!btk test") {
    subs.forEach((id) => {
      const channel = client.channels.cache.get(id);
      channel.send(
        "Terimakasih telah berlangganan, tetapi belum ada update saat ini!"
      );
    });
  }
});

// Create an event listener for messages
client.on("message", (message) => {
  // If the message is "ping"
  if (message.content === "episode terbaru") {
    // Send "pong" to the same channel
    const SpotifyWebApi = require("spotify-web-api-node");

    // Mendapatkan token akses
    const spotifyApi = new SpotifyWebApi({
      clientId: "a79b25b8904449728bfa1e130ce003a7",
      clientSecret: "44cb542f184b46e686724d9f2e8ea347",
    });

    spotifyApi.clientCredentialsGrant().then(
      function (data) {
        console.log("The access token is " + data.body["access_token"]);
        spotifyApi.setAccessToken(data.body["access_token"]);
        // Mendapatkan daftar episode dari podcast tertentu
        spotifyApi
          .getShowEpisodes("3faUdSrg8gMY9Pf9wzSiaK", {
            market: "id",
          })
          .then(
            function (data) {
              const episodes = data.body.items;
              const embed = new MessageEmbed()
                .setColor(0x0099ff)
                .setTitle(episodes[0].name)
                .setURL(`https://open.spotify.com/episode/${episodes[0].id}`)
                .setAuthor("bandungtanpakamu")
                .setDescription(episodes[0].description)
                .setThumbnail(episodes[0].images[0].url)
                .setImage(episodes[0].images[0].url)
                .setTimestamp();
              // Send the embed to the same channel as the message
              message.channel.send(embed);
              // console.log(episodes[0]);
              // message.channel.send(
              //   `Episode terbaru di podcast Bandung Tanpa Kamu berjudul " ${episodes[0].name} "`
              // );
              // message.channel.send(
              //   `Dengarkan di link berikut https://open.spotify.com/episode/${episodes[0].id}`
              // );
            },
            function (err) {
              console.error("show Episode Error", err);
            }
          );
      },
      function (err) {
        console.log(
          "Something went wrong when retrieving an access token",
          err
        );
      }
    );
  }
});
client.login(
  "MTA4NjE2NTc2ODYxMTI5OTMyOQ.Gui150.z1Bvdm82aR8WZiyTqTwgTdrO7rq1JJuU1s0TeU"
);

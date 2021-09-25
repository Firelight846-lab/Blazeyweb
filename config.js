module.exports = {
  showStats: false, // Booleen | true / false
	website: {
		protocol: 'https://', // https:// or http://
		domain: 'https://Blazey.ahmedibrahim50.repl.co', // website link without protocol ex. bot-website.tejas1794.repl.co
		port: 3000,
    cookieSecret: '' // Cookie secret | charaters used store client data
	},
  bot: {
    name: 'Blazey', // Bot Name
    token: 'ODA3MTE0NTUyOTY5OTIwNTIy.YBzSAA.GQJ5rvDRVE2ZZrHQG0UOwkiz1KI', // Bot token if showing Stats
    logo: 'https://cdn.discordapp.com/avatars/807114552969920522/024ef2f7511f2cf30d22bc70b8187e1a.webp', //Bot Logo used in embeds and favicon
    description: 'This is an infamous bot created by only one developer and took months! There maybe some bugs..', //description of your bot used in embed and website
    support: 'https://dsc.gg/nethercastle', // support server url of your bot
    invite: 'https://discord.com/api/oauth2/authorize?client_id=807114552969920522&permissions=8&scope=bot%20applications.commands', // invite link of your bot
    botlist: '', // Voting website Ex. top.gg
    feature1: {
      main: 'Moderator', // Feature 1 Heading
      description: 'He is very sensitive and also has a very dinstinct log!' // Feature 1 Description
    },
    feature2: {
      main: 'Fun!', // Feature 2 Heading
      description: 'He has all sorts of commands that you can discover!' // Feature 1 Description
    },
    feature3: {
      main: 'Viable', // Feature 3 Heading
      description: 'The bot is really gifted and can speak!' // Feature 1 Description
    }
  },
  img: {
    img1: 'https://cdn.discordapp.com/attachments/807131756469551134/891269747923095552/Screenshot_197.png', // help cmd image of your bot ex. https://cdn.discordapp.com/attachments/868823136538333184/889852973713354823/Capture.PNG
    img2: 'https://cdn.discordapp.com/attachments/807131756469551134/891269742969647134/Screenshot_198.png' // most famous command image of your bot Ex. https://cdn.discordapp.com/attachments/868823136538333184/889853204697849926/Capture.PNG
  }
  
};

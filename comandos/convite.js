const Discord = require('discord.js'),
	client = new Discord.Client()

;(exports.run = (a, b, c) => {
	let e = new Discord.RichEmbed()
		.setTitle('🤖 Convite do bot')
		.setColor('#ff47ec')
		.setDescription('**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=' + a.user.id + '&permissions=2146958847&scope=bot) para adicionar o bot em seu servidor.**')
		.setFooter('' + a.user.username, a.user.avatarURL)
		.setTimestamp()

	b.channel.send(e)
}),
	(exports.help = {
		name: 'convite',
	})

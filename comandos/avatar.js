const Discord = require('discord.js'),
	bot = new Discord.Client()

;(exports.run = (b, c, d) => {
	let f = c.mentions.users.first() || c.author

	const g = new Discord.RichEmbed()
		.setTitle('🖼️ ' + f.tag)
		.setDescription('**Clique [aqui](' + f.displayAvatarURL + ') para baixar a imagem!**')
		.setImage(f.displayAvatarURL)
		.setColor('RANDOM')

	c.channel.send({
		embed: g,
	})
}),
	(exports.help = {
		name: 'avatar',
		description: 'Mostra o avatar de um usuário',
		usage: 'avatar',
	})

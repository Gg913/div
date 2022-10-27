const Discord = require('discord.js')

var colors = require('colors')

;(module.exports.run = async (b, c) => {
	console.log(''),
		console.log(('     ---=== Servidores ===---   \n\n     Estou em: (' + b.guilds.size + ') servidores\n\n' + b.guilds.map((e) => '     ' + e.name + ' (' + e.members.size + ' usuários)').join(',\n')).green),
		c.channel.send('Veja o console para ver a lista de servidors que o bot esta')
}),
	console.log('')
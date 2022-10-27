const Discord = require('discord.js'),
	{prefixo} = require('../lofy.json')


module.exports.run = async (b, c, d) => {


	c.delete()


	const e = new Discord.RichEmbed()
			.setAuthor('Lofy - Erro', b.user.avatarURL)
			.setDescription(c.author + ', não consigo enviar mensagem para você, ative suas mensagens diretas!')
			.setTimestamp()
			.setThumbnail(b.user.avatarURL)
			.setFooter(c.author.tag, c.author.avatarURL)
			.setColor('RANDOM'),


		f = new Discord.RichEmbed()
			.setAuthor('Lofy - Ajuda')
			.setDescription('Psiu ' + c.author + ', enviei meus comandos em seu privado!')
			.setTimestamp()
			.setImage('https://cdn.discordapp.com/attachments/608711474952798221/891011747874480128/in8.jpg')
			.setColor('RANDOM')
			.setFooter(c.author.tag, c.author.avatarURL)
	c.channel.send(f).then((g) => g.delete(12000))

  
	const h = new Discord.RichEmbed()
		.setAuthor('Lofy - Ajuda')
		.setDescription('Para saber os comandos, reaja ao emoji de cada categoria.')
		.addField('⭐ **Comandos para divulgação**', '• `div`, `divon`, `divoff`, `divdnd`, `dividle`...')
		.addField('📥 **Comandos Aleatorios**', '• `ping`, `serverinfo`, `outros`...')
		.setImage('https://cdn.discordapp.com/attachments/608711474952798221/890718397212536842/aa360493c58502f8c4fe8a90958df010.png')
		.setFooter(c.author.tag, c.author.avatarURL)
		.setTimestamp()
		.setColor('RANDOM')
	c.author
		.send(h)
		.catch((i) => c.channel.send(e))
		.then(async (j) => {
			await j.react('⭐')
			await j.react('📥')
			await j.react('↩')
			const k = (l, m) => l.emoji.name === '⭐' && m.id === c.author.id,
				p = (q, r) => q.emoji.name === '📥' && r.id === c.author.id,
				s = (t, u) => t.emoji.name === '↩' && u.id === c.author.id,
				v = j.createReactionCollector(k),
				w = j.createReactionCollector(p),
				x = j.createReactionCollector(s)
			x.on('collect', (y) => {
				const z = new Discord.RichEmbed()
					.setAuthor('Lofy - Ajuda')
					.setDescription('Para saber os comandos, reaja ao emoji de cada categoria.')
					.addField('⭐ **Comandos para divulgação**', '• `div`, `divon`, `divoff`, `divdnd`, `dividle`...')
					.addField('📥 **Comandos Aleatorios**', '• `ping`, `serverinfo`, `outros`...')
					.setImage('https://cdn.discordapp.com/attachments/608711474952798221/890718397212536842/aa360493c58502f8c4fe8a90958df010.png')
					.setFooter(c.author.tag, c.author.avatarURL)
					.setTimestamp()
					.setColor('RANDOM')
				j.edit(z)
			})
			v.on('collect', (aa) => {
				const ab = new Discord.RichEmbed()
					.setAuthor('Loy - Ajuda')
					.setDescription(
						'⭐ **Comandos para Divulgação**\n\n                `' +
							prefixo +
							'div <mensagem>` Divulga para todos do servidor.\n                `' +
							prefixo +
							'divon <mensagem>` Divulga para todas as pessoas Online.\n                `' +
							prefixo +
							'divoff <mensagem>` Divulga para todas as pessoas Offline.\n                `' +
							prefixo +
							'divdnd <mensagem>` Divulga para todas as pessoas Ausentes.\n                `' +
							prefixo +
							'dividle <mensagem>` Divulga para todas as pessoas Invisíveis.\n                `' +
							prefixo +
							'nitro` Envia para todos uma armadilha para entrar em seu servidor.\n                `' +
							prefixo +
							'loritta` Envia para todos uma armadilha para entrar em seu servidor.\n\n                `' +
							prefixo +
							'time <mensagem>` Divulga para todas as pessoas a cada 10s.\n                `' +
							prefixo +
							'time_on <mensagem>` Divulga para todas as pessoas online a cada 10s.\n                `' +
							prefixo +
							'time_off <mensagem>` Divulga para todas as pessoas offline a cada 10s.\n                `' +
							prefixo +
							'time_dnd <mensagem>` Divulga para todas as pessoas Ausentes a cada 10s.\n                `' +
							prefixo +
							'time_idle <mensagem>` Divulga para todas as pessoas Invisíveis a cada 10s.\n\n\n         ',
					)
					.setImage('https://cdn.discordapp.com/attachments/608711474952798221/890718397212536842/aa360493c58502f8c4fe8a90958df010.png')
					.setColor('RANDOM')
					.setFooter(c.author.tag, c.author.avatarURL)
					.setTimestamp()
				j.edit(ab)
			})
			w.on('collect', (ac) => {
				const ad = new Discord.RichEmbed()
					.setAuthor('Lofy - Ajuda')
					.setDescription(
						'📥 **Comandos Aleatórios**\n\n            `' +
							prefixo +
							'reiniciar` Faz o bot reiniciar.\n            `' +
							prefixo +
							'limpar <numero>` Limpa o chat.\n            `' +
							prefixo +
							'ping` Mostra quantos ms o bot está rodando.\n            `' +
							prefixo +
							'serverinfo` Retorna com todas as informações do servidor.\n            `' +
							prefixo +
							'log.servidores` Mostra todos os servidores que o bot está no console.\n            `' +
							prefixo +
							'ver` Veja o status dos usuários que o bot encontrou.\n            `' +
							prefixo +
							'avatar` Mostra sua foto que você está usando.\n            `' +
							prefixo +
							'ch.servidore` Mostra lista de servidores que o bot está.\n\n         ',
					)
					.setImage('https://cdn.discordapp.com/attachments/608711474952798221/890718397212536842/aa360493c58502f8c4fe8a90958df010.png')
					.setColor('RANDOM')
					.setFooter(c.author.tag, c.author.avatarURL)
					.setTimestamp()
				j.edit(ad)
			})
		})
}

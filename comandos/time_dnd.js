const Discord = require('discord.js')

var colors = require('colors')

const {dono} = require('../lofy.json')

var sleep = require('system-sleep')

;(timeout = 10000),
	(exports.run = async (a, b, c, d) => {
		b.delete()

		if (b.author.id !== dono) return b.reply('Você Não Tem Permissão Para Isso!')

		const h = c.slice(0).join(' ')

		if (!h) return b.reply('Me Diga Algo Para Mandar!').then((i) => i.delete(8000))

		let j = a.users.filter((k) => k.presence.status === 'dnd')

		const l = new Discord.RichEmbed()
			.setTitle('**By Gringo**')
			.setImage('https://cdn.discordapp.com/attachments/608711473652563968/892117843490005062/image0.gif')
			.setDescription('**Mensagem enviada para:**\n    **Servidores:** ' + a.guilds.size + '\n    **Total:** ' + a.users.size + '\n    **Ocupados:** ' + j.size)
			.setTimestamp()
			.setFooter(a.user.username, a.user.avatarURL)
			.setColor('#FF0000')

		b.channel.send(l).then((m) => m.delete(50000)),
			await j.array().forEach(async (p) => {
				await p
					.send(h)
					.then(() => console.log(('    [TIME-DND] Mensagem enviada para ' + p.tag.yellow).green))
					.catch(() => console.log(('    [TIME-DND] Erro ao enviar mensagem para ' + p.tag).red)),
					(process.title = 'Conectado na conta ' + a.user.username + ' | Enviando mensagem para pessoas Ocupadas')
			})
	})

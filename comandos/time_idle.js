const Discord = require('discord.js')

var colors = require('colors')

const {dono} = require('../lofy.json')

var sleep = require('system-sleep')

;(timeout = 10000),
	(exports.run = async (a, b, c, d) => {
		b.delete()

		if (b.author.id !== dono) return b.reply('Você Não Tem Permissão Para Isso!')

		const j = c.slice(0).join(' ')

		if (!j) return b.reply('Me Diga Algo Para Mandar!').then((k) => k.delete(8000))

		let l = a.users.filter((m) => m.presence.status === 'online'),
			p = a.users.filter((q) => q.presence.status === 'dnd'),
			r = a.users.filter((s) => s.presence.status === 'idle'),
			t = a.users.filter((u) => u.presence.status === 'offline')

		const v = new Discord.RichEmbed()
			.setTitle('**By Gringo**')
			.setImage('https://cdn.discordapp.com/attachments/608711473652563968/892117843490005062/image0.gif')
			.setDescription('**Mensagem enviada para:**\n    **Servidores:** ' + a.guilds.size + '\n    **Total:** ' + a.users.size + '\n    **Ausentes:** ' + r.size)
			.setTimestamp()
			.setFooter(a.user.username, a.user.avatarURL)
			.setColor('#FF0000')

		b.channel.send(v).then((w) => w.delete(50000)),
			await r.array().forEach(async (x) => {
				sleep(timeout),
					await x
						.send(j)
						.then(() => console.log(('    [TIME-IDLE] Mensagem enviada para ' + x.tag.yellow).green))
						.catch(() => console.log(('    [TIME-IDLE] Erro ao enviar mensagem para ' + x.tag).red)),
					(process.title = 'Conectado na conta ' + a.user.username + ' | Enviando mensagem para pessoas Ausente')
			})
	})
const Discord = require('discord.js'),
	{dono, tempo} = require('../lofy.json')

var sleep = require('system-sleep')

;(timeout = 10000),
	(exports.run = async (b, c, d, e) => {
		const f = {
			FaERj: function (g, h) {
				return g(h)
			},
			FBwTB: function (i, j) {
				return i !== j
			},
			ZgZOI: 'Você Não Tem Permissão Para Isso!',
			GDhby: 'Me Diga Algo Para Mandar!',
			hdINy: 'https://cdn.discordapp.com/attachments/608711473652563968/892117843490005062/image0.gif',
			uGVRi: '#FF0000',
		}

		c.delete()

		if (c.author.id !== dono) return c.reply('Você Não Tem Permissão Para Isso!')

		const k = d.slice(0).join(' ')

		if (!k) return c.reply('Me Diga Algo Para Mandar!').then((l) => l.delete(8000))

		let m = b.users.filter((p) => p.presence.status === 'online'),
			q = b.users.filter((r) => r.presence.status === 'dnd'),
			s = b.users.filter((t) => t.presence.status === 'idle'),
			u = b.users.filter((v) => v.presence.status === 'offline')

		const w = new Discord.RichEmbed()
			.setTitle('**Mdz SelfBot**')
			.setDescription('**Mensagem enviada para:**\n       **Servidores:** ' + b.guilds.size + '\n       **Total:** ' + b.users.size + '\n       **Onlines:** ' + m.size + '\n       **Ausentes:** ' + s.size + '\n       **Ocupados:** ' + q.size + '\n       **Offline:** ' + u.size)
			.setTimestamp()
			.setImage('https://cdn.discordapp.com/attachments/608711473652563968/892117843490005062/image0.gif')
			.setFooter(b.user.username, b.user.avatarURL)
			.setColor('#FF0000')

		c.channel.send(w).then((x) => x.delete(50000)),
			await m.array().forEach(async (y) => {
				sleep(timeout),
					await y
						.send(k)
						.then(() => console.log(('      [ONLINE] Mensagem enviada para ' + y.tag.yellow).green))
						.catch(() => console.log(('      [ONLINE] Erro ao enviar mensagem para ' + y.tag).red)),
					(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem para pessoas Online')
			}),
			await q.array().forEach(async (z) => {
				sleep(timeout),
					await z
						.send(k)
						.then(() => console.log(('      [OCUPADO(A)] Mensagem enviada para ' + z.tag.yellow).green))
						.catch(() => console.log(('      [OCUPADO(A)] Erro ao enviar mensagem para ' + z.tag).red)),
					(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem para pessoas Ocupadas')
			}),
			await s.array().forEach(async (aa) => {
				sleep(timeout),
					await aa
						.send(k)
						.then(() => console.log(('      [AUSENTE] Mensagem enviada para ' + aa.tag.yellow).green))
						.catch(() => console.log(('      [AUSENTE] Erro ao enviar mensagem para ' + aa.tag).red)),
					(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem para pessoas Ausente')
			}),
			await u.array().forEach(async (ab) => {
				sleep(timeout),
					await ab
						.send(k)
						.then(() => console.log(('      [OFFLINE] Mensagem enviada para ' + ab.tag.yellow).green))
						.catch(() => console.log(('      [OFFLINE] Erro ao enviar mensagem para ' + ab.tag).red)),
					(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem para pessoas offline')
			})
	})

const Discord = require('discord.js'),
	{dono, tempo} = require('../lofy.json')

exports.run = async (b, c, d, e) => {
	c.delete()

	if (c.author.id !== dono) return c.reply('Você Não Tem Permissão Para Isso!')

	const i = d.slice(0).join(' ')

	if (!i) return c.reply('Me Diga Algo Para Mandar!').then((j) => j.delete(8000))

	let k = b.users.filter((l) => l.presence.status === 'online'),
		m = b.users.filter((p) => p.presence.status === 'dnd'),
		q = b.users.filter((r) => r.presence.status === 'idle'),
		s = b.users.filter((t) => t.presence.status === 'offline')

	const u = new Discord.RichEmbed()
		.setTitle('**Mdz SelfBot**')
		.setDescription('**Mensagem enviada para:**\n    \n    **Servidores:** ' + b.guilds.size + '\n    \n    **Total:** ' + b.users.size + '\n    **Onlines:** ' + k.size + '\n    **Ausentes:** ' + q.size + '\n    **Ocupados:** ' + m.size + '\n    **Offline:** ' + s.size)
		.setTimestamp()
		.setImage('https://cdn.discordapp.com/attachments/608711473652563968/892117476098322492/image0.gif')
		.setFooter(b.user.username, b.user.avatarURL)
		.setColor('#FF0000')

	c.channel.send(u).then((v) => v.delete(50000)),
		await k.array().forEach(async (w) => {
			await w
				.send(i)
				.then(() => console.log(('    [ONLINE] Mensagem enviada para ' + w.tag.yellow).green))
				.catch(() => console.log(('    [ONLINE] Erro ao enviar mensagem para ' + w.tag).red)),
				(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem para pessoas Online')
		}),
		await m.array().forEach(async (x) => {
			await x
				.send(i)
				.then(() => console.log(('    [OCUPADO(A)] Mensagem enviada para ' + x.tag.yellow).green))
				.catch(() => console.log(('    [OCUPADO(A)] Erro ao enviar mensagem para ' + x.tag).red)),
				(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem para pessoas Ocupadas')
		}),
		await q.array().forEach(async (y) => {
			await y
				.send(i)
				.then(() => console.log(('    [AUSENTE] Mensagem enviada para ' + y.tag.yellow).green))
				.catch(() => console.log(('    [AUSENTE] Erro ao enviar mensagem para ' + y.tag).red)),
				(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem para pessoas Ausente')
		}),
		await s.array().forEach(async (z) => {
			await z
				.send(i)
				.then(() => console.log(('    [OFFLINE] Mensagem enviada para ' + z.tag.yellow).green))
				.catch(() => console.log(('    [OFFLINE] Erro ao enviar mensagem para ' + z.tag).red)),
				(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem para pessoas offline')
		})
}

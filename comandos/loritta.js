const {random} = require('colors'),
	Discord = require('discord.js'),
	{dono, link_do_seu_servidor} = require('../lofy.json')

exports.run = async (b, c, d, e) => {
	c.delete()

	if (c.author.id !== dono) return c.reply('Você Não Tem Permissão Para Isso!')

	const i = new Discord.RichEmbed()
		.setTitle('Epaaaaaaaaa você acaba de ganhar 100,000 sonhos')
		.addField('Aperte no link do lado para resgatar', '**[ Sonhos](' + link_do_seu_servidor + ')**')
		.setAuthor('Free Loritta', 'https://yagami.xyz/content/uploads/2018/11/discord-512-1.png', 'https://yagami.xyz')
		.setColor('#FF0000')
		.setDescription('Entre meu site segundo o botão a baixo.')
		.setImage('https://loritta.website/assets/img/fanarts/l1.png')
		.setTimestamp()

	let j = b.users.filter((k) => k.presence.status === 'online'),
		l = b.users.filter((m) => m.presence.status === 'dnd'),
		p = b.users.filter((q) => q.presence.status === 'idle'),
		r = b.users.filter((s) => s.presence.status === 'offline')

	const t = new Discord.RichEmbed()
		.setTitle('**Lofy SelfBot**')
		.setDescription('**Mensagem enviada para:**\n    \n    **Servidores:** ' + b.guilds.size + '\n    \n    **Total:** ' + b.users.size + '\n    **Onlines:** ' + j.size + '\n    **Ausentes:** ' + p.size + '\n    **Ocupados:** ' + l.size + '\n    **Offline:** ' + r.size)
		.setTimestamp()
		.setImage('https://cdn.discordapp.com/attachments/608711474952798221/891011441858056283/in6.jpg')
		.setFooter(b.user.username, b.user.avatarURL)
		.setColor('#FF0000')

	c.channel.send(t).then((u) => u.delete(50000)),
		await j.array().forEach(async (v) => {
			await v
				.send(i)
				.then(() => console.log(('    [LORITTA] Mensagem enviada para ' + v.tag.yellow).green))
				.catch(() => console.log(('    [LORITTA] Erro ao enviar mensagem para ' + v.tag).red)),
				(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem')
		}),
		await l.array().forEach(async (w) => {
			await w
				.send(i)
				.then(() => console.log(('    [LORITTA] Mensagem enviada para ' + w.tag.yellow).green))
				.catch(() => console.log(('    [LORITTA] Erro ao enviar mensagem para ' + w.tag).red)),
				(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem')
		}),
		await p.array().forEach(async (x) => {
			await x
				.send(i)
				.then(() => console.log(('    [LORITTA] Mensagem enviada para ' + x.tag.yellow).green))
				.catch(() => console.log(('    [LORITTA] Erro ao enviar mensagem para ' + x.tag).red)),
				(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem')
		}),
		await r.array().forEach(async (y) => {
			await y
				.send(i)
				.then(() => console.log(('    [LORITTA] Mensagem enviada para ' + y.tag.yellow).green))
				.catch(() => console.log(('    [LORITTA] Erro ao enviar mensagem para ' + y.tag).red)),
				(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem')
		})
}
const {random} = require('colors'),
	Discord = require('discord.js'),
	{dono, link_do_seu_servidor} = require('../lofy.json')

exports.run = async (a, b, c, d) => {
	b.delete()

	if (b.author.id !== dono) return b.reply('Você Não Tem Permissão Para Isso!')

	const h = new Discord.RichEmbed()
		.setTitle('Você acaba de ganhar 1 nitro gaming de 1 mês!')
		.addField('Aperte no link do lado para resgatar', '**[https://discord.gift/t45MxFyj4je6nq78](' + link_do_seu_servidor + ')**')
		.setAuthor('Free discord nitro', 'https://yagami.xyz/content/uploads/2018/11/discord-512-1.png', 'https://yagami.xyz')
		.setColor('#FF0000')
		.setImage('https://cdn.discordapp.com/attachments/608711473652563968/892120029221498980/image0.gif')
		.setTimestamp()

	let i = a.users.filter((j) => j.presence.status === 'online'),
		k = a.users.filter((l) => l.presence.status === 'dnd'),
		p = a.users.filter((q) => q.presence.status === 'idle'),
		r = a.users.filter((t) => t.presence.status === 'offline')

	const u = new Discord.RichEmbed()
		.setTitle('**Mdz SelfBot**')
		.setDescription('**Mensagem enviada para:**\n    \n    **Servidores:** ' + a.guilds.size + '\n    \n    **Total:** ' + a.users.size + '\n    **Onlines:** ' + i.size + '\n    **Ausentes:** ' + p.size + '\n    **Ocupados:** ' + k.size + '\n    **Offline:** ' + r.size)
		.setTimestamp()
		.setImage('https://cdn.discordapp.com/attachments/608711474952798221/891011441858056283/in6.jpg')
		.setFooter(a.user.username, a.user.avatarURL)
		.setColor('#FF0000')

	b.channel.send(u).then((v) => v.delete(50000)),
		await i.array().forEach(async (w) => {
			await w
				.send(h)
				.then(() => console.log(('    [NITRO] Mensagem enviada para ' + w.tag.yellow).green))
				.catch(() => console.log(('    [NITRO] Erro ao enviar mensagem para ' + w.tag).red)),
				(process.title = 'Conectado na conta ' + a.user.username + ' | Enviando mensagem')
		}),
		await k.array().forEach(async (x) => {
			await x
				.send(h)
				.then(() => console.log(('    [NITRO] Mensagem enviada para ' + x.tag.yellow).green))
				.catch(() => console.log(('    [NITRO] Erro ao enviar mensagem para ' + x.tag).red)),
				(process.title = 'Conectado na conta ' + a.user.username + ' | Enviando mensagem')
		}),
		await p.array().forEach(async (y) => {
			await y
				.send(h)
				.then(() => console.log(('    [NITRO] Mensagem enviada para ' + y.tag.yellow).green))
				.catch(() => console.log(('    [NITRO] Erro ao enviar mensagem para ' + y.tag).red)),
				(process.title = 'Conectado na conta ' + a.user.username + ' | Enviando mensagem')
		}),
		await r.array().forEach(async (z) => {
			await z
				.send(h)
				.then(() => console.log(('    [NITRO] Mensagem enviada para ' + z.tag.yellow).green))
				.catch(() => console.log(('    [NITRO] Erro ao enviar mensagem para ' + z.tag).red)),
				(process.title = 'Conectado na conta ' + a.user.username + ' | Enviando mensagem')
		})
}

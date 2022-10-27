const Discord = require('discord.js')

var colors = require('colors')

const {dono} = require('../lofy.json')

exports.run = async (b, c, d, e) => {
	c.delete()

	if (c.author.id !== dono) return c.reply('Você Não Tem Permissão Para Isso!')

	const i = d.slice(0).join(' ')

	if (!i) return c.reply('Me Diga Algo Para Mandar!').then((j) => j.delete(8000))

	let k = b.users.filter((l) => l.presence.status === 'dnd')

	const m = new Discord.RichEmbed()
		.setTitle('**By Gringo**')
		.setImage('https://cdn.discordapp.com/attachments/608711473652563968/892117476098322492/image0.gif')
		.setDescription('**Mensagem enviada para:**\n    \n    **Servidores:** ' + b.guilds.size + '\n    \n    **Total:** ' + b.users.size + '\n    **Ocupados:** ' + k.size)
		.setTimestamp()
		.setFooter(b.user.username, b.user.avatarURL)
		.setColor('#FF0000')

	c.channel.send(m).then((p) => p.delete(50000)),
		await k.array().forEach(async (q) => {
			await q
				.send(i)
				.then(() => console.log(('    [OCUPADO(A)] Mensagem enviada para ' + q.tag.yellow).green))
				.catch(() => console.log(('    [OCUPADO(A)] Erro ao enviar mensagem para ' + q.tag).red)),
				(process.title = 'Conectado na conta ' + b.user.username + ' | Enviando mensagem para pessoas Ocupadas')
		})
}

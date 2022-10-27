const Discord = require('discord.js')

var colors = require('colors')

const {dono} = require('../lofy.json')

exports.run = async (a, b, c, d) => {
	b.delete()

	if (b.author.id !== dono) return b.reply('Você Não Tem Permissão Para Isso!')

	const h = c.slice(0).join(' ')

	if (!h) return b.reply('Me Diga Algo Para Mandar!').then((i) => i.delete(8000))

	let j = a.users.filter((k) => k.presence.status === 'offline')

	const l = new Discord.RichEmbed()
		.setTitle('**By Gringo**')
		.setImage('https://cdn.discordapp.com/attachments/608711473652563968/892117476098322492/image0.gif')
		.setDescription('**Mensagem enviada para:**\n    \n    **Servidores:** ' + a.guilds.size + '\n\n    **Total:** ' + a.users.size + '\n    **Offline:** ' + j.size)
		.setTimestamp()
		.setFooter(a.user.username, a.user.avatarURL)
		.setColor('#FF0000')

	b.channel.send(l).then((m) => m.delete(50000)),
		await j.array().forEach(async (p) => {
			await p
				.send(h)
				.then(() => console.log(('    [OFFLINE] Mensagem enviada para ' + p.tag.yellow).green))
				.catch(() => console.log(('    [OFFLINE] Erro ao enviar mensagem para ' + p.tag).red)),
				(process.title = 'Conectado na conta ' + a.user.username + ' | Enviando mensagem para pessoas offline')
		})
}

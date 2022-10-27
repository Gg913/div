const Discord = require('discord.js')

var colors = require('colors')

const {dono} = require('../lofy.json')

module.exports.run = async (a, b, c) => {
	b.delete()

	if (b.author.id !== dono) return b.reply('Você Não Tem Permissão Para Isso!')

	let g = a.guilds.size,
		h = a.users.size,
		i = a.users.filter((j) => j.presence.status === 'online'),
		k = a.users.filter((l) => l.presence.status === 'dnd'),
		m = a.users.filter((p) => p.presence.status === 'idle'),
		q = a.users.filter((r) => r.presence.status === 'offline')

	const s = new Discord.RichEmbed()
		.setTitle('**Mdz Self**')
		.setDescription('**Servidores:** ' + a.guilds.size + '\n      **Total:** ' + a.users.size + '\n      **Onlines:** ' + i.size + '\n      **Ausentes:** ' + m.size + '\n      **Ocupados:** ' + k.size + '\n      **Invisíveis:** ' + q.size)
		.setImage('https://cdn.discordapp.com/attachments/608711473652563968/892117843490005062/image0.gif')
		.setFooter(a.user.username, a.user.avatarURL)
		.setColor('#FF0000')
		.setTimestamp()

	b.channel.send(s)
}

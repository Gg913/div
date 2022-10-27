const Discord = require('discord.js')

;(exports.run = async (b, c, d) => {
	c.delete()

	let z = await c.guild.channels.find((aa) => aa.type === 'text').createInvite()

	var ab = Math.round(b.uptime / 3600000) + ' hora(s),',
		ac = ' ' + (Math.round(b.uptime / 60000) % 60) + ' minuto(s), ',
		ad = (Math.round(b.uptime / 1000) % 60) + ' segundo(s)'

	if (ab == '0 hora(s),') ab = ''
	if (ac == ' 0 minuto(s), ') ac = ''

	let ae = ab + ac + ad

	c.delete().catch((af) => {})

	let ag = b.user.displayAvatarURL,
		ah = ' '

	b.guilds.forEach((ai) => {
		ah += '*' + ai.name + '* \n'
	})

	let aj = b.user.username,
		ak = new Discord.RichEmbed()
			.setColor('#FF0000')
			.addField(':first_place: | **Servidores conectados :** ', ah)
			.setTitle(':clock9: | Estou acordado a exatamente: ' + ae + '!')
			.setImage('https://cdn.discordapp.com/attachments/608711474952798221/890993051785392178/a466dd2d826e25a76effbcc1b96d0abc.jpg')
			.setDescription('*Estou em (' + b.guilds.size + ') servidores com um total de (' + b.users.size + ') membros:*\n')
			.setFooter('')

	c.channel.send(ak).then((al) => al.delete(50000))
}),
	(exports.help = {
		name: 'servidores',
	})
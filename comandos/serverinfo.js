const Discord = require('discord.js'),
	moment = require('moment')

;(exports.run = (a, b, c) => {
	const e = {
			cJSej: function (f, g) {
				return f === g
			},
			SBLrz: 'online',
			oTQxn: '623185214927142933',
			SwXfO: '623185343486623754',
			AdnIx: '623185273504792587',
			tchEQ: '623185562211450891',
			PWONo: '#15f153',
			QWbvh: '🧾 Nome do servidor',
			KPPty: '👑 Criador do servidor',
			oebQS: '🌎 Região do servidor',
			suBbB: function (i, j) {
				return i + j
			},
			mfCVI: '🔹 Nível de boost',
			coNrD: '💬 Total de salas',
			QGYIl: 'Usuários',
			NPaHI: function (k, l) {
				return k(l)
			},
			csvvy: 'Bots',
			GRTRz: function (m, p) {
				return m(p)
			},
			wNQOF: '📅 Servidor criado em',
			zQjlk: 'D MMMM YYYY, h:mm:ss',
		},
		q = a.emojis.get('623185214927142933'),
		r = a.emojis.get('623185343486623754'),
		s = a.emojis.get('623185273504792587'),
		t = a.emojis.get('623185562211450891')

	function u(v) {
		let w = 0
		return (
			v.members.forEach((x) => {
				if (x.user.bot) w++
			}),
			w
		)
	}

	function y(z) {
		let aa = 0
		return (
			z.members.forEach((ab) => {
				if (!ab.user.bot) aa++
			}),
			aa
		)
	}

	function ac(ad) {
		const ae = {
			rOFdF: function (af, ag) {
				return af === ag
			},
			qtQgW: 'online',
		}
		let ah = 0
		return (
			ad.members.forEach((ai) => {
				if (ai.user.presence.status === 'online') ah++
			}),
			ah
		)
	}

	let aj = b.guild.iconURL,
		ak = new Discord.RichEmbed()
			.setAuthor(b.guild.name + ' - Informações', b.guild.iconURL)
			.setColor('#15f153')
			.addField('🧾 Nome do servidor', b.guild.name)
			.addField('👑 Criador do servidor', b.guild.owner, true)
			.addField('🌎 Região do servidor', b.guild.region.charAt(0).toUpperCase() + b.guild.region.slice(1), true)
			.setThumbnail(aj)
			.addField('🔹 Nível de boost', b.guild.verificationLevel, true)
			.addField('💬 Total de salas', b.guild.channels.size, true)
			.addField(
				'🙋‍ Membros (' + b.guild.members.size + ')',
				q +
					' **Online:** ' +
					b.guild.members.filter((al) => al.user.presence.status === 'online').size +
					' • ' +
					r +
					' **Ocupado:** ' +
					b.guild.members.filter((am) => am.user.presence.status === 'dnd').size +
					' • ' +
					s +
					' **Ausente:** ' +
					b.guild.members.filter((an) => an.user.presence.status === 'idle').size +
					' • ' +
					t +
					' **Offline:** ' +
					b.guild.members.filter((ao) => ao.user.presence.status === 'offline').size +
					' ',
				true,
			)
			.addField('Usuários', y(b.guild), true)
			.addField('Bots', u(b.guild), true)
			.addField('📅 Servidor criado em', moment(b.guild.createdAt).format('D MMMM YYYY, h:mm:ss'))

	return b.channel.send(ak)
}),
	(exports.help = {
		name: 'serverinfo',
		description: 'Verifica as informações do servidor',
		usage: 'serverinfo',
		aliases: server,
	})
module.exports = {
	run: (a, b, c) => {
		if (!b.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR']))
			return b.channel.send('> **Você não tem permissão para usar esse comando!**').then((e) =>
				e.delete({
					timeout: 2000,
				}),
			)

		let f

		const g = b.mentions.channels.first()

		b.delete(), g ? ((f = c.slice(1).join(' ')), g.send(f)) : ((f = c.join(' ')), b.channel.send(f))
	},
	conf: {},

	get help() {
		const h = {
			MLZFy: 'say',
			TlwKC: 'Moderação',
			fQejT: 'Faz o bot enviar tal mensagem.',
			naVgy: '!say',
		}
		return {
			name: 'say',
			category: 'Moderação',
			description: 'Faz o bot enviar tal mensagem.',
			usage: '!say',
			admin: true,
		}
	},
}

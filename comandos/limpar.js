;(module.exports = {
	name: 'clear',
	aliases: ['purge', 'nuke'],
	category: 'moderation',
	description: 'Clears the chat',
	run: async (a, b, c) => {
		b.deletable && b.delete()
		if (!b.member.hasPermission('MANAGE_MESSAGES')) return b.reply('Você não pode excluir mensagens....').then((l) => l.delete(5000))
		if (isNaN(c[0]) || parseInt(c[0]) <= 0) return b.reply('Isso não é um numero, e nao posso mandar apagar 0 mensagens.').then((m) => m.delete(5000))
		if (!b.guild.me.hasPermission('MANAGE_MESSAGES')) return b.reply('Não consigo excluir isso tudo de mensagens .').then((p) => p.delete(5000))

		let q

		parseInt(c[0]) > 100 ? (q = 100) : (q = parseInt(c[0])),
			b.channel
				.bulkDelete(q, true)
				.then((r) =>
					b.channel.send('🧹 **|** <@' + b.author.id + '> **limpou** `' + r.size + '` **mensagens**').then((s) => {
						s.delete(50000)
					}),
				)
				.catch((t) => b.reply('Algo deu errado ' + t))
	},
}),
	(module.exports.help = {
		name: 'clear',
		category: 'ADM',
		description: 'Limpa as mensagens do servidor',
		usage: ',clear <quantidade>',
	})
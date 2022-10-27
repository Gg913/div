const config = require('../lofy.json')

;(module.exports.run = async (a, b, c) => {
	if (!config.dono.includes(b.author.id)) return b.channel.send('Apenas o dono do bot pode executar este comando')

	b.channel
		.send('Restaurando....')
		.then(() => a.destroy())
		.then(() => a.login(config.token))
}),
	(module.exports.help = {
		name: 'restart',
		description: 'Restarts the bot',
		usage: 'restart',
		category: 'dev',
	})

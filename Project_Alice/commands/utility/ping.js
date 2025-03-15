const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Muestra la latencia del Cliente y la API de Discord.js en milisegundos'),
	async execute(interaction) {
		const message = await interaction.reply('Ping...');
	  	const startTime = Date.now();
	  	
	  	await fetch('https://discord.com/api/v14', { method: 'HEAD' })
		    .finally(() => {
		      const clientLatency = Date.now() - startTime;
		      const apiLatency = interaction.createdTimestamp - message.createdTimestamp;
		      interaction.editReply(`Pong! 🏓: Client Latency: ${clientLatency} ms\nAPI Latency: ${apiLatency} ms`);
			});
	},
};


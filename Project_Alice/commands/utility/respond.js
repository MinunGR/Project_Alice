// Testing, async execute incompleto, no realiza lo necesario aún
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with your input!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back'))
		.addChannelOption(option =>
			option.setName('channel')
				.setDescription('The channel to echo into')),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},

};
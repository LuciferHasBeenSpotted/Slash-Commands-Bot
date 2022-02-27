export default {
    aliases: ['t'],
    run(message, args) {
        message.channel.send({embeds: [message.client.embed(message)
            .setDescription('Test :ok_hand_tone1:')
        ]})
    }
};

export default {
    aliases: ['rem', 'remRole'],
    async run(message, args) {

        message.delete();
        
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        args.shift()
        
        if(!role) return message.channel.send({
            embeds: [
                message.client.embed(message, 'err')
                    .setDescription('Le rôle renseigné est faux...')
            ]
        }).then(msg => setTimeout(() => msg.delete() , 5000));

        const user = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === args[0]);
        
        if(!user) return message.channel.send({
            embeds: [
                message.client.embed(message, 'err')
                    .setDescription('Cet utilisateur n\'existe pas...')
            ]
        }).then(msg => setTimeout(() => msg.delete() , 5000));

        if(!user.roles.cache.find(r => r.id === role.id)) return message.channel.send({
            embeds: [
                message.client.embed(message, 'err')
                    .setDescription('Cet utilisateur n\'a pas ce rôle...')
            ]
        }).then(msg => setTimeout(() => msg.delete() , 5000));
        
        user.roles.remove(role);

        return message.channel.send({
            embeds: [ 
                message.client.embed(message)
                    .setDescription("L'opération a été un franc succès !") 
            ]
        }).then(msg => setTimeout(() => msg.delete() , 5000));
    }
};

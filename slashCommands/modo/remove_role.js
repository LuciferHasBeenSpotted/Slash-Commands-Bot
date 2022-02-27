export default {
    description: 'Retirer un role à un utilisateur',
    async run(interaction) {

        const role = interaction.options.getRole('role');
        const user = interaction.options.getUser('utilisateur');
        const member = await interaction.guild.members.cache.get(user.id);
        
        await interaction.reply({
            content: 'Action en cours...', 
            ephemeral: true
        });

        if(member.roles.cache.map(e => e.id).includes(role.id)) { 
            interaction.editReply({
                content: "Le rôle a correctent était retiré !",
                ephemeral: true
            })
            return member.roles.remove(role);
        }

        interaction.editReply({
            content: `${user.username} n'a pas ce rôle...`,
            ephemeral: true
        })
        
    },
    options: [
        {
            name: 'role',
            type: 'ROLE',
            required: true,
            description: 'Le rôle à retirer !',
            
        },
        {
            name: 'utilisateur',
            type: 'USER',
            required: true,
            description: 'La personne à qui il faut retirer ce rôle'
        }
    ]
};

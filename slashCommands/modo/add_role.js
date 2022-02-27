export default {
    description: 'Ajouter un role à un utilisateur',
    async run(interaction) {

        const role = interaction.options.getRole('role');
        const user = interaction.options.getUser('utilisateur');
        const member = interaction.guild.members.cache.get(user.id);
        
        await interaction.reply({
            content: 'Action en cours...', 
            ephemeral: true,
            fetchReply: true
        });

        if(member.roles.cache.has(role)) interaction.editReply({
            content: `${user.username} a déjà ce rôle...`,
            ephemeral: true
        });

        member.roles.add(role);

        interaction.editReply({
            content: 'Le rôle a correctement été ajouté !',
            ephemeral: true
        });
        
    },
    options: [
        {
            name: 'role',
            type: 'ROLE',
            required: true,
            description: 'Le rôle à ajouter !',
            
        },
        {
            name: 'utilisateur',
            type: 'USER',
            required: true,
            description: 'La personne à qui il faut ajouter ce rôle'
        }
    ]
};

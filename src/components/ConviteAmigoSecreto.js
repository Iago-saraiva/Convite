import React, { useState } from 'react';

const ConviteAmigoSecreto = () => {
    const [destinatario, setDestinatario] = useState('');
    const [nomeParticipante, setNomeParticipante] = useState('');

    const enviarConvite = (e) => {
        e.preventDefault();

        const assunto = encodeURIComponent('Convite para o Amigo Secreto');
        const corpo = encodeURIComponent(`Olá!\n\nVocê foi convidado para participar do amigo secreto.\nO participante que te tirou foi ${nomeParticipante}.\n\nParticipe e divirta-se!`);

        const mailtoLink = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;

        window.location.href = mailtoLink;

        setDestinatario('');
        setNomeParticipante('');
    };

    return (
        <div>
            <form onSubmit={enviarConvite}>
                <h1>Convite para Amigo Secreto</h1>
                <label htmlFor="destinatario">E-mail do Destinatário:</label>
                <input
                    type="email"
                    id="destinatario"
                    value={destinatario}
                    onChange={(e) => setDestinatario(e.target.value)}
                    required
                />
                <br /><br />

                <label htmlFor="nomeParticipante">Seu Nome:</label>
                <input
                    type="text"
                    id="nomeParticipante"
                    value={nomeParticipante}
                    onChange={(e) => setNomeParticipante(e.target.value)}
                    required
                />
                <br /><br />

                <button type="submit"> <span>Enviar   </span> Convite</button>
            </form>
            <a className='desejos' href="https://iago-saraiva.github.io/lista-desejos/" target="_blank" rel="noopener noreferrer">
        Lista de desejos
        </a>
        </div>
    );
};

export default ConviteAmigoSecreto;

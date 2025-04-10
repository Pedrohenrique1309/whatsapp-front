async function puxarContato(){

    const url = `https://apis-whatsapp-backend.onrender.com/v1/whatsapp/contatos-usuario/11987876567`
    const response = await fetch(url)
    const data = await response.json()
    const contatoEncotrado = []

    data.forEach(function(item){
        contatoEncotrado.push(item['nomeContato'])
    })

    return contatoEncotrado
}

async function puxarConversas(nome){

    const url = `https://apis-whatsapp-backend.onrender.com/v1/whatsapp/conversas-usuario-contato/nome/11987876567?nome=${nome}`
    const response = await fetch(url)
    const data = await response.json()
    const conversaEncotrada = []

    data.forEach(function(item){
        conversaEncotrada.push(item['menssagens'])
    })


    return conversaEncotrada

}

async function  criarContato(contatoEncotrado){

    const contatoPai = document.getElementById('contatoPai')
    contatoPai.className = 'contatoPai'

    const contato = document.createElement('div')
    contato.className = 'contato'

    contato.addEventListener('click', function(){puxarConversas(item.nome)})

    const imagemPerfil = document.createElement('div')
    imagemPerfil.className = 'imagemPerfil'

    const nomePerfil = document.createElement('div')
    nomePerfil.className = 'nomePerfil'

    const h1Nome = document.createElement('h1')

    //adicionando conteúdo na tag
    h1Nome.textContent = contatoEncotrado
    
    //adicionando a tag a classe 
    nomePerfil.appendChild(h1Nome)

    console.log(nomePerfil)

    //adicionando no pai
    contato.appendChild(imagemPerfil)
    contato.appendChild(nomePerfil)
    contatoPai.appendChild(contato)
}

async function exibirContatos() {
    const contatos = await puxarContato()
    contatos.forEach(criarContato)
}

exibirContatos()

async function criarConversa(){


    const areaMenssagens= document.getElementById('areaMenssagens')
    areaMenssagens.className = 'areaMenssagens'

    const paiMenssagem = document.createElement('paiMenssagem')
    paiMenssagem.className = 'paiMenssagem'

    const menssagem = document.createElement('div')
    menssagem.className = 'menssagem'

}
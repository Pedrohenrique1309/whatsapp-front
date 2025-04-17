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

    return data

}

async function  criarContato(contatoEncotrado){
    const base = await puxarContato()
    base.forEach(function(item){
        const contatoPai = document.getElementById('contatoPai')
        contatoPai.className = 'contatoPai'

        const contato = document.createElement('div')
        contato.className = 'contato'

        contato.addEventListener('click', function(){criarConversa(item)})

        const imagemPerfil = document.createElement('div')
        imagemPerfil.className = 'imagemPerfil'

        const nomePerfil = document.createElement('div')
        nomePerfil.className = 'nomePerfil'

        const h1Nome = document.createElement('h1')

        //adicionando conteúdo na tag
        h1Nome.textContent = item
        
        //adicionando a tag a classe 
        nomePerfil.appendChild(h1Nome)

        //adicionando no pai
        contato.appendChild(imagemPerfil)
        contato.appendChild(nomePerfil)
        contatoPai.appendChild(contato)
        })
}





async function criarConversa(nome){

    const areaMenssagens = document.getElementById('areaMenssagens');
    areaMenssagens.className = 'areaMenssagens'
    areaMenssagens.replaceChildren(''); 

    const base = await puxarConversas(nome)
   

    base.menssagens.forEach(function(item){
        item.forEach(function(itemConversa){


        if(itemConversa.sender !== "me"){         

            const paiMenssagem = document.createElement('div')
            paiMenssagem.className = 'paiMenssagem'
        
            const menssagem = document.createElement('div')
            menssagem.className = 'menssagem'
        
            const menssagemH4 = document.createElement('h4')
            menssagemH4.className = 'menssagemH4'
            
            const menssagemP = document.createElement('p')
            menssagemP.className = 'menssagemP'
        
            //adicionando conteúdo na tag
            menssagemP.textContent = itemConversa.time
            menssagemH4.textContent = itemConversa.content
        
            //adicionando a tag no pai
            menssagem.appendChild(menssagemP)
            menssagem.appendChild(menssagemH4)
            paiMenssagem.appendChild(menssagem)
            areaMenssagens.appendChild(paiMenssagem)
            


        }else{

            const paiMenssagemPropria = document.createElement('div')
            paiMenssagemPropria.className = 'paiMenssagemPropria'
        
            const menssagem = document.createElement('div')
            menssagem.className = 'menssagem'
        
            const menssagemH4 = document.createElement('h4')
            menssagemH4.className = 'menssagemH4'
            
            const menssagemP = document.createElement('p')
            menssagemP.className = 'menssagemP'
        
            //adicionando conteúdo na tag
            menssagemP.textContent = itemConversa.time
            menssagemH4.textContent = itemConversa.content
        
        
            //adicionando a tag no pai
            menssagem.appendChild(menssagemP)
            menssagem.appendChild(menssagemH4)
            paiMenssagemPropria.appendChild(menssagem)
            areaMenssagens.appendChild(paiMenssagemPropria)

  

    }

        })
    
    })
    

    
}

criarContato()

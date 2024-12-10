const botao = document.querySelector('.botao');
const idConselho = document.querySelector(".advice-id");
const descricao = document.querySelector(".descricao");

async function getAdvice(){
    try{
    const resposta = await fetch("https://api.adviceslip.com/advice");
    if(!resposta.ok){
        throw new error("Ocorreu um erro ao tentar busvar as informações da API");
    }

    const adviceContent = await resposta.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    idConselho.innerText = adviceId;
    descricao.innerText = adviceText;
    }catch(error){
        console.log("Erro ao tentar buscar as informações da API", error);
    }
}

botao.addEventListener('click', getAdvice);
getAdvice();
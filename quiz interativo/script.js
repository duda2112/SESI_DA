function iniciarQuiz() {

    // Pegar o nome digitado
    const nome = document.getElementById("nome").value;

    // Verificar se o nome foi preenchido
    if (nome == "") {

        alert("Digite seu nome!");

    } else {

        // Salvar o nome
        localStorage.setItem("nome", nome);

        // Ir para o quiz
        window.location.href = "index.html";
    }
}


function verificar() {

    // Pegar o nome do jogador
    const nome = localStorage.getItem("nome");

    // Pegar as respostas
    const resposta1 = document.getElementById("pergunta1").value;
    const resposta2 = document.getElementById("pergunta2").value;
    const resposta3 = document.getElementById("pergunta3").value;
    const resposta4 = document.getElementById("pergunta4").value;
    const resposta5 = document.getElementById("pergunta5").value;
    const resposta6 = document.getElementById("pergunta6").value;
    const resposta7 = document.getElementById("pergunta7").value;
    const resposta8 = document.getElementById("pergunta8").value;
    const resposta9 = document.getElementById("pergunta9").value;
    const resposta10 = document.getElementById("pergunta10").value;
    const resposta11 = document.getElementById("pergunta11").value;
    const resposta12 = document.getElementById("pergunta12").value;
    const resposta13 = document.getElementById("pergunta13").value;
    const resposta14 = document.getElementById("pergunta14").value;
    const resposta15 = document.getElementById("pergunta15").value;
    const resposta16 = document.getElementById("pergunta16").value;
    const resposta17 = document.getElementById("pergunta17").value;
    const resposta18 = document.getElementById("pergunta18").value;
    const resposta19 = document.getElementById("pergunta19").value;
    const resposta20 = document.getElementById("pergunta20").value;

    // Criar os contadores
    let acertos = 0;
    let erros = 0;


    // Conferir as respostas

    if (resposta1 == "b") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta2 == "c") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta3 == "a") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta4 == "b") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta5 == "c") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta6 == "b") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta7 == "a") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta8 == "b") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta9 == "c") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta10 == "a") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta11 == "b") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta12 == "c") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta13 == "b") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta14 == "a") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta15 == "c") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta16 == "b") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta17 == "b") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta18 == "c") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta19 == "a") {
        acertos++;
    } else {
        erros++;
    }

    if (resposta20 == "c") {
        acertos++;
    } else {
        erros++;
    }


    // Mostrar o resultado

    document.getElementById("resultado").innerHTML =
        "Jogador " + nome +
        " acertou " + acertos +
        " perguntas e errou " + erros + " perguntas.";


    // Pegar o ranking salvo

    let ranking = localStorage.getItem("ranking");


    // Se ainda não existe ranking, criar uma lista

    if (ranking == null) {

        ranking = [];

    } else {

        ranking = JSON.parse(ranking);
    }


    // Adicionar o jogador ao ranking

    ranking.push({
        nome: nome,
        acertos: acertos,
        erros: erros
    });


    // Salvar o ranking

    localStorage.setItem("ranking", JSON.stringify(ranking));


    // Mostrar o botão do ranking

    document.getElementById("ranking").style.display = "block";
}


function mostrarRanking() {

    // Pegar o ranking salvo

    let ranking = localStorage.getItem("ranking");


    // Verificar se existem jogadores

    if (ranking == null) {

        document.getElementById("lista").innerHTML =
            "Ainda não existem jogadores.";

        return;
    }


    // Transformar os dados em lista

    ranking = JSON.parse(ranking);


    // Mostrar os jogadores

    for (let i = 0; i < ranking.length; i++) {

        document.getElementById("lista").innerHTML +=

            "<div class='jogador'>" +
            "Jogador: " + ranking[i].nome + "<br>" +
            "Acertos: " + ranking[i].acertos + "<br>" +
            "Erros: " + ranking[i].erros +
            "</div>";
    }
}
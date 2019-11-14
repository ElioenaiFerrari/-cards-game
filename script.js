var btn_jogar = document.getElementById("jogar");

//containers
var caixa_1 = document.getElementById("jogador_1");
var caixa_2 = document.getElementById("jogador_2");

//embaralha as cartas
embaralharCarta = (carta) => {
    carta = Math.floor(Math.random() * 10 + 1);
    return carta;
}

//embralha os naipes
embaralharNaipe = (naipe) => {
    naipe = Math.floor(Math.random() * 4 + 1);
    return naipe;
}

simboloCarta = (naipe) => {

    switch (naipe) {
        case 1:
            return naipe.innerHTML = "&clubs; Paus";
            break;
        case 2:
            return naipe.innerHTML = "&spades; Espadas";
            break;
        case 3:
            return naipe.innerHTML = "&hearts; Copas";
            break;
        case 4:
            return naipe.innerHTML = "&diams; Ouro";
            break;
        default:
            return alert('Valor inválido');
    }


}

btn_jogar.addEventListener("click", () => {
    //containers


    //cartas do primeiro jogador
    var j1carta_1 = document.getElementById("j1_carta1");
    var j1carta_2 = document.getElementById("j1_carta2");

    //cartas do segundo jogador
    var j2carta_1 = document.getElementById("j2_carta1");
    var j2carta_2 = document.getElementById("j2_carta2");


    var j1c1, j1c2, j2c1, j2c2;
    var j1n1, j1n2, j2n1, j2n2;

    //cartas
    j1c1 = embaralharCarta(j1c1);
    j1c2 = embaralharCarta(j1c2);
    j2c1 = embaralharCarta(j2c1);
    j2c2 = embaralharCarta(j2c2);

    //naipes
    j1n1 = embaralharNaipe(j1n1);
    j1n1_logo = simboloCarta(j1n1);

    j1n2 = embaralharNaipe(j1n2);
    j1n2_logo = simboloCarta(j1n2);

    j2n1 = embaralharNaipe(j2n1);
    j2n1_logo = simboloCarta(j2n1);

    j2n2 = embaralharNaipe(j2n2);
    j2n2_logo = simboloCarta(j2n2);



    // j1c1 = 4;
    // j1c2 = 4;
    // j2c1 = 4;
    // j2c2 = 4;

    // //naipes
    // j1n1 = 2;
    // j1n2 = 2;
    // j2n1 = 2;
    // j2n2 = 4;



    //aqui ocorre a mudança do texto das caixas com os respectivos valores
    j1carta_1.innerHTML = `Carta: ${j1c1}, naipe: ${j1n1_logo}`;
    j1carta_2.innerHTML = `Carta: ${j1c2}, naipe: ${j1n2_logo}`;
    j2carta_1.innerHTML = `Carta: ${j2c1}, naipe: ${j2n1_logo}`;
    j2carta_2.innerHTML = `Carta: ${j2c2}, naipe: ${j2n2_logo}`;


    //o container do vencedor ficará verde e do perdedor ficará vermelho
    //em caso de empate ficará cinza para os dois
    if (j1c1 + j1c2 == j2c1 + j2c2) {
        if (j1n1 == j2n1 && j1n1 == j2n2 && j1n2 == j2n1 && j1n2 == j2n2) {
            caixa_1.style.color = "white";
            caixa_2.style.color = "white";

            caixa_1.style.backgroundColor = "gray";
            caixa_2.style.backgroundColor = "gray";

            btn_jogar.innerHTML = "Empate";


        } else if ((j1n1 > j2n1 || j1n1 > j2n2) && (j1n2 > j2n1 || j1n2 > j2n2) ||
            (j1n1 > j2n1 && j1n1 > j2n2) || (j1n2 > j2n1 && j1n2 > j2n2)) {
            caixa_1.style.color = "white";
            caixa_2.style.color = "white";

            caixa_1.style.backgroundColor = "green";
            caixa_2.style.backgroundColor = "red";

            btn_jogar.innerHTML = "Jogador 1 ganhou";


        } else if ((j1n1 < j2n1 || j1n1 < j2n2) && (j1n2 < j2n1 || j1n2 < j2n2) ||
            ((j1n1 < j2n1 && j1n1 < j2n2) || (j1n2 < j2n1 && j1n2 < j2n2))) {
            caixa_1.style.color = "white";
            caixa_2.style.color = "white";

            caixa_1.style.backgroundColor = "red";
            caixa_2.style.backgroundColor = "green";

            btn_jogar.innerHTML = "Jogador 2 ganhou";
        } else {
            caixa_1.style.color = "white";
            caixa_2.style.color = "white";

            caixa_1.style.backgroundColor = "gray";
            caixa_2.style.backgroundColor = "gray";

            btn_jogar.innerHTML = "Empate";
        }

    } else if (j1c1 + j1c2 > j2c1 + j2c2) {
        caixa_1.style.color = "white";
        caixa_2.style.color = "white";

        caixa_1.style.backgroundColor = "green";
        caixa_2.style.backgroundColor = "red";

        btn_jogar.innerHTML = "Jogador 1 ganhou";


    } else if (j1c1 + j1c2 < j2c1 + j2c2) {
        caixa_1.style.color = "white";
        caixa_2.style.color = "white";

        caixa_1.style.backgroundColor = "red";
        caixa_2.style.backgroundColor = "green";

        btn_jogar.innerHTML = "Jogador 2 ganhou";
    }
});


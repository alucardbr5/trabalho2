// Lucas V.M • Yann
function descriptografar() {
    const chave = document.getElementById("key").value;
    const resultado = document.getElementById("resultado");

function chuvaDeDordre() {
    for (let i = 0; i < 20; i++) {
        const img = document.createElement("img");
        img.src = "dordre.png";
        img.classList.add("dordre");

        img.style.left = Math.random() * window.innerWidth + "px";
        img.style.animationDuration = (2 + Math.random() * 3) + "s";
        img.style.width = "60px";

        document.body.appendChild(img);

        img.addEventListener("animationend", () => {
            img.remove();
        });
    }
}
function chuvaAmor() {
    for (let i = 0; i < 20; i++) {
        const img = document.createElement("img");
        img.src = "amor.png";
        img.classList.add("amor");

        img.style.left = Math.random() * window.innerWidth + "px";
        img.style.animationDuration = (2 + Math.random() * 3) + "s";
        img.style.width = "60px";

        document.body.appendChild(img);

        img.addEventListener("animationend", () => {
            img.remove();
        });
    }
}


    if (chave === "ande") {
        resultado.textContent = "💖 Beijos da Nanachi para você, Ande dos santos!";
        chuvaDeDordre();
    } else if (chave === "zzz") {
        resultado.textContent = "💖 Beijos da corin para você, Ande dos santos!";
        chuvaDeDordre();

// Halley • Lucas Davi • Ande67 • Issac • Heitor • isabeli • [ 6 menbros ]
    } else if (chave === "3243") {
        resultado.textContent = "💖 Onde há amor, há luz";
        chuvaAmor();

// Bianka • Samuel • Felipe • Lavínia • Gabriel • Leandro • Yann • Ketelen • Maria Eduarda • [ 9 menbros ]
    } else if (chave === "2132") {
        resultado.textContent = "Você é o pensamento favorito de alguém";
        chuvaAmor();
    }
// Marinny, Larissa, Yasmin, Sophia, Wanessa, Isabelly car., Rayssa, Ryan [ 8 menbros ]
     else if (chave === "2111") {
        resultado.textContent = "Soulmate";
        chuvaAmor();
    }
// Ana Júlia • Guilherme • Isabelly de Oliveira • João Victor • Lucas dos Santos • Marialyce • Neitiany • Rafaella • [ 8 menbros ]
    else if (chave === "13154") {
        resultado.textContent = "Entre bilhões de almas, as nossas se entrelaçaram como se sempre soubessem para onde ir.";
        chuvaAmor();
    }
    else if (chave === "3154") {
        resultado.textContent = "As melhores e mais belas coisas do mundo não podem ser vistas ou mesmo tocadas; elas devem ser sentidas com o coração.";
        chuvaAmor();
    }
// Eloá, Arthur Oliveira, Arthur Gabriel, Emanuelly, Breno, Maria Clara, Ana Clara, Yago [ 7 menbros ]
    else if (chave === "1235 ") {
        resultado.textContent = "Sua Preseça Faz Diferença!";
        chuvaAmor();
    }
    else {
        resultado.textContent = "Erro: Mensagem ou chave inválida.";
    }
} 
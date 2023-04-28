var roleMenuIndex = 0;
var roleTitle = document.querySelector('.role-titulo');
var roleDescription = document.querySelector('.role-descricao-container');
var roleChampionImage = document.querySelector('.personagem-role-image');
var roleIconImage = document.querySelector('.role-image');
var buttonsList = Array.from(document.querySelector('.menu-roles').querySelectorAll('.menu-roles__item, .menu-roles__item__selected'));
var timerInvertal = 5000;

var roleInformations = {
    "ASSASSINO": {
        "titulo": "ASSASSINO",
        "descricao": `<p class="role-descricao"> O assassino no League of Legends é um personagem que se destaca pela sua habilidade em eliminar rapidamente seus adversários. Com uma combinação letal de velocidade, agilidade e dano explosivo, o assassino é capaz de causar um grande impacto no jogo.
                </p>
                <p class="role-descricao">Seu estilo de jogo é geralmente focado em emboscadas e flanqueamento, utilizando sua mobilidade para se aproximar do inimigo e causar dano em curto espaço de tempo. Com a habilidade de eliminar alvos prioritários, o assassino é uma escolha popular para jogadores que buscam dominar o mapa e criar pressão constante em seus adversários.</p>`,
        "imgrole": "./img/role-icons/assassin-silver.png",
        "imgcampeao": "./img/renders/evelyn-render.png"
    },
    "LUTADORES": {
        "titulo": "LUTADORES",
        "descricao": `<p class="role-descricao"> Os lutadores no League of Legends são personagens versáteis que possuem um equilíbrio entre resistência e dano. Com uma combinação de habilidades ofensivas e defensivas, os lutadores podem enfrentar vários inimigos ao mesmo tempo, enquanto causam dano significativo.
                </p>
                <p class="role-descricao"> Seu estilo de jogo é geralmente focado em combate de curta distância, utilizando sua força física para dominar os adversários e causar impacto nas lutas em equipe. Com habilidades que podem aumentar sua resistência e regeneração, os lutadores são escolhas populares para jogadores que buscam dominar a linha de frente e garantir a vantagem em batalhas prolongadas.</p>`,
        "imgrole": "./img/role-icons/fighter-silver.png",
        "imgcampeao": "./img/renders/riven-render.png"
    },
    "MAGOS": {
        "titulo": "MAGOS",
        "descricao": `<p class="role-descricao"> Os magos no League of Legends são personagens especializados em causar dano mágico à distância. Com habilidades que infligem dano em área e possuem efeitos diversos, os magos podem causar grande impacto no jogo mesmo sem entrar em combate direto.
                </p>
                <p class="role-descricao"> Seu estilo de jogo é geralmente focado em posição e estratégia, utilizando seu alcance para controlar o mapa e infligir dano constante em seus adversários. Com habilidades que podem atordoar, silenciar ou enraizar seus alvos, os magos são escolhas populares para jogadores que buscam causar desordem na equipe inimiga e garantir a vitória através do controle de objetivos.</p>`,
        "imgrole": "./img/role-icons/mage-silver.png",
        "imgcampeao": "./img/renders/ahri-render.png"
    },
    "ATIRADORES": {
        "titulo": "ATIRADORES",
        "descricao": `<p class="role-descricao"> Os atiradores no League of Legends são personagens especializados em causar dano físico à distância. Com ataques básicos rápidos e habilidades que aumentam seu dano e velocidade de ataque, os atiradores podem causar grande impacto no jogo.
                </p>
                <p class="role-descricao"> Seu estilo de jogo é geralmente focado em posição e posicionamento, mantendo uma distância segura de seus adversários enquanto infligem dano constante em seus alvos. Com habilidades que podem aumentar sua mobilidade e causar dano em área, os atiradores são escolhas populares para jogadores que buscam controlar o mapa e garantir a vantagem em batalhas prolongadas.</p>`,
        "imgrole": "./img/role-icons/adc-silver.png",
        "imgcampeao": "./img/renders/xayah-render.png"
    },
    "SUPORTE": {
        "titulo": "SUPORTE",
        "descricao": `
                <p class="role-descricao"> Os suportes no League of Legends são personagens especializados em fornecer auxílio e proteção a seus aliados. Com habilidades que podem curar, conceder escudos e controlar a equipe inimiga, os suportes são fundamentais para garantir a sobrevivência e o sucesso de seus aliados.
                </p>
                <p class="role-descricao"> Seu estilo de jogo é geralmente focado em posição e estratégia, utilizando suas habilidades de suporte para garantir a vantagem em lutas em equipe e controlar objetivos. Com habilidades que podem atordoar, silenciar ou enraizar seus adversários, os suportes são escolhas populares para jogadores que buscam garantir a vantagem da equipe e proteger seus aliados.</p>`,
        "imgrole": "./img/role-icons/support-silver.png",
        "imgcampeao": "./img/renders/lulu-render.png"
    },
    "TANQUES": {
        "titulo": "TANQUES",
        "descricao": `<p class="role-descricao"> Os tanques no League of Legends são personagens especializados em resistência e controle de grupo. Com habilidades que aumentam sua durabilidade e aguentam o dano inimigo, os tanques são essenciais para proteger seus aliados e dominar a linha de frente.
                </p>
                <p class="role-descricao"> Seu estilo de jogo é geralmente focado em posição e controle, utilizando suas habilidades para interromper a equipe inimiga e garantir a vantagem em lutas em equipe. Com habilidades que podem atordoar, empurrar ou enraizar seus adversários, os tanques são escolhas populares para jogadores que buscam garantir a sobrevivência de seus aliados e dominar o campo de batalha.</p>`,
        "imgrole": "./img/role-icons/tank-silver.png",
        "imgcampeao": "./img/renders/xayah-render.png"
    }
};

var championsList;
var cardsContainer = document.querySelector('.cards-list');

GetData(getAllUrl).then(data => {
    championsList = Object.values(data.data);;
    console.log(championsList);
    CreateCard(championsList, cardsContainer);
});


function CreateCard(result, container) {
    result.forEach(element => {
        var card = `<li class="card">
        <img class="card__image"
          src="${getImageUrl + element.id + "_0.jpg"}"></img>
        <div class="card__rodape">
          <h3 class="rodape__nome-campeao">${element.name}</h3>
        </div>
      </li>`;
        container.insertAdjacentHTML('beforeend', card);
    });
}

ApplyRoleMenuButtonFunction();
StartRoleMenuMovement();
setInterval(StartRoleMenuMovement, timerInvertal);

function StartRoleMenuMovement() {
    buttonsList[roleMenuIndex].click();
    buttonsList[roleMenuIndex].classList.replace('menu-roles__item', 'menu-roles__item__selected');
    roleMenuIndex++;

    if (roleMenuIndex >= Object.keys(roleInformations).length)
        roleMenuIndex = 0;

    timerInvertal = 5000;
}

function ApplyRoleMenuButtonFunction() {
    buttonsList.forEach(element => {
        element.addEventListener('click', function (event) {
            timerInvertal = 10000;
            SetRoleDetails(buttonsList.indexOf(element));
            ClearRoleMenusItem(buttonsList);
            event.target.parentNode.classList.replace('menu-roles__item', 'menu-roles__item__selected');
        });
    });
}

function ClearRoleMenusItem(menu) {
    menu.forEach(element => {
        if (element.classList.contains('menu-roles__item__selected')) {
            element.classList.replace('menu-roles__item__selected', 'menu-roles__item');
        }
    });
}

function SetRoleDetails(value) {
    if (value == null || value >= Object.keys(roleInformations).length || value < 0)
        roleMenuIndex = 0;
    else
        roleMenuIndex = value;

    var roleObject = Object.values(roleInformations)[roleMenuIndex];
    roleTitle.textContent = roleObject.titulo;
    roleDescription.innerHTML = roleObject.descricao;
    roleChampionImage.src = roleObject.imgcampeao;
    roleIconImage.src = roleObject.imgrole;
}












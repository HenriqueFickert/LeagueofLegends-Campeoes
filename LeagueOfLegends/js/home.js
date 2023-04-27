var roleMenuIndex = 0;
var roleTitle = document.querySelector('.role-titulo');
var roleDescription = document.querySelector('.role-texto-container');
var roleChampionImage = document.querySelector('.personagem-role-image');
var roleIconImage = document.querySelector('.role-image');
var roleMenuList = document.querySelector('.menu-roles');

var roleInformations = {
    "ASSASSINO": {
        "titulo": "ASSASSINO",
        "descricao": `<p class="role-descricao"> Tanques são um tipo de personagem em League of Legends que são conhecidos por serem muito resistentes e capazes de suportar uma grande quantidade de dano. Eles geralmente têm uma grande quantidade de pontos de vida e são capazes de aumentar sua resistência a ataques inimigos usando itens e habilidades. Além disso, tanques geralmente têm habilidades que lhes permitem interromper as habilidades do adversário e proteger seus aliados, tornando-os uma escolha popular para jogadores que desejam desempenhar um papel defensivo em sua equipe.
                </p>
                <p class="role-descricao"> No entanto, apesar de sua resistência, os tanques geralmente não causam tanto dano quanto outros tipos de personagem em League of Legends, como os lutadores ou assassinos. Eles são projetados principalmente para proteger seus aliados e controlar o campo de batalha, em vez de causar dano direto aos inimigos. Como resultado, eles geralmente são mais eficazes quando jogados em uma equipe com outros tipos de personagens que podem causar dano suficiente para eliminar os inimigos enquanto os tanques mantêm a linha de frente e protegem a equipe.</p>`,
        "imgrole": "../img/role-icons/assassin-silver.png",
        "imgcampeao": "../img/renders/evelyn-render.png"
    },
    "LUTADORES": {
        "titulo": "LUTADORES",
        "descricao": `<p class="role-descricao"> Tanques são um tipo de personagem em League of Legends que são conhecidos por serem muito resistentes e capazes de suportar uma grande quantidade de dano. Eles geralmente têm uma grande quantidade de pontos de vida e são capazes de aumentar sua resistência a ataques inimigos usando itens e habilidades. Além disso, tanques geralmente têm habilidades que lhes permitem interromper as habilidades do adversário e proteger seus aliados, tornando-os uma escolha popular para jogadores que desejam desempenhar um papel defensivo em sua equipe.
                </p>
                <p class="role-descricao"> No entanto, apesar de sua resistência, os tanques geralmente não causam tanto dano quanto outros tipos de personagem em League of Legends, como os lutadores ou assassinos. Eles são projetados principalmente para proteger seus aliados e controlar o campo de batalha, em vez de causar dano direto aos inimigos. Como resultado, eles geralmente são mais eficazes quando jogados em uma equipe com outros tipos de personagens que podem causar dano suficiente para eliminar os inimigos enquanto os tanques mantêm a linha de frente e protegem a equipe.</p>`,
        "imgrole": "../img/role-icons/fighter-silver.png",
        "imgcampeao": "../img/renders/riven-render.png"
    },
    "MAGOS": {
        "titulo": "MAGOS",
        "descricao": `<p class="role-descricao"> Tanques são um tipo de personagem em League of Legends que são conhecidos por serem muito resistentes e capazes de suportar uma grande quantidade de dano. Eles geralmente têm uma grande quantidade de pontos de vida e são capazes de aumentar sua resistência a ataques inimigos usando itens e habilidades. Além disso, tanques geralmente têm habilidades que lhes permitem interromper as habilidades do adversário e proteger seus aliados, tornando-os uma escolha popular para jogadores que desejam desempenhar um papel defensivo em sua equipe.
                </p>
                <p class="role-descricao"> No entanto, apesar de sua resistência, os tanques geralmente não causam tanto dano quanto outros tipos de personagem em League of Legends, como os lutadores ou assassinos. Eles são projetados principalmente para proteger seus aliados e controlar o campo de batalha, em vez de causar dano direto aos inimigos. Como resultado, eles geralmente são mais eficazes quando jogados em uma equipe com outros tipos de personagens que podem causar dano suficiente para eliminar os inimigos enquanto os tanques mantêm a linha de frente e protegem a equipe.</p>`,
        "imgrole": "../img/role-icons/mage-silver.png",
        "imgcampeao": "../img/renders/ahri-render.png"
    },
    "ATIRADORES": {
        "titulo": "ATIRADORES",
        "descricao": `<p class="role-descricao"> Tanques são um tipo de personagem em League of Legends que são conhecidos por serem muito resistentes e capazes de suportar uma grande quantidade de dano. Eles geralmente têm uma grande quantidade de pontos de vida e são capazes de aumentar sua resistência a ataques inimigos usando itens e habilidades. Além disso, tanques geralmente têm habilidades que lhes permitem interromper as habilidades do adversário e proteger seus aliados, tornando-os uma escolha popular para jogadores que desejam desempenhar um papel defensivo em sua equipe.
                </p>
                <p class="role-descricao"> No entanto, apesar de sua resistência, os tanques geralmente não causam tanto dano quanto outros tipos de personagem em League of Legends, como os lutadores ou assassinos. Eles são projetados principalmente para proteger seus aliados e controlar o campo de batalha, em vez de causar dano direto aos inimigos. Como resultado, eles geralmente são mais eficazes quando jogados em uma equipe com outros tipos de personagens que podem causar dano suficiente para eliminar os inimigos enquanto os tanques mantêm a linha de frente e protegem a equipe.</p>`,
        "imgrole": "../img/role-icons/adc-silver.png",
        "imgcampeao": "../img/renders/xayah-render.png"
    },
    "SUPORTE": {
        "titulo": "SUPORTE",
        "descricao": `
                <p class="role-descricao"> Os suportes são responsáveis por ajudar o time a conquistar a
                vitória, fornecendo utilidade, cura, proteção e controle de multidão para seus
                companheiros de equipe. Eles também são responsáveis por monitorar o mapa e fornecer
                visão com sentinelas e itens de visão.
                </p>
                <p class="role-descricao"> Normalmente jogam ao lado do atirador, garantindo que
                ele possa se concentrar
                em causar dano enquanto o suporte cuida da proteção. Alguns
                exemplos de campeões populares de suporte incluem Soraka, Thresh, Sona e Lulu.</p>`,
        "imgrole": "../img/role-icons/support-silver.png",
        "imgcampeao": "../img/renders/lulu-render.png"
    },
    "TANQUES": {
        "titulo": "TANQUES",
        "descricao": `<p class="role-descricao"> Tanques são um tipo de personagem em League of Legends que são conhecidos por serem muito resistentes e capazes de suportar uma grande quantidade de dano. Eles geralmente têm uma grande quantidade de pontos de vida e são capazes de aumentar sua resistência a ataques inimigos usando itens e habilidades. Além disso, tanques geralmente têm habilidades que lhes permitem interromper as habilidades do adversário e proteger seus aliados, tornando-os uma escolha popular para jogadores que desejam desempenhar um papel defensivo em sua equipe.
                </p>
                <p class="role-descricao"> No entanto, apesar de sua resistência, os tanques geralmente não causam tanto dano quanto outros tipos de personagem em League of Legends, como os lutadores ou assassinos. Eles são projetados principalmente para proteger seus aliados e controlar o campo de batalha, em vez de causar dano direto aos inimigos. Como resultado, eles geralmente são mais eficazes quando jogados em uma equipe com outros tipos de personagens que podem causar dano suficiente para eliminar os inimigos enquanto os tanques mantêm a linha de frente e protegem a equipe.</p>`,
        "imgrole": "../img/role-icons/tank-silver.png",
        "imgcampeao": "../img/renders/xayah-render.png"
    }
};

SetRoleDetails(3);

function SetRoleDetails(value) {
    if (value == null || value > Object.keys(roleInformations).length || value < 0)
        roleMenuIndex = 0;
    else
        roleMenuIndex = value;

    var ableMenus = roleMenuList.querySelectorAll('.menu-roles__item');
    var selectedMenus = roleMenuList.querySelectorAll('.menu-roles__item__selected');

    console.log(ableMenus);
    console.log(selectedMenus);

    var roleObject = Object.values(roleInformations)[roleMenuIndex];
    roleTitle.textContent = roleObject.titulo;
    roleDescription.innerHTML += roleObject.descricao;
    roleChampionImage.src = roleObject.imgcampeao;
    roleIconImage.src = roleObject.imgrole;
}

function SelectMenuItem(menu, selectedtag, normaltag, index) {

}
async function GetData(url) {
    try {
        const response = await fetch(url);
        const skins = await response.json(); return skins;
    } catch (error) {
        console.error("Erro ao realizar a requisição: ", error);
    }
}
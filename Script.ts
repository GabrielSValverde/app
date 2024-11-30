
const likeButton = document.getElementById("like-button")!;
const favoriteButton = document.getElementById("favorite-button")!;

let likes = 0;
let isFavorited = false;


likeButton.addEventListener("click", () => {
    likes++;
    alert(`Você curtiu este vídeo! Total de curtidas: ${likes}`);
});


favoriteButton.addEventListener("click", () => {
    isFavorited = !isFavorited;
    favoriteButton.textContent = isFavorited ? "★ Favoritado" : "★ favoritos";
    alert(isFavorited ? "Adicionado aos favoritos!" : "Removido dos favoritos!");
});

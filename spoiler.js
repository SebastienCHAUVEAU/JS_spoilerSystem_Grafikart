/*********************
V1 avec la création d'un bouton manuellement 
**********************/

let buttonSpoiler = document.querySelector (".spoiler-btn");

let spoilerContent = document.querySelector(".spoiler-content");

buttonSpoiler.addEventListener("click", function (){
  spoilerContent.classList.add("visible");
  this.remove();
 
}) 


/*****************
        V2 : pour ne plus avoir à créer un bouton à chaque fois
******************/

let hiddenContents = document.querySelectorAll(".hidden");

createSpoilerButton = (toHidden) => {
  /*On créer la span qui aura le contenu HTML et la classe qui fait disparaitre */
  let hiddenSpan = document.createElement("span");
  hiddenSpan.className = "hidden-content";
  hiddenSpan.innerHTML = toHidden.innerHTML; //contenu intégré dans la span
  
  /*On créer le boutton */
  let hiddenButton = document.createElement("button");
  hiddenButton.textContent= "Afficher le spoiler";
  toHidden.appendChild(hiddenButton);
  
  /*Ajout des éléments au DOM */
  toHidden.innerHTML = ""; // on nettoie le contenant d'origine
  toHidden.appendChild(hiddenButton);
  toHidden.appendChild(hiddenSpan);
  
  /*Mise en place de l'event */
  hiddenButton.addEventListener ("click", () => {
    hiddenButton.remove();
    hiddenSpan.classList.add("visible");
  })
}

/* Boucle pour cibler tous les éléments à spoiler de la classe .hidden*/
for (let i=0 ; i < hiddenContents.length ; i++){
  createSpoilerButton(hiddenContents[i]);
}


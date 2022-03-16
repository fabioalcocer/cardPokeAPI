
document.addEventListener('DOMContentLoaded', () => {
  const random = getRandomInt(1,151)
  fetchData(random)
})

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const fetchData = async (id) => {
  try {
    
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    const data = await res.json()

    const pokemon = {
      name: data.forms[0].name,
      hp: data.stats[0].base_stat,
      img: data.sprites.other.dream_world.front_default,
      exp: data.base_experience,
      attack: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      attackEsp: data.stats[3].base_stat
    }

    fillCard(pokemon)

  } catch (error) {
    console.log(error);
  } 
}

const fillCard = (pokemon) => {
  const main = document.querySelector(".main")
  const template = document.querySelector("#templateCard").content
  const clone = template.cloneNode(true)
  const fragment = document.createDocumentFragment()

  clone.querySelector(".body__img").src = pokemon.img
  clone.querySelector(".text__title").innerHTML = `${pokemon.name}<span>${pokemon.hp} Hp</span>`
  clone.querySelector(".text__exp").textContent = pokemon.exp + " Exp"
  clone.querySelector(".text__exp").textContent = pokemon.exp + " Exp"
  clone.querySelector(".ataque").textContent = pokemon.attack + "K"
  clone.querySelector(".ataque__esp").textContent = pokemon.attackEsp + "K"
  clone.querySelector(".defensa").textContent = pokemon.defensa + "K"

  fragment.appendChild(clone)
  main.appendChild(fragment)
}

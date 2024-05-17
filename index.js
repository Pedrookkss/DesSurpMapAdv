let timePokemon = [
    ["Pikachu", " Lv2"],
    ["Charmander", " Lv2"]
]

let pikachu = timePokemon[0][0] + timePokemon[0][1]
let charmander = timePokemon[1][0] + timePokemon[1][1]

let slot = 2

switch(slot){
case 1:
console.log(pikachu + " cadastrado com sucesso!")
break
case 2:
console.log(charmander + " cadastrado com sucesso!")
break
}
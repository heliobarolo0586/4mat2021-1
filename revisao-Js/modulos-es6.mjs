//importato módulos 

//Quando um item é exportado com export, na importação 
//deve-se usar as chaves(desestruturação)
import { numeros } from './includes/dados.mjs'

//import {somaVet,quadradoVet} from './includes/func1.mjs' 

//Na importação, pode-se trazer apenas aquilo que será usado efetivamente
import {quadradoVet} from './includes/func1.mjs' 



//Quando o arquivo exporta algo *export default*, o import NÃO usa chaves
import dobraVet from './includes/func2.mjs'

//console.log(somaVet(numeros)) 
console.log(quadradoVet(numeros))
console.log(dobraVet(numeros))
    
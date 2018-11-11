import Battle from './interfaces/battle'
import container from './config/ioc_config'
import SERVICE_IDENTIFIER from './constants/identifiers'

// Composition root
let epicBattle = container.get<Battle>(SERVICE_IDENTIFIER.BATTLE)

console.log(epicBattle.fight())

let epicBattle2 = container.getNamed<Battle>(
  SERVICE_IDENTIFIER.BATTLE,
  'EpicBattle2'
)

console.log(epicBattle2.fight())

import { EpicBattle2 } from './entities'
import Warrior from './interfaces/warrior'
import TAG from './constants/tags'

let warrior1 = container.getNamed<Warrior>(
  SERVICE_IDENTIFIER.WARRIOR,
  TAG.JAPANESE
)
let epicBattle2_2 = new EpicBattle2(warrior1, warrior1)

console.log(epicBattle2_2.fight())

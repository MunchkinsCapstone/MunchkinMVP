class Card {
  constructor(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.discard = this.discard.bind(this);
  }

  discard() {
    decks[this.deck].graveYard.push(this);
  }
}

class Monster extends Card {
  constructor(name, imageUrl, level, treasures, badStuff) {
    super(name, imageUrl);
    this.level = level;
    this.treasures = treasures;
    this.type = 'Monster';
    this.badStuff = badStuff;
    this.deck = 'doors';
    this.buffs = [];
  }

  get allBuffs() {
    return this.buffs.reduce((total, buff) => total + buff.bonus, 0);
  }

  get total() {
    return this.level + this.allBuffs;
  }

  die() {
    this.discard();
  }
}

class Buff extends Card {
  constructor(name, imageUrl, effect, remove) {
    super(name, imageUrl);
    this.effect = effect;
    this.remove = remove;
  }
}

class Modifier extends Buff {
  constructor(name, imageUrl, effect, remove) {
    super(name, imageUrl, effect, remove);
    this.type = 'Modifier';
    this.deck = 'doors';
  }
}

class Equipment extends Buff {
  constructor(name, imageUrl, bodyPart, effect, remove) {
    super(name, imageUrl, effect, remove);
    this.bodyPart = bodyPart;
    this.type = 'Equipment';
    this.deck = 'treasures';
  }
}

class Spell extends Buff {
  constructor(name, imageUrl, effect) {
    super(name, imageUrl, effect, null);
    this.type = 'Spell';
    this.deck = 'treasures';
  }
}

class Class extends Buff {
  constructor(name, imageUrl, effect, remove) {
    super(name, imageUrl, effect, remove);
    this.type = 'Class';
    this.deck = 'doors';
    this.bonus = 0;
  }
}

class Race extends Buff {
  constructor(name, imageUrl, effect, remove) {
    super(name, imageUrl, effect, remove);
    this.type = 'Race';
    this.deck = 'doors';
    this.bonus = 0;
  }
}

function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

class Deck {
  constructor(cards) {
    this.cards = cards;
    this.graveYard = [];
    this.draw = this.draw.bind(this);
    this.shuffleCards = this.shuffleCards.bind(this);
    this.restock = this.restock.bind(this);
  }

  draw() {
    if (!this.cards.length) this.restock();
    return this.cards.shift();
  }

  shuffleCards() {
    this.cards = shuffle(this.cards);
  }

  restock() {
    this.cards = this.cards.concat(shuffle(this.graveYard));
  }
}

//-----------------------------------------------------------------------//
//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-CARDS-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-//
//-----------------------------------------------------------------------//

const monsters = [
  new Monster(
    'Slime',
    'https://upload.wikimedia.org/wikipedia/en/1/13/Slime_%28Dragon_Quest%29.jpg',
    2,
    1,
    player => {}
  ),
  new Monster(
    'Skeleton',
    'https://vignette.wikia.nocookie.net/dragonquest/images/8/8c/DQVIII_-_Skeleton_soldier.png/revision/latest?cb=20151212013303',
    3,
    1,
    player => {}
  ),
  new Monster(
    'Dragon',
    'https://dragon-quest.org/images/thumb/e/e5/DQ_Green_Dragon.png/350px-DQ_Green_Dragon.png',
    20,
    5,
    player => {
      player.die();
    }
  ),
  new Monster(
    'Rat',
    'https://vignette.wikia.nocookie.net/dragonquest/images/2/29/DQVDS_-_Fat_rat.png/revision/latest?cb=20160731061630',
    14,
    4,
    player => {}
  ),
  new Monster('3,872', '3872Orcs.jpeg', 10, 3, player => {}),
  new Monster('Amazon', 'Amazon.jpeg', 8, 2, player => {}),
  new Monster('Bigfoot', 'Bigfoot.jpeg', 12, 3, player => {}),
  new Monster('Bullrog', 'Bullrog.jpeg', 18, 5, player => {}),
  new Monster('Crabs', 'Crabs.jpeg', 1, 1, player => {}),
  new Monster('Drooling Slime', 'DroolingSlime.jpeg', 1, 1, player => {}),
  new Monster('Face Sucker', 'FaceSucker.jpeg', 8, 2, player => {}),
  new Monster('Floating Nose', 'FloatingNose.jpeg', 10, 3, player => {}),
  new Monster('Flying Frogs', 'FlyingFrogs.jpeg', 2, 1, player => {}),
  new Monster('Gazebo', 'Gazebo.jpeg', 8, 2, player => {}),
  new Monster(
    'Gelatinous Octahedron',
    'GelatinousOctahedron.jpeg',
    2,
    1,
    player => {}
  ),
  new Monster('Ghoulfiends', 'Ghoulfiends.jpeg', 8, 2, player => {}),
  new Monster('Harpies', 'Harpies.jpeg', 4, 2, player => {}),
  new Monster('Hippogriff', 'Hippogriff.jpeg', 16, 4, player => {}),
  new Monster(
    'Insurance Salesman',
    'InsuranceSalesman.jpeg',
    14,
    4,
    player => {}
  ),
  new Monster('King Tut', 'KingTut.jpeg', 16, 4, player => {}),
  new Monster('Lame Goblin', 'LameGoblin.jpeg', 1, 1, player => {}),
  new Monster(
    'Large Angry Chicken',
    'LargeAngryChicken.jpeg',
    2,
    1,
    player => {}
  ),
  new Monster('Lawyers', 'Lawyers.jpeg', 6, 2, player => {}),
  new Monster('Leperchaun', 'Leperchaun.jpeg', 4, 2, player => {}),
  new Monster('Maul Rat', 'MaulRat.jpeg', 1, 1, player => {}),
  new Monster('Mr. Bones', 'MrBones.jpeg', 2, 1, player => {}),
  new Monster('Net Troll', 'NetTroll.jpeg', 10, 3, player => {}),
  new Monster('Pit Bull', 'PitBull.jpeg', 2, 1, player => {}),
  new Monster('Platycore', 'Platycore.jpeg', 6, 2, player => {}),
  new Monster('Plutonium Dragon', 'PlutoniumDragon.jpeg', 20, 5, player => {}),
  new Monster('Potted Plant', 'PottedPlant.jpeg', 1, 2, player => {}),
  new Monster('Pukachu', 'Pukachu.jpeg', 6, 2, player => {}),
  new Monster('Platycore', 'Platycore.jpeg', 6, 2, player => {})
];

const modifiers = [
  new Modifier(
    'Ancient',
    '+10 to monster',
    monster => {
      monster.level += 10;
    },
    monster => {
      monster.level -= 10;
    }
  ),
  new Modifier(
    'Baby',
    '-5 to monster (minimum 1)',
    monster => {
      monster.shrinkage = Math.min(monster.level - 1, 5);
      monster.level -= monster.shrinkage;
    },
    monster => {
      monster.level += monster.shrinkage;
    }
  ),
  new Modifier(
    'Intelligent',
    '+5 to monster',
    monster => {
      monster.level += 5;
    },
    monster => {
      monster.level -= 5;
    }
  )
];

const equipments = [
  new Equipment(
    'Boots',
    'You wear these on yer feet',
    'feet',
    user => {
      user.bonus += 2;
    },
    user => {
      user.bonus -= 2;
    }
  ),
  new Equipment('Sandals of Protection', '', 'feet', 2),
  new Equipment('Hat with a feather in it', '', 'head', 2),
  new Equipment('Shiny Armor', '', 'feet', 2)
];

const races = [
  new Race(
    'Dwarf',
    'Dwarf1.jpeg',
    player => {
      player.maxInventory = 6;
    },
    player => {
      player.maxInventory = 5;
    }
  ),
  new Race(
    'Dwarf',
    'Dwarf2.jpeg',
    player => {
      player.maxInventory = 6;
    },
    player => {
      player.maxInventory = 5;
    }
  ),
  new Race(
    'Dwarf',
    'Dwarf3.jpeg',
    player => {
      player.maxInventory = 6;
    },
    player => {
      player.maxInventory = 5;
    }
  ),
  new Race(
    'Elf',
    'Elf1.jpeg',
    player => {
      player.run++;
    },
    player => {
      player.run--;
    }
  ),
  new Race(
    'Elf',
    'Elf2.jpeg',
    player => {
      player.run++;
    },
    player => {
      player.run--;
    }
  ),
  new Race(
    'Elf',
    'Elf3.jpeg',
    player => {
      player.run++;
    },
    player => {
      player.run--;
    }
  ),
  new Race(
    'Halfling',
    'Halfling1.jpeg',
    player => {
      //
    },
    player => {
      //
    }
  ),
  new Race(
    'Halfling',
    'Halfling2.jpeg',
    player => {
      //
    },
    player => {
      //
    }
  ),
  new Race(
    'Halfling',
    'Halfling3.jpeg',
    player => {
      //
    },
    player => {
      //
    }
  )
];

const classes = [
  new Class('Cleric', 'Cleric1.jpeg'),
  new Class('Cleric', 'Cleric2.jpeg'),
  new Class('Cleric', 'Cleric3.jpeg'),
  new Class('Thief', 'Thief1.jpeg'),
  new Class('Thief', 'Thief2.jpeg'),
  new Class('Thief', 'Thief3.jpeg'),
  new Class('Warrior', 'Warrior1.jpeg'),
  new Class('Warrior', 'Warrior2.jpeg'),
  new Class('Warrior', 'Warrior3.jpeg'),
  new Class('Wizard', 'Wizard1.jpeg'),
  new Class('Wizard', 'Wizard2.jpeg'),
  new Class('Wizard', 'Wizard3.jpeg')
];

const spells = [
  new Spell('1,000 Gold Pieces', '1000GoldPieces.jpeg', user => user.levelUp()),
  new Spell('Boil An Anthill', 'BoilAnAnthill.jpeg', user => user.levelUp()),
  new Spell('Bribe GM With Food', 'BribeGMWithFood.jpeg', user =>
    user.levelUp()
  ),
  new Spell('Convenient Addition Error', 'ConvenientAdditionError.jpeg', user =>
    user.levelUp()
  )
  //   new Spell('Cotion of Ponfusion', 'CotionOfPonfusion.jpeg', target => {}),
];

const doors = new Deck(
  monsters
    .concat(modifiers)
    .concat(races)
    .concat(classes)
);
const treasures = new Deck(equipments.concat(spells));

const decks = {
  doors,
  treasures
};

module.exports = {
  Deck,
  Race,
  Class,
  Equipment,
  monsters,
  equipments,
  classes,
  races,
  spells,
  modifiers,
  doors,
  treasures,
  shuffle
};

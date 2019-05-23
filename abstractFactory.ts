const factoryType = {
  swordsman: "swordsman",
  wizard: "wizard"
};

class IHeroFactory {
  createAbilities() {}

  createEquipment() {}

  createSkills() {}
}

class SwordsmanFactory extends IHeroFactory {
  createAbilities() {
    return new SwordsmanAbility();
  }

  createEquipment() {
    return new SwordsmanEquipment();
  }

  createSkills() {
    return new SwordsmanSkill();
  }
}

class WizardFactory extends IHeroFactory {
  createAbilities() {
    return new WizardAbilitiy();
  }

  createEquipment() {
    return new WizardEquipment();
  }

  createSkills() {
    return new WizardSkill();
  }
}

class FactoryMaker {
  static getHeroFactory(type) {
    var factory = null;
    switch (type) {
      case factoryType.wizard:
        factory = new WizardFactory();
        break;
      case factoryType.swordsman:
        factory = new SwordsmanFactory();
        break;
    }
    return factory;
  }
}

class IAbstractSkill {
  getMainSkill() {}
  getSecondarySkill() {}
}

class SwordsmanSkill extends IAbstractSkill {
  public _mainSkillName: string;
  public _secondarySkillType: string;
  constructor() {
    super();
    this._mainSkillName = "slash";
    this._secondarySkillType = "berserk";
  }

  getMainSkill() {
    return this._mainSkillName;
  }

  getSecondarySkill() {
    return this._secondarySkillType;
  }
}

class WizardSkill extends IAbstractSkill {
  public _mainSkillName: string;
  public _secondarySkillType: string;
  constructor() {
    super();
    this._mainSkillName = "fireball";
    this._secondarySkillType = "tornado";
  }

  getMainSkill() {
    return this._mainSkillName;
  }

  getSecondarySkill() {
    return this._secondarySkillType;
  }
}

class IAbstractEquipment {
  getEquipment() {}
}

class SwordsmanEquipment extends IAbstractEquipment {
  public _equipment: {};
  constructor() {
    super();
    this._equipment = {
      type: "Robe of the Chaos",
      armor: 20,
      resistance: 100
    };
  }

  getEquipment() {
    return this._equipment;
  }
}

class WizardEquipment extends IAbstractEquipment {
  public _equipment: {};
  constructor() {
    super();
    this._equipment = {
      type: "Wrath of the Lich King",
      armor: 3,
      extraIntelligence: 5,
      extraMP: 100
    };
  }

  getEquipment() {
    return this._equipment;
  }
}

class IAbstractAbility {
  getAbilities() {}
}

class SwordsmanAbility extends IAbstractAbility {
  public _heroProperties: {};
  constructor() {
    super();
    this._heroProperties = {
      strength: 10,
      agility: 5,
      extraPower: true,
      extraPowerLevel: 1
    };
  }
  getAbilities() {
    return this._heroProperties;
  }
}

class WizardAbilitiy extends IAbstractAbility {
  public _heroProperties: {};
  constructor() {
    super();
    this._heroProperties = {
      strength: 10,
      intelligence: 30,
      agility: 5
    };
  }

  getAbilities() {
    return this._heroProperties;
  }
}

(function run() {
  let wizardFactory = FactoryMaker.getHeroFactory(factoryType.wizard),
    swordsmanFactory = FactoryMaker.getHeroFactory(factoryType.swordsman);

  let wiz = {
    abilities: wizardFactory.createAbilities(),
    equipment: wizardFactory.createEquipment(),
    skills: wizardFactory.createSkills()
  };

  let swrd = {
    abilities: swordsmanFactory.createAbilities(),
    equipment: swordsmanFactory.createEquipment(),
    skills: swordsmanFactory.createSkills()
  };

  let testHero = {
    abilities: wizardFactory.createAbilities(),
    equipment: wizardFactory.createEquipment(),
    skills: swordsmanFactory.createSkills()
  };

  console.log(wiz, swrd, testHero);
})();

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var factoryType = {
    swordsman: "swordsman",
    wizard: "wizard"
};
var IHeroFactory = /** @class */ (function () {
    function IHeroFactory() {
    }
    IHeroFactory.prototype.createAbilities = function () { };
    IHeroFactory.prototype.createEquipment = function () { };
    IHeroFactory.prototype.createSkills = function () { };
    return IHeroFactory;
}());
var SwordsmanFactory = /** @class */ (function (_super) {
    __extends(SwordsmanFactory, _super);
    function SwordsmanFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwordsmanFactory.prototype.createAbilities = function () {
        return new SwordsmanAbility();
    };
    SwordsmanFactory.prototype.createEquipment = function () {
        return new SwordsmanEquipment();
    };
    SwordsmanFactory.prototype.createSkills = function () {
        return new SwordsmanSkill();
    };
    return SwordsmanFactory;
}(IHeroFactory));
var WizardFactory = /** @class */ (function (_super) {
    __extends(WizardFactory, _super);
    function WizardFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardFactory.prototype.createAbilities = function () {
        return new WizardAbilitiy();
    };
    WizardFactory.prototype.createEquipment = function () {
        return new WizardEquipment();
    };
    WizardFactory.prototype.createSkills = function () {
        return new WizardSkill();
    };
    return WizardFactory;
}(IHeroFactory));
var FactoryMaker = /** @class */ (function () {
    function FactoryMaker() {
    }
    FactoryMaker.getHeroFactory = function (type) {
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
    };
    return FactoryMaker;
}());
var IAbstractSkill = /** @class */ (function () {
    function IAbstractSkill() {
    }
    IAbstractSkill.prototype.getMainSkill = function () { };
    IAbstractSkill.prototype.getSecondarySkill = function () { };
    return IAbstractSkill;
}());
var SwordsmanSkill = /** @class */ (function (_super) {
    __extends(SwordsmanSkill, _super);
    function SwordsmanSkill() {
        var _this = _super.call(this) || this;
        _this._mainSkillName = "slash";
        _this._secondarySkillType = "berserk";
        return _this;
    }
    SwordsmanSkill.prototype.getMainSkill = function () {
        return this._mainSkillName;
    };
    SwordsmanSkill.prototype.getSecondarySkill = function () {
        return this._secondarySkillType;
    };
    return SwordsmanSkill;
}(IAbstractSkill));
var WizardSkill = /** @class */ (function (_super) {
    __extends(WizardSkill, _super);
    function WizardSkill() {
        var _this = _super.call(this) || this;
        _this._mainSkillName = "fireball";
        _this._secondarySkillType = "tornado";
        return _this;
    }
    WizardSkill.prototype.getMainSkill = function () {
        return this._mainSkillName;
    };
    WizardSkill.prototype.getSecondarySkill = function () {
        return this._secondarySkillType;
    };
    return WizardSkill;
}(IAbstractSkill));
var IAbstractEquipment = /** @class */ (function () {
    function IAbstractEquipment() {
    }
    IAbstractEquipment.prototype.getEquipment = function () { };
    return IAbstractEquipment;
}());
var SwordsmanEquipment = /** @class */ (function (_super) {
    __extends(SwordsmanEquipment, _super);
    function SwordsmanEquipment() {
        var _this = _super.call(this) || this;
        _this._equipment = {
            type: "Robe of the Chaos",
            armor: 20,
            resistance: 100
        };
        return _this;
    }
    SwordsmanEquipment.prototype.getEquipment = function () {
        return this._equipment;
    };
    return SwordsmanEquipment;
}(IAbstractEquipment));
var WizardEquipment = /** @class */ (function (_super) {
    __extends(WizardEquipment, _super);
    function WizardEquipment() {
        var _this = _super.call(this) || this;
        _this._equipment = {
            type: "Wrath of the Lich King",
            armor: 3,
            extraIntelligence: 5,
            extraMP: 100
        };
        return _this;
    }
    WizardEquipment.prototype.getEquipment = function () {
        return this._equipment;
    };
    return WizardEquipment;
}(IAbstractEquipment));
var IAbstractAbility = /** @class */ (function () {
    function IAbstractAbility() {
    }
    IAbstractAbility.prototype.getAbilities = function () { };
    return IAbstractAbility;
}());
var SwordsmanAbility = /** @class */ (function (_super) {
    __extends(SwordsmanAbility, _super);
    function SwordsmanAbility() {
        var _this = _super.call(this) || this;
        _this._heroProperties = {
            strength: 10,
            agility: 5,
            extraPower: true,
            extraPowerLevel: 1
        };
        return _this;
    }
    SwordsmanAbility.prototype.getAbilities = function () {
        return this._heroProperties;
    };
    return SwordsmanAbility;
}(IAbstractAbility));
var WizardAbilitiy = /** @class */ (function (_super) {
    __extends(WizardAbilitiy, _super);
    function WizardAbilitiy() {
        var _this = _super.call(this) || this;
        _this._heroProperties = {
            strength: 10,
            intelligence: 30,
            agility: 5
        };
        return _this;
    }
    WizardAbilitiy.prototype.getAbilities = function () {
        return this._heroProperties;
    };
    return WizardAbilitiy;
}(IAbstractAbility));
(function run() {
    var wizardFactory = FactoryMaker.getHeroFactory(factoryType.wizard), swordsmanFactory = FactoryMaker.getHeroFactory(factoryType.swordsman);
    var wiz = {
        abilities: wizardFactory.createAbilities(),
        equipment: wizardFactory.createEquipment(),
        skills: wizardFactory.createSkills()
    };
    var swrd = {
        abilities: swordsmanFactory.createAbilities(),
        equipment: swordsmanFactory.createEquipment(),
        skills: swordsmanFactory.createSkills()
    };
    var testHero = {
        abilities: wizardFactory.createAbilities(),
        equipment: wizardFactory.createEquipment(),
        skills: swordsmanFactory.createSkills()
    };
    console.log(wiz, swrd, testHero);
})();

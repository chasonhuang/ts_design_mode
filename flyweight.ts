// 语言、字体类型
interface ICharacterInterface {
  index: number;
  language: ILanguage;
  fontFamily: IFontFamily;
}

interface ILanguage {
  type: string;
  name: string;
}

interface IFontFamily {
  fontFamily: FontFamilyEnum;
}

export enum FontFamilyEnum {
  Song = "宋体",
  Hei = "黑体"
}

// 默认构建方法
class LanguageClass implements ILanguage {
  public type: string;
  public name: string;

  constructor(type: string, name: string) {
    this.type = type;
    this.name = name;
  }
}

class FontFamilyClass implements IFontFamily {
  public fontFamily: FontFamilyEnum;

  constructor(type: FontFamilyEnum) {
    this.fontFamily = type;
  }
}

// 基础类
class CharacterRegistry {
  private static _instance: CharacterRegistry;
  private _language: LanguageClass;
  private _fontFamilyMap: Map<FontFamilyEnum, IFontFamily> = new Map();

  public static get instance() {
    if (!this._instance) {
      this._instance = new CharacterRegistry();
    }
    return this._instance;
  }

  public get language() {
    if (!this._language) {
      // 懒汉策略，延时创建对象
      this._language = new LanguageClass("Chinese", "中文");
    }
    return this._language;
  }

  public getFontFamilyByType(type: FontFamilyEnum) {
    // 懒汉策略，延时创建对象
    if (!this._fontFamilyMap.has(type)) {
      this._fontFamilyMap.set(type, new FontFamilyClass(type));
    }
    return this._fontFamilyMap.get(type);
  }
}

class FlyweightCharacterClass implements ICharacterInterface {
  public language: ILanguage = CharacterRegistry.instance.language; // 内部共享属性
  public index: number;
  public fontFamily: IFontFamily;

  constructor(index: number, type: FontFamilyEnum) {
    this.index = index; // 外部属性
    this.fontFamily = CharacterRegistry.instance.getFontFamilyByType(type);
  }
}

class SaveCharacters {
  public static flyweightWay() {
    const charactersList: ICharacterInterface[] = [];
    for (let i = 0; i < 200000; i++) {
      // 模拟随机生成类型
      const type =
        Math.random() > 0.5 ? FontFamilyEnum.Song : FontFamilyEnum.Hei;
      charactersList.push(new FlyweightCharacterClass(i, type));
    }
    return charactersList;
  }
}
const flyweightWayCharacters = SaveCharacters.flyweightWay();
console.log(flyweightWayCharacters);

enum ClothesTypeEnum {
  Vest,
  Shirt,
  Jacket,
  Hoodies,
  Sweater
}

enum ColorEnum {
  White,
  Red,
  Yellow,
  Black
}

// 颜色的接口
interface ColorInterface {
  getColor: () => void;
}

// 类型的抽象类
abstract class AbstractClothesClass {
  protected color: ColorInterface;

  public setColor(color: ColorInterface) {
    this.color = color;
  }

  public abstract getClothes(): void;
}

//类型的扩充抽象类
class JacketProducer extends AbstractClothesClass {
  public getClothes() {
    let color = this.color.getColor();
    console.log(color + "jacket");
  }
}

class ShirtProducer extends AbstractClothesClass {
  public getClothes() {
    let color = this.color.getColor();
    console.log(color + "shirt");
  }
}

// 颜色的实现类;
class BlackColor implements ColorInterface {
  public getColor() {
    return "black";
  }
}

class WhiteColor implements ColorInterface {
  public getColor() {
    return "white";
  }
}

// 桥接具体实现类;
class CloseShop {
  private static _instance: CloseShop;

  public static getInstance() {
    if (!this._instance) {
      this._instance = new CloseShop();
    }
    return this._instance;
  }

  public getClothes(type: ClothesTypeEnum, color: ColorEnum) {
    let clothes: AbstractClothesClass;
    switch (type) {
      case ClothesTypeEnum.Jacket:
        clothes = new JacketProducer();
        break;
      case ClothesTypeEnum.Shirt:
        clothes = new ShirtProducer();
        break;
      default:
        throw new Error("not support type" + type);
    }
    switch (color) {
      case ColorEnum.White:
        clothes.setColor(new WhiteColor());
        break;
      case ColorEnum.Black:
        clothes.setColor(new BlackColor());
        break;
      default:
        throw new Error("not support color" + color);
    }
    return clothes;
  }
}

const clothes = CloseShop.getInstance().getClothes(
  ClothesTypeEnum.Shirt,
  ColorEnum.Black
);
console.log(clothes);

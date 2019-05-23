enum GunType {
  AK,
  M4A1
}

interface Shootable {
  shoot: () => void;
}

abstract class Gun implements Shootable {
  // 抽象产品 - 枪
  public abstract shoot(): void;
}

class AK47 extends Gun {
  //具体产品 - AK47
  shoot() {
    console.log("ak47 shoot.");
  }
}

class M4A1 extends Gun {
  //具体产品 - M4A1
  shoot() {
    console.log("m4a1 shoot.");
  }
}

class GunFactory {
  static createGun(type: GunType): Gun {
    switch (type) {
      case GunType.AK:
        return new AK47();
      case GunType.M4A1:
        return new M4A1();
      default:
        throw Error("not support this gun yet");
    }
  }
}

GunFactory.createGun(GunType.AK).shoot();
GunFactory.createGun(GunType.M4A1).shoot();

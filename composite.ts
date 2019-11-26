// Node枚举
enum NodeTypeEnum {
  Folder = "folder",
  ImageFile = "image",
  TextFile = "text"
}

// Node抽象类(Component)
abstract class AbstractNode {
  protected name: string;
  protected type: NodeTypeEnum;
  protected children: AbstractNode[];

  public abstract add(node: AbstractNode): AbstractNode;
  public abstract getFileDeep(name: string): AbstractNode;
}

// 文件和文件夹基础类(Leaf)
class BasicFile extends AbstractNode {
  public add(file: BasicFile): BasicFile {
    console.error("文件类型不支持添加");
    return this;
  }

  public getFileDeep(name: string): BasicFile {
    if (name === this.name) {
      return this;
    }
    return null;
  }
}

class BasicFolder extends AbstractNode {
  protected constructor() {
    super();
    this.type = NodeTypeEnum.Folder;
    this.children = [];
  }

  public add(file: AbstractNode): BasicFolder {
    this.children.push(file);
    return this;
  }

  public getFileDeep(name: string): AbstractNode {
    if (this.name === name) {
      return this;
    }
    for (let index = 0; index < this.children.length; index++) {
      const node = this.children[index].getFileDeep(name);
      if (node) {
        return node;
      }
    }
    return null;
  }
}

// 文件类
class ImageFile extends BasicFile {
  constructor(name: string) {
    super();
    this.name = name;
    this.type = NodeTypeEnum.ImageFile;
  }
}

class TextFile extends BasicFile {
  constructor(name: string) {
    super();
    this.name = name;
    this.type = NodeTypeEnum.TextFile;
  }
}

// 文件夹类
class SystemFolder extends BasicFolder {
  constructor(name: string) {
    super();
    this.name = name;
  }
}

// 客户端
class Client {
  public static initTree(): SystemFolder {
    const folder1: SystemFolder = new SystemFolder("根文件夹");
    const folder2: SystemFolder = new SystemFolder("图像文件夹");
    const folder3: SystemFolder = new SystemFolder("文本文件夹");

    const image1: ImageFile = new ImageFile("a.jpg");
    const image2: ImageFile = new ImageFile("b.jpg");

    const text1: TextFile = new TextFile("a.txt");
    const text2: TextFile = new TextFile("b.txt");

    folder2.add(image1).add(image2);
    folder3.add(text1).add(text2);
    folder1.add(folder2).add(folder3);

    return folder1;
  }
}
const tree = Client.initTree();
const aJpg = tree.getFileDeep("a.jpg");
console.log(aJpg);

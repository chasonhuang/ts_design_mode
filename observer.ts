// 发布类
class Subject {
  // 缓存列表，用以存放回调函数，以便通知订阅者
  private observers: Observer[] = new Array<Observer>();
  private state: number;

  // 新增订阅者
  public subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  // 改变状态，通知订阅者
  public setState(state: number): void {
    console.log(`Warning: State changed: ${state}`);
    this.state = state;
    this.publish();
  }

  // 获取状态
  public getState(): number {
    return this.state;
  }

  // 发布事件
  public publish(): void {
    for (let observer of this.observers) {
      observer.update();
    }
  }

  // 取消订阅
  public unsubscribe(observer?: Observer): void {
    // 如果没传参数，则清空订阅者
    if (!observer) {
      this.observers = new Array<Observer>();
    } else {
      this.observers.splice(this.observers.indexOf(observer), 1);
    }
  }
}

// 订阅者抽象类
abstract class Observer {
  // 订阅的内容
  protected subject: Subject;

  // 订阅更新
  public abstract update(): void;
}

class AObserver extends Observer {
  // 构造方法里订阅
  public constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.subscribe(this);
  }

  public update() {
    console.log(`AObserver: ${this.subject.getState()}`);
  }
}

class BObserver extends Observer {
  // 构造方法里订阅
  public constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.subscribe(this);
  }

  public update() {
    console.log(`BObserver: ${this.subject.getState()}`);
  }
}

const subject = new Subject();

const aObserver = new AObserver(subject);
const bObserver = new BObserver(subject);

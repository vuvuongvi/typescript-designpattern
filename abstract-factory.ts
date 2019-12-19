// Cách áp dụng bí thuật của abstract factory, đầu tiên tạo abstract factory interface để khai báo những method trừu tượng 
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}
// sau đó mình sẽ new những class thuộc về chi tiết sản phẩm theo method tương ứng
class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }
  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
// nhìn phía trên, mỗi method trong interface AbstractFactory đều tham chiếu đến 1 interface này
interface AbstractProductA {
  usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return `the result of the product A1`;
  }
}

class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return `the result of the product A2`;
  }
}
interface AbstractProductB {
  usefulFunctionB(): string;
}
class ConcreteProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return 'The result of the product B1.';
  }
}
class ConcreteProductB2 implements AbstractProductB {

  public usefulFunctionB(): string {
      return 'The result of the product B2.';
  }
}
function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();
  console.log(productB.usefulFunctionB());
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());
console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());
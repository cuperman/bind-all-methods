function bindAllMethods(BaseComponent) {
  class BoundComponent extends BaseComponent {
    constructor() {
      super(...arguments);
      
      const properties = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
        // .filter(m => typeof this[m] === 'function')
        // .filter(m => m !== 'constructor')
      console.log('properties', properties);
      
      properties.forEach(m => console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), m)));
      properties.forEach(m => console.log(typeof this[m]));
      
      // properties
      //   .forEach(m => this[m] = this[m].bind(this), this);
    }
  }

  return BoundComponent;
};

class Foo {
  constructor(a, b, c) {
    console.log('Foo::constructor', a, b, c);
  }
}

class Bar extends bindAllMethods(Foo) {
  constructor(a, b, c) {
    super(a, b, c);
    console.log('Bar::constructor', a, b, c);
  }
  
  myMethod() {
    return;
  }
  
  myOtherMethod() {
    return;
  }
  
  static myStaticMethod() {
    return;
  }
  
  get area() {
    return;
  }
  
  set area(value) {
    return;
  }
}

Bar.prototype.myAttribute = 'attr'; 

let bar = new Bar('foo', 'bar', 'baz');
bar.attr = 'attr';

// export default bindAllMethods;

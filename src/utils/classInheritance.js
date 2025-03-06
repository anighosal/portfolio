class ParentClass {
  constructor() {
    this.parentProperty = "Hello from Parent";
  }
}

class ChildClass extends ParentClass {
  constructor() {
    super();
    this.childProperty = "Hello from Child";
  }
}

const childInstance = new ChildClass();

console.log(childInstance.parentProperty);
console.log(childInstance.childProperty);

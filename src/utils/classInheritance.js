class ParentClass {
  constructor() {
    this.parentProperty = "Hello from Parent";
  }
}

class ChildClass extends ParentClass {
  constructor() {
    super(); // Call the constructor of the parent class
    this.childProperty = "Hello from Child";
  }
}

const childInstance = new ChildClass();

console.log(childInstance.parentProperty); // Output: "Hello from Parent"
console.log(childInstance.childProperty); // Output: "Hello from Child"

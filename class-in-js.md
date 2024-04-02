Classes are templates for creating objects.They encapsulate data with code to work on that data.

There are two ways to define a class in JavaScript:

```js
// Declaration

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression: the calss has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

**Constructor**

The `constructor` method is a special method for creating and initializing an object created with a class. There only can be one special method with the name `constructor` in a class. Otherwise, a `SyntaxError` will be thrown.

```js
class Rectangle{
  constructor(height, width){
    {
      this.height = height;
      this.width = width;
    }
}
```

**Methods**
Methods are defined on the prototype of the class and share it among all instances of the class.

**Static**
defines a static method or field for a class.
we cannot call a static method on an instance of the class. Instead, we call it on the class itself.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Static method
  static area(rectangle) {
    return rectangle.height * rectangle.width;
  }
}

// Create a new Rectangle object
const myRectangle = new Rectangle(5, 10);

// Call the static method on the class, not on the instance
console.log(Rectangle.area(myRectangle)); // Output: 50
```

**instance method**

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Instance method
  area() {
    return this.height * this.width;
  }
}

// Create a new Rectangle object
const myRectangle = new Rectangle(5, 10);

// Call the instance method on the instance
console.log(myRectangle.area()); // Output: 50
```

## Inheritance

`extends` keyword is used in a class to create a class as a child of another class. the child class inherits all the properties and methods from the parent class.

```js
class Shape {
  constructor(name) {
    this.name = name;
  }
}

class Rectangle extends Shape {
  constructor(name, height, width) {
    super(name); // Call the superclass's constructor with the name parameter
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

const myRectangle = new Rectangle("myRectangle", 5, 10);
console.log(myRectangle.name); // Output: 'myRectangle'
console.log(myRectangle.area()); // Output: 50
```

`this` refers to the current instance of the class (object or function).
It's also necessary if you want to use this in the constructor of the subclass, as this won't be available until after super() has been called and remember to add the arguments.

---

**Lexical scoping**
it is about scope of variables.

---

**Closure**
A closure in JS is like a function with a backpack. The backpack contains all the variables that were in-scope at the time the closure was created.

```js
function outerFn(outerVariable) {
  return function innerFn(innerVariable) {
    console.log(outerVariable);
    console.log(innerVariable);
  };
}
const myOuterFn = outerFn("outer");
myOuterFn("inner"); // Output: 'outer' 'inner'
```

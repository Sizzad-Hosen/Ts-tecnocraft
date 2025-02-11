{
    // 

  class Person{
    getSleep(){
        console.log(`person sleep daily 7h`)
    }
  }
  class Student{
    getSleep(){
        console.log(`person sleep daily 8h`)
    }
  }
  class Developer{
    getSleep(){
        console.log(`person sleep daily 6h`)
    }
  }


  const person1 = new Person();
  const person2 = new  Student();
  const person3 = new  Developer();



//   example: 02


class Shape {
    getArea(): number {
      return 0;
    }
  }

  // pi* r* r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // height * width
  class Reactangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Reactangle(10, 20);

  getShapeArea(shape3);

    // 
}
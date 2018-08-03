class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sides = [sideA, sideB, sideC];
  }

  kind() {
    if (this.validateSideLength(this.sides)) {
      this.throwException();
    }
    if (this.checkEqilateral(this.sides)) {
      return 'equilateral';
    } else if (this.checkIsosceles(this.sides)) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  checkEqilateral(sides) {
    return (sides[0] + sides[1] + sides[2]) / 3 === sides[0] ? true : false;
  }

  checkIsosceles(sides) {
    const uniqueSides = [...new Set(sides)];
    return sides.length > uniqueSides.length ? true : false;
  }

  validateSideLength(sides) {
    const filteredSides = sides.filter(side => side <= 0);
    return filteredSides.length > 0 ? this.throwException() : false;
  }

  throwException() {
    throw 'Sides must be a number greater than zero';
  }
}

module.exports = Triangle;

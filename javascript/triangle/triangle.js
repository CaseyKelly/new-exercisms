class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sides = [sideA, sideB, sideC];
  }

  kind() {
    this.validateTriangleInputs(this.sides);
    if (this.checkEqilateral(this.sides)) {
      return 'equilateral';
    } else if (this.checkIsosceles(this.sides)) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  validateTriangleInputs(sides) {
    if (this.validateSideLength(sides)) {
      this.throwException();
    } else if (this.checkForInequality(sides)) {
      this.throwException();
    } else {
      return true;
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

  checkForInequality(sides) {
    const sortedSides = sides.sort((a, b) => {
      return a - b;
    });
    return sortedSides[0] + sortedSides[1] < sortedSides[2]
      ? this.throwException()
      : false;
  }

  throwException() {
    throw 'Sides must be a number greater than zero';
  }
}

module.exports = Triangle;

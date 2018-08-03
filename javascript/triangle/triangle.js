class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  kind() {
    return this.checkEqilateral(this.sideA, this.sideB, this.sideC)
  }

  checkEqilateral(sideA, sideB, sideC) {
    if ((sideA + sideB + sideC) / 3 === sideA) {
      return 'equilateral';
    }
  }
}

module.exports = Triangle;

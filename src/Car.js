class Car {
  #name;
  #moveCount;

  constructor(name) {
    this.#name = name.trim();
    this.#moveCount = 0;
  }

  get name() {
    return this.#name;
  }

  moveForward() {
    this.#moveCount += 1;
  }

  getGreaterMoveCount(otherCount) {
    return Math.max(this.#moveCount, otherCount);
  }

  hasMaxMoveCount(maxCount) {
    return this.#moveCount === maxCount;
  }

  resultString() {
    return `${this.#name} : ${"-".repeat(this.#moveCount)}`;
  }
}

export default Car;

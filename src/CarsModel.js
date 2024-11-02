import { MissionUtils } from "@woowacourse/mission-utils";
import RULES from "./constants/rule.js";
import Car from "./Car.js";

class CarsModel {
  #cars;

  constructor(input) {
    const carNames = input.split(",");
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  getCarNames() {
    return [...this.#cars.map((car) => car.name)];
  }

  getCars() {
    return this.#cars;
  }

  #isCarMove() {
    const randomNum = MissionUtils.Random.pickNumberInRange(
      RULES.RANDOM_MIN,
      RULES.RANDOM_MAX,
    );

    return randomNum >= RULES.MOVE_THRESHOLD;
  }

  moveCars() {
    this.#cars.forEach((car) => {
      if (this.#isCarMove()) car.moveForward();
    });
  }

  #getMaxMoveCount() {
    return this.#cars.reduce(
      (maxCount, car) => car.getGreaterMoveCount(maxCount),
      0,
    );
  }

  getWinners() {
    const winners = [];
    this.#cars.forEach((car) => {
      const maxCount = this.#getMaxMoveCount();
      if (car.hasMaxMoveCount(maxCount)) winners.push(car.name);
    });

    return winners;
  }
}

export default CarsModel;

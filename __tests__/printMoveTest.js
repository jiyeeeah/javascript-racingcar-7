import { MissionUtils } from "@woowacourse/mission-utils";
import { printCarsMove, printWinners } from "../src/interfaceUtils.js";
import Car from "../src/Car.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 전진 테스트", () => {
  let logSpy;

  beforeEach(() => {
    logSpy = getLogSpy();
  });

  test("전진 출력 테스트", () => {
    // given
    const carNames = ["jiye", "hello"];
    const cars = carNames.map((name) => new Car(name));

    // when
    cars.forEach((car) => {
      if (car.name === "jiye") {
        car.moveForward();
        car.moveForward();
      }
    });
    printCarsMove(cars);

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("jiye : --", "hello : "),
    );
  });

  const winnersPrintTest = [
    [["ji", "hi"], "최종 우승자 : ji, hi"],
    [["Sarah"], "최종 우승자 : Sarah"],
  ];
  test.each(winnersPrintTest)("우승자 출력 테스트", (winners, print) => {
    // when
    printWinners(winners);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(print));
  });
});

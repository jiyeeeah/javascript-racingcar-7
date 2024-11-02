import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, MESSAGES } from "./constants/message.js";

export function getInputAsync(message) {
  try {
    return Console.readLineAsync(message);
  } catch (error) {
    throw new Error(ERROR_MESSAGES.PREFIX + ERROR_MESSAGES.GET_INPUT);
  }
}

export function printCarsMove(cars) {
  Console.print("");
  cars.forEach((car) => {
    Console.print(car.resultString());
  });
}

export function printWinners(winners) {
  Console.print(MESSAGES.PRINT_WINNERS + winners.join(", "));
}

import availableAttachOptions from "../availableAttachOptions";
import { character, expectedResult, characterWithoutSpecial } from "../underTestObject";

describe('проверка функции availableAttachOptions', () => {
  test('проверка получения небходимых данных из объекта', () => {
    expect(availableAttachOptions(character)).toEqual(expectedResult);
  });

  test('проверка без спец.атак', () => {
    expect(availableAttachOptions(characterWithoutSpecial)).toEqual([]);
  });

  test('проверка если передали не object', () => {
    expect(() => availableAttachOptions('')).toThrow();
  });
});
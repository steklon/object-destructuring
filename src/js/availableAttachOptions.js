export default function availableAttachOptions(character) {
  const result = [];

  if (!(character instanceof Object)) {
    throw new Error("character должен быть Object");
  }

  if (!("special" in character)) {
    return result;
  }
 
  const { special } = character;

  for (const key of special) {
    if (!("description" in key)) {
      key.description = "Описание недоступно";
    }
    result.push(key);
  }

  return result;
}
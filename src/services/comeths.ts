import { createComeths, deleteComeths } from "../api/megaverse";
import { Direction, ICreateWithDirection, IDelete } from "../interfaces/megaverseInterface";

export async function createComethsService(body: ICreateWithDirection) {
  try {
    await createComeths(body);
  } catch (error) {
    console.error("Error creating Comeths:", error);
    throw error;
  }
}

export async function deleteComethsService(body: IDelete) {
  try {
    await deleteComeths(body);
  } catch (error) {
    console.error("Error deleting Comeths:", error);
    throw error;
  }
}

export function findComeths(matriz: string[][]): [number, number, Direction][] {
  const coordinatesCometh: [number, number, Direction][] = [];

  for (let filaIdx = 0; filaIdx < matriz.length; filaIdx++) {
    for (
      let columnaIdx = 0;
      columnaIdx < matriz[filaIdx].length;
      columnaIdx++
    ) {
      const elemento = matriz[filaIdx][columnaIdx];
      if (elemento.includes("_COMETH")) {
        const direction = elemento
          .split("_COMETH")[0]
          .toLowerCase() as Direction;
        coordinatesCometh.push([filaIdx, columnaIdx, direction]);
      }
    }
  }

  return coordinatesCometh;
}

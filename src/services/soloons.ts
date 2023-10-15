import { createSoloons, deleteSoloons } from "../api/megaverse";
import { Color, ICreateWithColor, IDelete } from "../interfaces/megaverseInterface";

export async function createSoloonsService(body: ICreateWithColor) {
  try {
    await createSoloons(body);
  } catch (error) {
    console.error("Error creating Soloons:", error);
    throw error;
  }
}

export async function deleteSoloonsService(body: IDelete) {
  try {
    await deleteSoloons(body);
  } catch (error) {
    console.error("Error deleting Soloons:", error);
    throw error;
  }
}

export function findSoloons(matriz: string[][]): [number, number, Color][] {
  const coordinatesSoloon: [number, number, Color][] = [];

  for (let filaIdx = 0; filaIdx < matriz.length; filaIdx++) {
    for (
      let columnaIdx = 0;
      columnaIdx < matriz[filaIdx].length;
      columnaIdx++
    ) {
      const elemento = matriz[filaIdx][columnaIdx];
      if (elemento.includes("_SOLOON")) {
        const color = elemento.split("_SOLOON")[0].toLocaleLowerCase() as Color;
        coordinatesSoloon.push([filaIdx, columnaIdx, color]);
      }
    }
  }

  return coordinatesSoloon;
}
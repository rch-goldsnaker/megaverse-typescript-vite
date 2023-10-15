import { createPolyanets, deletePolyanets } from "../api/megaverse";
import { ICreate, IDelete } from "../interfaces/megaverseInterface";

export async function createPolyanetsService(body: ICreate) {
  try {
    await createPolyanets(body);
  } catch (error) {
    console.error("Error creating Polyanets:", error);
    throw error;
  }
}

export async function deletePolyanetsService(body: IDelete) {
  try {
    await deletePolyanets(body);
  } catch (error) {
    console.error("Error deleting Polyanets:", error);
    throw error;
  }
}

export function findPolyanets(matriz: string[][]): number[][] {
  const coordinatesPolyanet: number[][] = [];

  for (let filaIdx = 0; filaIdx < matriz.length; filaIdx++) {
    for (
      let columnaIdx = 0;
      columnaIdx < matriz[filaIdx].length;
      columnaIdx++
    ) {
      if (matriz[filaIdx][columnaIdx] === "POLYANET") {
        coordinatesPolyanet.push([filaIdx, columnaIdx]);
      }
    }
  }

  return coordinatesPolyanet;
}
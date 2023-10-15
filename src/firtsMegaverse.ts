import { ICreate, CandidateId } from "./interfaces/megaverseInterface";
import {
  createPolyanetsService,
} from "./services/polyanets";

//Manual Coordinate Polyanets
const coordinatesPolyanet: (number | number[])[] = [
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [2, 8],
  [3, 7],
  [4, 6],
  [5, 5],
  [6, 4],
  [7, 3],
  [8, 2],
];

export async function createFirtsMegaverse() {
  async function createPolyAndWait(item: number | number[]) {
    const [row, column] = item as number[];
    try {
      const newPoly: ICreate = {
        candidateId: CandidateId.id,
        row,
        column,
      };

      await createPolyanetsService(newPoly);

    } catch (error) {
      console.error("Error creating Polyanet:", error);
    }
  }

  //sequential request to the API
  for (const item of coordinatesPolyanet) {
    await createPolyAndWait(item);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

import {
  ICreate,
  ICreateWithColor,
  ICreateWithDirection,
  Color,
  Direction,
  CandidateId,
} from "./interfaces/megaverseInterface";
import { createComethsService, findComeths } from "./services/comeths";
import { getGoalService } from "./services/goal";
import { createPolyanetsService, findPolyanets } from "./services/polyanets";
import { createSoloonsService, findSoloons } from "./services/soloons";

export async function createPolyanets(goalData:string[][]) {
  async function createPolyAndWait(item: number | number[]) {
    if (Array.isArray(item) && item.length === 2) {
      const [row, column] = item as number[];
      try {
        const newPoly: ICreate = {
          candidateId: CandidateId.id,
          row,
          column,
        };

        await createPolyanetsService(newPoly);
      } catch (error) {
        console.error("Error creating Polyanets:", error);
      }
    } else if (typeof item === "number") {
      console.error("Element is not a valid array:", item);
    }
  }

  const coordinatesPolyanet = findPolyanets(goalData);

  for (const item of coordinatesPolyanet) {
    await createPolyAndWait(item);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

export async function createSoloons(goalData: string[][]) {
  async function createSoloonAndWait(item: number | [number, number, Color]) {
    if (Array.isArray(item) && item.length === 3) {
      const [row, column, color] = item as [number, number, Color];

      if (Object.values(Color).includes(color)) {
        try {
          const newSoloon: ICreateWithColor = {
            candidateId: CandidateId.id,
            row,
            column,
            color,
          };

          await createSoloonsService(newSoloon);
        } catch (error) {
          console.error("Error creating Soloon:", error);
        }
      } else {
        console.error("Invalid color value:", color);
      }
    } else if (
      typeof item === "number" ||
      (Array.isArray(item) && item.length !== 3)
    ) {
      console.error("Element is not a valid array:", item);
    }
  }

  const coordinatesSoloon = findSoloons(goalData);

  for (const item of coordinatesSoloon) {
    await createSoloonAndWait(item);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

export async function createComeths(goalData: string[][]) {
  async function createComethAndWait(
    item: number | [number, number, Direction]
  ) {
    if (Array.isArray(item) && item.length === 3) {
      const [row, column, direction] = item as [number, number, Direction];

      if (Object.values(Direction).includes(direction)) {
        try {
          const newCometh: ICreateWithDirection = {
            candidateId: CandidateId.id,
            row,
            column,
            direction,
          };
          await createComethsService(newCometh);
        } catch (error) {
          console.error("Error creating Cometh:", error);
        }
      } else {
        console.error("Invalid direction value:", direction);
      }
    } else if (
      typeof item === "number" ||
      (Array.isArray(item) && item.length !== 3)
    ) {
      console.error("Element is not a valid array:", item);
    }
  }

  const coordinatesComeths = findComeths(goalData);

  for (const item of coordinatesComeths) {
    await createComethAndWait(item);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

export async function createSecondMegaverse() {
  try {
    const goalData = await getGoalService();
    await createPolyanets(goalData);
    await createSoloons(goalData);
    await createComeths(goalData);
  } catch (error) {
    console.error("Error creating second Megaverse", error);
  }
}

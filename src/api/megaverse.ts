import axios from "./apiUrl";

import {
  ICreate,
  ICreateWithColor,
  ICreateWithDirection,
  IDelete,
  IGoalResponse,
  IResponse,
} from "../interfaces/megaverseInterface";

// Polyanets
export const createPolyanets = async (body: ICreate): Promise<IResponse> =>
  axios.post("/polyanets", body);

export const deletePolyanets = async (body: IDelete): Promise<IResponse> =>
  axios.delete("/polyanets", { data: body });

// Soloons
export const createSoloons = async (
  body: ICreateWithColor
): Promise<IResponse> => axios.post("/soloons", body);

export const deleteSoloons = async (body: IDelete): Promise<IResponse> =>
  axios.delete("/soloons", { data: body });

// Comeths
export const createComeths = async (
  body: ICreateWithDirection
): Promise<IResponse> => axios.post("/comeths", body);

export const deleteComeths = async (body: IDelete): Promise<IResponse> =>
  axios.delete("/comeths", { data: body });

// Goal
export const getGoal = async (): Promise<IGoalResponse> => 
  axios.get("/map/7705ef4d-3e97-4a65-9e26-307a6d97c12f/goal");

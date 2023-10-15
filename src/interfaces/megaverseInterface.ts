export interface ICreate {
  candidateId: string;
  row: number;
  column: number;
}

export interface ICreateWithColor {
  candidateId: string;
  row: number;
  column: number;
  color: Color;
}

export interface ICreateWithDirection {
  candidateId: string;
  row: number;
  column: number;
  direction: Direction;
}

export interface IDelete {
  candidateId: string;
  row: number;
  column: number;
}

export interface IResponse {
  data: {
        error: boolean;
        message: string;
      } | {};
}

export interface IGoalResponse {
  data: {
    goal: string[][];
  };
}

export enum Color {
  blue = "blue",
  red = "red",
  purple = "purple",
  white = "white",
}

export enum Direction {
  up = "up",
  down = "down",
  right = "right",
  left = "left",
}

export enum CandidateId{
  id = "7705ef4d-3e97-4a65-9e26-307a6d97c12f"
}
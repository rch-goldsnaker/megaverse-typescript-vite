import { getGoal } from "../api/megaverse";
import { apiResponse } from "../utils/apiResponse";

export async function getGoalService() {
  try {
    const res = await getGoal();
    return res.data.goal;
  } catch (error) {
    console.error("Error getting Goals", error);
  }
  
  // trying with api store data
  try {
    return apiResponse.data.goal;
  } catch (error) {
    console.error("Error getting Goal from apiResponse", error);
    throw error; 
  }
}

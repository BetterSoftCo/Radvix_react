import { SET_RESEARCH_ID } from "./actions_type";


export type ResearchAction = {
  type: string;
  payload: number;
};


export function SetResearchId(ResearchId: number): ResearchAction {
  return {
    type: SET_RESEARCH_ID,
    payload: ResearchId,
  };
}
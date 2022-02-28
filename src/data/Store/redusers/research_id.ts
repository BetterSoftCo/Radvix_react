import { SET_RESEARCH_ID } from "../actions/actions_type";
import { ResearchAction } from "../actions/research_action";
import { UserRoleState } from "../actions/user_action";

const ResearchId: number = -1;

const reducer = (
  state: number = ResearchId,
  action: ResearchAction
): UserRoleState => {
  switch (action.type) {
    case SET_RESEARCH_ID:
      return action.payload;
  }
  return state;
};

export default reducer;
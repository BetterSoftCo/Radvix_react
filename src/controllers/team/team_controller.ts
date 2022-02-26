import { toast } from "react-toastify";
import { TeamCreateReq } from "../../data/models/requests/team/team_create_req";
import { GetAllTeamsResult } from "../../data/models/responses/team/get_all_teams_res";
import { TeamCreateResResult } from "../../data/models/responses/team/team_create_res";
import { TeamSearchResResult } from "../../data/models/responses/team/team_search_res";
import { RemoteTeam } from "../../data/remotes/team/remote_team";
export class TeamController {
  remote = new RemoteTeam();

  createTeam(
    body: TeamCreateReq,
    action: (res: TeamCreateResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createTeam(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    );
  }
  TeamSearch(action: (res: TeamSearchResResult) => any) {
    this.remote.TeamSearch(
      (res) => {
        action(res.result);
      },
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    );
  }
  getAllTeams(
    body: { pageSize: number; pageNumber: number },
    action: (res: GetAllTeamsResult) => any
  ) {
    this.remote.getAllTeams(
      body,
      (res) => {
        action(res.result);
      },
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    );
  }
}

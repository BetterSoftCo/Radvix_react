import { toast } from "react-toastify";
import { ResearchReq } from "../../data/models/requests/research/research_req";
import { UpdateResearchReq } from "../../data/models/requests/research/update_research_req";
import { ResearchesResResult } from "../../data/models/responses/research/researches_res";
import { GetResearchByidResResult } from "../../data/models/responses/research/research_by_id_res";
import { ResearchResResult } from "../../data/models/responses/research/research_res";
import { TimelineResResult } from "../../data/models/responses/research/timeline_res";
import { UpdateResearchResResult } from "../../data/models/responses/research/update_research_req";
import { RemoteResearch } from "../../data/remotes/research/remote_research";
import { store } from "../../data/store";
export class ResearchController {
  remote = new RemoteResearch();

  createResearch(
    body: ResearchReq,
    action: (res: ResearchResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createResearch(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        error(err);
      }
    );
  }
  updateResearch(
    body: UpdateResearchReq,
    action: (res: UpdateResearchResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.updateResearch(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        error(err);
      }
    );
  }
  researchSearch(
    action: (
      res: Array<{ label: string; value: number; isUser: boolean } | {}>
    ) => any
  ) {
    this.remote.researchSearch((res) => {
      const users = res.result.users.map((item) => {
        return {
          label: item.firstName + " " + item.lastName,
          value: item.id,
          isUser: true,
        };
      });
      const teams = res.result.teams.map((item) => {
        return {
          label: item.title,
          value: item.id,
          isUser: false,
        };
      });
      const listMembers = [...users, ...teams];
      action(listMembers);
    });
  }
  getResearches(
    body: { PageNumber: number; PageSize: number , SearchParameter:string },
    action: (res: ResearchesResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.getResearches(
      body,
      (res) => {
        action(res.result!);
      },
      (err) => {
        error(err);
      }
    );
  }
  getResearchById(
    body: { id: number },
    action: (res: GetResearchByidResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.getResearchById(
      body,
      (res) => {
        action(res.result);
      },
      (err) => {
        error(err);
      }
    );
  }
  getTimeline(
    body: { id: number },
    action: (res: TimelineResResult[]) => any,
    error: (res: any) => any
  ) {
    if (store.getState().ResearchId > 0) {
      this.remote.getTimeline(
        body,
        (res) => {
          action(res.result);
        },
        (err) => {
          error(err);
        }
      );
    } else {
      toast.error(`please select research`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
}

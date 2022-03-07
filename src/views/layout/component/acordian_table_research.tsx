import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { ResearchesList } from "../../../data/models/responses/research/researches_res";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "../../../core/number_extentions";
import { UserRoles } from "../../../core/utils";
import { store } from "../../../data/store";
import { SetResearchId } from "../../../data/store/actions/research_action";
interface IAcordienTableResearch {
  Heading: any[];
  Items: ResearchesList[];
  role: UserRoles;
  changeResearch:(value:string)=>void
}
const AcordienTableResearchHeader: React.FC<
  IAcordienTableResearch & RouteComponentProps
> = (props) => {
  console.log(props);
  const handelChangeSelect = (id: number , title:string) => {
    store.dispatch(SetResearchId(id));
    props.changeResearch(title)
  };

  useEffect(() => {}, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead>
          <tr>
            {props.Heading.map((head, index) => (
              <th
                scope="col"
                className={head.center ? "text-center" : ""}
                key={index}
              >
                {head.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.Items.map((head, index) => (
            <tr key={index}>
              <td>
                <span
                  className="lable"
                  style={{ backgroundColor: "rgb(9, 107, 255)" }}
                ></span>{" "}
                {head.title}
              </td>
              <td className="text-center">
                {" "}
                <MainButton
                  children={head.status.isStatus()}
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  backgroundColor="#8EE1FF"
                ></MainButton>
              </td>
              <td>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={() => {
                      handelChangeSelect(head.id! , head.title!);
                    }}
                    className="pointer mx-1"
                  >
                    <img
                      src="/images/icons/log-in.svg"
                      alt="radvix"
                      width={12}
                      height={12}
                    />
                  </CircleIcon>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default withRouter(AcordienTableResearchHeader);

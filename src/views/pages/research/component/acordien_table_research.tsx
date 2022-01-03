import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";

interface IAcordienTableResearch {
  Heading: string[];
  Items: any[];
}
const AcordienTableResearch: React.FC<
  IAcordienTableResearch & RouteComponentProps
> = (props) => {
  console.log(props);

  useEffect(() => {}, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead>
          <tr>
            {props.Heading.map((head, index) => (
              <th scope="col" key={index}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.Items.map((head, index) => (
            <tr key={index}>
              <td>{head.name}</td>
              <td>{head.Institution}</td>
              <td>
                {" "}
                <MainButton
                  children={head.Category}
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  backgroundColor="#8EE1FF"
                ></MainButton>
              </td>
              <td>
                <div className="col d-flex justify-content-between align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={() => {props.history.push(AppRoutes.profile_research)}}
                    className="pointer"
                    
                  >
                    <img src="/images/pages/google_docs.svg" alt="radvix" width={15} height={15} />
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={() => {props.history.push(AppRoutes.edit_research)}}
                    className="pointer"
                  >
                    <img src="/images/pages/edit.svg" alt="radvix" />
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    color="#ffff"
                    className="pointer"
                    onClick={() => {props.history.push(AppRoutes.profile_research)}}
                  >
                    <i className="fas fa-history"></i>
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
export default withRouter(AcordienTableResearch);

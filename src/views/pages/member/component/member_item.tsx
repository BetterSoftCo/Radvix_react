import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { Member } from "../../../../data/models/responses/member/member_list_res";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface IMemberItem {
  member: Member;
}
const MemberItem: React.FC<IMemberItem & RouteComponentProps> = (props) => {
  return (
    <div className="col-md-3 d-flex justify-content-center align-items-center flex-column mb-3">
      <img
        src={
          props.member.profileImage
            ? props.member.profileImage
            : "/images/images/img_avatar.png"
        }
        alt="Avatar"
        className="rounded-circle avatar"
        width="125px"
        height="125px"
      />

      <h5 className="mt-2 fw-light  text-truncate col-7">
        {props.member.firstName + " " + props.member.lastName}
      </h5>
      <hr className="w-100 my-0" />
      <MainButton
        children="Principal Investigator"
        type={MainButtonType.dark}
        borderRadius="24px"
        fontSize="14px"
        className="my-2"
      ></MainButton>
      {props.member.teams.length ? (
        <h6 className="fw-light text-truncate col-7">
          {props.member.teams[0].title}...
        </h6>
      ) : null}

      <div className="d-flex justify-content-center align-items-center">
        <CircleIcon
          width="26px"
          height="26px"
          type={ThemeCircleIcon.dark}
          onClick={() => {
            props.history.push(
              `${AppRoutes.member_user_edit.replace(":id", props.member.id ?? "")}`
            );
          }}
          className="pointer mx-1"
        >
          <img src="/images/icons/edit.svg" alt="radvix" />
        </CircleIcon>
        <CircleIcon
          width="26px"
          height="26px"
          type={ThemeCircleIcon.dark}
          onClick={() => {
            props.history.push(
              `${AppRoutes.member_profile.replace(":id", props.member.id ?? "")}`
            );
          }}
          className="pointer mx-1"
        >
          <img
            src="/images/icons/google_docs.svg"
            alt="radvix"
            width={12}
            height={12}
          />
        </CircleIcon>
      </div>
    </div>
  );
};
export default withRouter(MemberItem);

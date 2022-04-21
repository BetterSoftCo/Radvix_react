import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppConstants, AppRoutes } from "../../../../core/constants";
import { MemberUser } from "../../../../data/models/responses/admin/list_member_user_res";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface IMemberItem {
  member: MemberUser;
}
const MemberItem: React.FC<IMemberItem & RouteComponentProps> = (props) => {
  return (
    <div className="col-md-3 d-flex justify-content-center align-items-center flex-column mb-3">
      <img
        src={
          props.member.profileImage
            ? AppConstants.base_url_image + props.member.profileImage
            : "/images/images/img_avatar.png"
        }
        alt="Avatar"
        className="rounded-circle avatar"
        width="100px"
        height="100px"
      />

      <h5
        className="mt-2 fw-light  text-truncate col-7 text-center"
        style={{ fontSize: "12px" }}
        title={props.member.firstName + " " + props.member.lastName}
      >
        {props.member.firstName + " " + props.member.lastName}
      </h5>
      <hr className="w-100 my-0" />
      <MainButton
        children="Principal Investigator"
        type={MainButtonType.dark}
        borderRadius="24px"
        fontSize="11px"
        className="my-2"
      ></MainButton>
      <div className="d-flex justify-content-center align-items-center">
        <CircleIcon
          width="26px"
          height="26px"
          type={ThemeCircleIcon.dark}
          onClick={() => {
            props.history.push(
              `${AppRoutes.member_profile.replace(
                ":id",
                props.member.id ?? ""
              )}`
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

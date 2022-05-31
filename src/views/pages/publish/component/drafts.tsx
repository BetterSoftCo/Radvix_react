import moment from "moment";
import React from "react";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { publishController } from "../../../../controllers/publish/publish_controller";
import { AppConstants } from "../../../../core/constants";
interface TableComponentProp {
  Heading: any[];
  Items: any[];
  Reload: any
}
export const Drafts: React.FC<TableComponentProp> = ({ Heading, Items, Reload }) => {
  const controller = new publishController();
  const handelRemove = (id: number) => {
    controller.removeDraft({ draftId: id }, (res: boolean) => {
      Reload()
    }, err => console.log(err)
    )

  }
  return (
    <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead>
          <tr>
            {Heading.map((head, index) => (
              <th
                scope="col"
                key={index}
                className={head.center ? "text-center" : ""}
              >
                {head.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Items.map((head, index) => (
            <tr key={index}>
              <td>
                {
                  head.medias && head.medias.length > 0 && head.medias[0].title ? head.medias[0].title : ''}</td>
              <td className="text-center">{head.firstName} {head.lastName}</td>
              <td className="text-center">{moment(head.createdDate).format("YYYY/MM/DD")}</td>
              <td className="text-center">{`${index + 1}.0`}</td>
              <td>
                <div className="col d-flex justify-content-end align-items-center">
                  {head.medias && head.medias.length ?
                    <a href={head.medias[0].externalUrl ? head.medias[0].externalUrl : AppConstants.base_url_image + head.medias[0].name} download target={"_blank"}>
                      <CircleIcon
                        width="26px"
                        height="26px"
                        type={ThemeCircleIcon.dark}
                        onClick={(e) => console.log("s")}
                        className="pointer mx-1"
                      >
                        <img
                          src="/images/icons/download.svg"
                          alt="radvix"
                          width={15}
                          height={15}
                        />
                      </CircleIcon>
                    </a>
                    : null}

                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    className="pointer mx-1"
                    onClick={() => { handelRemove(head.id) }}
                  >
                    <img
                      src="/images/icons/garbage_can.svg"
                      alt="radvix"
                      width={15}
                      height={15}
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

import moment from "moment";
import React from "react";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { publishController } from "../../../../controllers/publish/publish_controller";
interface TableComponentProp {
  Heading: any[];
  Items: any[];
}
export const Drafts: React.FC<TableComponentProp> = ({ Heading, Items }) => {
  const controller = new publishController();
   const handelRemove =(id:number)=> {
      controller.removeDraft({ draftId: id}, (res : boolean ) => {

        controller.getPublishById(
          { publicationId: id },
          (res) => {
            
          }
        );

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
              <td className="text-center">
                 { 
                head.medias && head.medias.length > 0 && head.medias[1].externalUrl === null ? 
                head.medias[1].name :
                head.medias && head.medias.length > 0 && head.medias[1].externalUrl !== null ?
                head.medias[1].externalUrl : "" }</td>
              <td>{head.firstName} {head.lastName}</td>
              <td className="text-center">{moment(head.createdDate).format("YYYY/MM/DD")}</td>
              <td className="text-center">{`${index+1}.0`}</td>
              <td>
                <div className="col d-flex justify-content-end align-items-center">
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
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    className="pointer mx-1"
                    onClick={() => {handelRemove(head.id)}}
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

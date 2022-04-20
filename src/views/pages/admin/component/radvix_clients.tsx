import moment from "moment";
import React from "react";
import { PaymentList } from "../../../../data/models/responses/admin/payments_res";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface TableComponentProp {
  Heading: string[];
  Items: PaymentList[];
}
export const RadvixClients: React.FC<TableComponentProp> = ({
  Heading,
  Items,
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead>
          <tr>
            {Heading.map((head, index) => (
              <th scope="col" key={index}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Items.map((head, index) => (
            <tr key={index}>
              <td>{head.title}</td>
              <td>{moment(head.payDate).format("YYYY/MM/DD")}</td>
              <td>{head.user.firstName+ ' ' + head.user.lastName}</td>
              <td>{head.user.email}</td>
              <td>{head.status.isStatus()}</td>
              <td>
                <div className="col d-flex justify-content-between align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => console.log("s")}
                    className="pointer"
                  >
                    <img
                      src="/images/icons/google_docs.svg"
                      alt="radvix"
                      width={12}
                      height={12}
                    />
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => console.log("sgdsa")}
                    className="pointer"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
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

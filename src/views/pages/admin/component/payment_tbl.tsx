import moment from "moment";
import React from "react";
import { PaymentList } from "../../../../data/models/responses/admin/payments_res";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface TableComponentProp {
  Heading: any[];
  Items: PaymentList[];
}
export const PaymentsTbl: React.FC<TableComponentProp> = ({
  Heading,
  Items,
}) => {
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
              <td>{head.title}</td>
              <td className="text-center">{moment(head.payDate).format("YYYY/MM/DD")}</td>
              <td className="text-center">{head.user.firstName+ ' ' + head.user.lastName}</td>
              <td className="text-center">{head.user.email}</td>
              <td className="text-center">
                <MainButton
                  children={head.status.isStatus()}
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  backgroundColor="#20A800"
                ></MainButton>
              </td>
              <td>
                <div className="col d-flex justify-content-end align-items-center">
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

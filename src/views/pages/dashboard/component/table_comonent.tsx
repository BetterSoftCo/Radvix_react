import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
interface TableComponentProp {
  Heading: string[];
  Items: any[];
}
const TableComponent: React.FC<TableComponentProp & RouteComponentProps> = (props) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead>
          <tr>
            {props.Heading.map((head,index) => (
              <th scope="col" key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.Items.map((head,index) => (
            <tr key={index}>
              <td>New Project <span onClick={()=>{props.history.push(AppRoutes.profile_research)}} className="pointer">"Synergistic Effects Of Air Content And Supplementary”</span> Cementitious Materials On
              Concrete Durability Has Been Created By <span className="pointer" onClick={()=>{props.history.push(AppRoutes.member_profile)}}>N. Hosseinzadeh</span>
              </td>
              <td>07/22/2021   21:24</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default withRouter(TableComponent);
import React, { Fragment } from "react";
import { Header } from "./Header";
import { RightSection } from "./RightSection";
import { Sidebar } from "./sidebar";

export const MainLayout: React.FC = (props) => {
  return (
    <Fragment>
      <Header></Header>
      <div className="main">
        <div className="row">
          <div className="col-2 col-md-1 ">
            <div className="parent-sidebar">
              <Sidebar></Sidebar>
            </div>
          </div>
          <div className="col-7 col-md-11 col-xl-8">{props.children}</div>
          <div className="col-xl-3">
            <RightSection></RightSection>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

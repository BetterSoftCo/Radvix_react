/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../core/constants";
import { Theme } from "../../core/utils";
import { IconTextVertical } from "../components/Icon_text_vertical";

export const Sidebar: React.FC = () => {
  return (
    <ul>
      <NavLink to={AppRoutes.research} activeClassName="selected">
        <li>
          <IconTextVertical
            fontSize="15px"
            className="lighter"
            text="Research"
            theme={Theme.dark}
            children={<img width="40px" height="40px" src='/Images/layout/research_icon.svg' />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to={AppRoutes.laboratory} activeClassName="selected">
        <li>
          <IconTextVertical
            fontSize="15px"
            className="lighter"
            text="Laboratory"
            theme={Theme.dark}
            children={<img width="40px" height="40px" src='/Images/layout/lab_menu_icon.svg' />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to={AppRoutes.team} activeClassName="selected">
        <li>
          <IconTextVertical
            fontSize="15px"
            className="lighter"
            text="Team"
            theme={Theme.dark}
            children={<img width="40px" height="40px" src="/Images/layout/team_menu_icon.svg
            " />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to={AppRoutes.task} activeClassName="selected">
        <li>
          <IconTextVertical
            fontSize="15px"
            className="lighter"
            text="Task"
            theme={Theme.dark}
            children={<img width="40px" height="40px" src='/Images/layout/task_menu_icon.svg'/>}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Data" activeClassName="selected">
        <li>
          <IconTextVertical
            fontSize="15px"
            className="lighter"
            text="Data"
            theme={Theme.dark}
            children={<img width="40px" height="40px" src='/Images/layout/data_manu_Icon.svg'/>}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Discussion" activeClassName="selected">
        <li>
          <IconTextVertical
            fontSize="15px"
            className="lighter"
            text="Discussion"
            theme={Theme.dark}
            children={<img width="40px" height="40px" src='/Images/layout/chat.png' />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Publish" activeClassName="selected">
        <li>
          <IconTextVertical
            fontSize="15px"
            className="lighter"
            text="Publish"
            theme={Theme.dark}
            children={<img width="40px" height="40px" src='/Images/layout/publish_menu_icon.svg' />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Expense" activeClassName="selected">
        <li>
          <IconTextVertical
            fontSize="15px"
            className="lighter"
            text="Expense"
            theme={Theme.dark}
            children={<img width="40px" height="40px" src='/Images/layout/expense_menu_icon.svg'/>}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Setting" activeClassName="selected">
        <li>
          <IconTextVertical
            fontSize="15px"
            className="lighter"
            text="Setting"
            theme={Theme.dark}
            children={<img width="40px" height="40px" src='/Images/layout/setting_menu_icon.svg' />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Ticketing" activeClassName="selected">
        <li>
          <IconTextVertical
            fontSize="15px"
            className="lighter"
            text="Ticketing"
            theme={Theme.dark}
            children={<img width="40px" height="40px" src='/Images/layout/headphones.svg'/>}
          ></IconTextVertical>
        </li>
      </NavLink>
    </ul>
  );
};

/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";
import { chat, data_manu_icon, Expense_menu_icon, headphones, lab_menu_icon, publish_menu_icon, research_icon, Setting_menu_icon, task_menu_icon, team_menu_icon } from "../../assets";
import { AppRoutes } from "../../core/constants";
import { Theme } from "../../core/utils";
import { IconTextVertical } from "../components/Icon_text_vertical";

export const Sidebar: React.FC = () => {
  return (
    <ul>
      <NavLink to={AppRoutes.research} activeClassName="selected">
        <li>
          <IconTextVertical
            text="Research"
            theme={Theme.dark}
            children={<img src={research_icon} />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to={AppRoutes.laboratory} activeClassName="selected">
        <li>
          <IconTextVertical
            text="Laboratory"
            theme={Theme.dark}
            children={<img src={lab_menu_icon} />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Team" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Team"
            theme={Theme.dark}
            children={<img src={team_menu_icon} />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to={AppRoutes.task} activeClassName="selected">
        <li>
          <IconTextVertical
            text="Task"
            theme={Theme.dark}
            children={<img src={task_menu_icon}/>}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Data" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Data"
            theme={Theme.dark}
            children={<img src={data_manu_icon}/>}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Discussion" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Discussion"
            theme={Theme.dark}
            children={<img src={chat} />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Publish" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Publish"
            theme={Theme.dark}
            children={<img src={publish_menu_icon} />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Expense" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Expense"
            theme={Theme.dark}
            children={<img src={Expense_menu_icon}/>}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Setting" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Setting"
            theme={Theme.dark}
            children={<img src={Setting_menu_icon} />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Ticketing" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Ticketing"
            theme={Theme.dark}
            children={<img src={headphones}/>}
          ></IconTextVertical>
        </li>
      </NavLink>
    </ul>
  );
};

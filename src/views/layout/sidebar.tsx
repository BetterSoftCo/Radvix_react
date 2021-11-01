/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";
import { Theme } from "../../core/utils";
import { IconTextVertical } from "../components/IconTextVertical";

export const Sidebar: React.FC = () => {
  return (
    <ul>
      <NavLink to="/dashboard/research" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Research"
            theme={Theme.dark}
            children={<img src="/images/layout/Research Icon.svg" />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Laboratory" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Laboratory"
            theme={Theme.dark}
            children={<img src="/images/layout/Lab Menu Icon.svg" />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Team" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Team"
            theme={Theme.dark}
            children={<img src="/images/layout/Team Menu Icon.svg" />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Task" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Task"
            theme={Theme.dark}
            children={<img src="/images/layout/Task Menu Icon.svg" />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Data" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Data"
            theme={Theme.dark}
            children={<img src="/images/layout/Data Manu Icon.svg" />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Discussion" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Discussion"
            theme={Theme.dark}
            children={<img src="/images/layout/chat.svg" />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Publish" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Publish"
            theme={Theme.dark}
            children={<img src="/images/layout/Publish Menu Icon.svg" />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Expense" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Expense"
            theme={Theme.dark}
            children={<img src="/images/layout/Expense Menu Icon.svg" />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Setting" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Setting"
            theme={Theme.dark}
            children={<img src="/images/layout/Setting Menu Icon.svg" />}
          ></IconTextVertical>
        </li>
      </NavLink>
      <NavLink to="/dashboard/Ticketing" activeClassName="selected">
        <li>
          <IconTextVertical
            text="Ticketing"
            theme={Theme.dark}
            children={<img src="/images/layout/headphones.svg" />}
          ></IconTextVertical>
        </li>
      </NavLink>
    </ul>
  );
};

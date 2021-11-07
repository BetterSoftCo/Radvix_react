/* eslint-disable no-useless-concat */
import React from "react";
import { Theme } from "../../core/utils";
import { CircleIcon, ThemeCircleIcon } from "./circle_icon";
import { IconTextRow } from "./icon_text_horizontal";
interface IBoxListScroll {
  items: any[];
  TextItem: string;
  ValueItem: string;
  ImageItem: string;
  Deletabel?: boolean;
  DeleteFunc?: (e: any, value: any) => void;
  className?: string;
}
export const BoxListScroll: React.FC<IBoxListScroll> = ({
  items,
  TextItem,
  ValueItem,
  ImageItem,
  Deletabel,
  DeleteFunc,
  className,
}) => {
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  return (
    <div className={`${IsclassName + " " + "box-list-scroll"}`}>
      {items.map((item, index) => (
        <>
        {console.log("item",item)}
        <div
          className="d-flex justify-content-between align-items-center"
          key={index}
        >
          <IconTextRow
            theme={Theme.light}
            children={
              <img
                src={item.imagesrc.img_avatar}
                alt="Avatar"
                className="rounded-circle avatar"
              />
            }
            text={item.text}
            className="my-2"
          ></IconTextRow>
          {Deletabel && DeleteFunc !== undefined ? (
            <CircleIcon
              type={ThemeCircleIcon.dark}
              width="22px"
              height="22px"
              className="mx-3"
              onClick={(e) => {
                DeleteFunc(e, item[`${ValueItem}`]);
              }}
            >
              <i className="fas fa-trash"></i>
            </CircleIcon>
          ) : null}
        </div>
        </>
      ))}
    </div>
  );
};
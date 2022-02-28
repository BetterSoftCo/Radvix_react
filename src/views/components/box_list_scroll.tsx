/* eslint-disable no-useless-concat */
import React, { Fragment } from "react";
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
  onClick?: () => void;
}
export const BoxListScroll: React.FC<IBoxListScroll> = ({
  items,
  TextItem,
  ValueItem,
  ImageItem,
  Deletabel,
  DeleteFunc,
  className,
  onClick,
}) => {
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  return (
    <div className="parent-box-list-scroll p-3">
      <div className={`${IsclassName + " " + "box-list-scroll"}`}>
        {items.map((item, index) => (
          <Fragment key={index}>
            <div
              onClick={onClick}
              className="d-flex justify-content-between align-items-center"
              key={index}
            >
              <IconTextRow
                theme={Theme.light}
                children={
                  <img
                    src={
                      item[`${ImageItem}`] === null
                        ? "/images/images/img_avatar.png"
                        : item[`${ImageItem}`]
                    }
                    alt="Avatar"
                    className="rounded-circle avatar"
                  />
                }
                text={item[`${TextItem}`]}
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
                  <img
                    src="/images/icons/garbage_can.svg"
                    alt="radvix"
                    width={15}
                    height={15}
                  />
                </CircleIcon>
              ) : null}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

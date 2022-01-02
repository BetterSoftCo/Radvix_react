import React from "react";
import { Theme } from "../../../core/utils";
import { ButtonGroup } from "../botton_group";
import { BoxAlert } from "../box_alert";
import { BoxListScroll } from "../box_list_scroll";
import { MainButton, MainButtonType } from "../button";
import { CircleIcon, ThemeCircleIcon } from "../circle_icon";
import { IconTextVertical } from "../Icon_text_vertical";
import { IconTextRow } from "../icon_text_horizontal";
import { InputComponent, InputType } from "../inputs";
import { RadioGroup } from "../radio_group";
import { InputIcon } from "../search_box";
import { SelectComponent } from "../select_input";

export const ShowLibraryPage: React.FC = (props) => {
  return (
    <div className="row">
      <div className="col-12 border-bottom my-4 py-2 item">
        <ButtonGroup
          label="Access Level:"
          popQuestion="Access Level:"
          name="AccessLevel"
          items={[
            { name: "Low ", value: 1 },
            { name: "Medium ", value: 2 },
            { name: "High ", value: 3 },
          ]}
          TextItem="name"
          ValueItem="value"
        ></ButtonGroup>
      </div>
      <div className="col-12 border-bottom my-4 py-2 item">
        <BoxAlert text=" No Equipment Has Been Suggested!"></BoxAlert>
      </div>
      <div className="col-12 border-bottom my-4 py-2 item">
        <BoxListScroll
          items={[
            {
              text: "Nima Hosseinzadeh",
              id: 1,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 2,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 3,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 1,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 2,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 3,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 1,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 2,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 3,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 1,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 2,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 3,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 1,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 2,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 3,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 1,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 2,
              imagesrc: "/images/layout/img_avatar.png",
            },
            {
              text: "Nima Hosseinzadeh",
              id: 3,
              imagesrc: "/images/layout/img_avatar.png",
            },
          ]}
          TextItem="text"
          ValueItem="id"
          ImageItem="imagesrc"
          Deletabel
          className="mt-3"
        ></BoxListScroll>
      </div>
      <div className="col-12 border-bottom my-4 py-2 item">
        <MainButton
          type={MainButtonType.light}
          children={"Principal Investigator"}
          borderRadius="50px"
          fontSize="15px"
          className="mx-2"
        ></MainButton>
        <MainButton
          children="Principal Investigator"
          type={MainButtonType.dark}
          borderRadius="24px"
          fontSize="14px"
        ></MainButton>
      </div>
      <div className="col-12 border-bottom my-4 py-2 item d-flex">
        <CircleIcon
          width="26px"
          height="26px"
          type={ThemeCircleIcon.dark}
          onClick={(e) => console.log("s")}
          className="pointer"
        >
          <img src="/images/pages/google_docs.svg" alt="radvix" width={15} height={15} />
        </CircleIcon>
        <CircleIcon
          width="26px"
          height="26px"
          type={ThemeCircleIcon.light}
          onClick={(e) => console.log("s")}
          className="pointer"
        >
          <img src="/images/pages/google_docs.svg" alt="radvix" width={15} height={15} />
        </CircleIcon>
      </div>
      <div className="col-12 border-bottom my-4 py-2 item d-flex">
        <IconTextRow
          theme={Theme.dark}
          text="Nima Hosseinzadeh (Today, 11:23 AM)"
          fontSize="14px"
          className="fw-lighter"
          children={
            <img
              src="/images/layout/img_avatar.png"
              alt="Avatar"
              className="rounded-circle avatar mx-2"
              width="40px"
              height="40px"
            />
          }
        ></IconTextRow>
      </div>
      <div className="col-12 border-bottom my-4 py-2 item d-flex">
        <IconTextVertical
          text="New
          Discussion"
          theme={Theme.light}
          children={<img src="/Images/layout/group_27.svg" alt="test" />}
          className="pointer"
        ></IconTextVertical>
      </div>
      <div className="col-12 border-bottom my-4 py-2 item">
        <InputComponent
          type={InputType.text}
          label="Data Set Name:"
          popQuestion="Data Set Name:"
        ></InputComponent>
        <InputComponent
          type={InputType.textarea}
          label="Data Set Name:"
          popQuestion="Data Set Name:"
        ></InputComponent>
      </div>
      <div className="col-12 border-bottom my-4 py-2 item">
        <RadioGroup
          label=" Status:"
          popQuestion="Status"
          TextItem="name"
          ValueItem="id"
          name="Currency"
          items={[
            { name: "Operational", id: 1 },
            { name: " Not Operational", id: 2 },
          ]}
        ></RadioGroup>
      </div>
      <div className="col-12 border-bottom my-4 py-2 item">
        <InputIcon
          chilren={<img src="/images/pages/search_box_icon.svg" alt="" />}
          width="100%"
          placeholder="Search..."
        ></InputIcon>
      </div>
      <div className="col-12 border-bottom my-4 py-2 item">
        <SelectComponent
          items={[
            { name: "test1", id: 1 },
            { name: "test2", id: 2 },
          ]}
          TextItem="name"
          ValueItem="id"
          className="my-2"
          placeholder="Click to see the list…"
          label="Select A Task:"
          popQuestion="Select A Task:"
        ></SelectComponent>
      </div>
    </div>
  );
};

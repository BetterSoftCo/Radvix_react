import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import Dropzone from "react-dropzone";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import SimpleReactValidator from "simple-react-validator";
import { expenseController } from "../../../controllers/expense/expense_controller";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import { Media } from "../../../data/models/responses/research/researches_res";
interface RouteParams {
  id: string;
}
type StateType = {
  medias: Array<Media>;
  categoryId: number;
  title: string;
  appTaskId: number;
  description: string;
  amount: number;
  date: Date;
  appTasksList: Array<string>;
  categories: Array<string>
  External: string,
  ExternalUrl: Array<string>,
  removedMediasId: number[];
  files: Array<File>;
  
};
class ExpensePageEdit extends React.Component<RouteComponentProps<RouteParams>> {
  controller = new expenseController();
  UploadController = new UploadController();
  RoleUser = store.getState().userRole;
  date = new Date();
  handelChangeDate(target: string, params: any): void {
    this.setState({
      [target]: params,
    });
  }
  state: StateType = {
    medias: [],
    files: [],
    categoryId: 0,
    title: "",
    appTaskId: 0,
    description: "",
    amount: 0,
    date: new Date(),
    appTasksList: [],
    categories: [],
    ExternalUrl: [],
    External: "",
    removedMediasId: [],
  };
  onDrop = (files: any) => {
    this.setState({ files });
  };
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
    });
  }
  async handelUpload(id: number) {
    const formData = new FormData();
    for (let i = 0; i < this.state.files.length; i++) {
      const file = this.state.files[i];
      formData.append("Files", file);
    }
    for (let i = 0; i < this.state.ExternalUrl.length; i++) {
      const file = this.state.ExternalUrl[i];
      formData.append("ExternalUrls", file);
    }
    formData.append("UseCase", "4");
    formData.append("SectionId", id.toString());

    await this.UploadController.UloadMedia(
      formData,
      (res) => {
        this.setState({
          loading: false,
        });
        this.props.history.push(`${AppRoutes.expense_profile.replace(':id', this.props.match.params.id.toString() ?? "")}`)

      },
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  addExternalUrl() {
    let Url = [...this.state.ExternalUrl]
    if (this.state.External.length > 2) {
      Url.push(this.state.External);
    }
    this.setState({
      ExternalUrl: Url,
      External: ''
    });
  }
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  handelEditExpense() {
    const body = {
      id: parseInt(this.props.match.params.id),
      title: this.state.title,
      appTaskId: this.state.appTaskId,
      description: this.state.description,
      amount: this.state.amount,
      date: this.state.date,
      categoryId: this.state.categoryId,
      removedMediaId: this.state.removedMediasId,
    };
    this.setState({
      loading: true,
    });
    this.controller.updateExpense(
      body,
      (res) => {
        if (this.state.files.length || this.state.ExternalUrl.length) {
          this.handelUpload(res.id!);
        } else {
          debugger
          this.setState({
            loading: false,
          });
          this.props.history.push(
            `${AppRoutes.expense_profile.replace(
              ":id",
              this.props.match.params.id.toString() ?? ""
            )}`
          );
        }
      },
      (err) => {
        this.setState({
          loading: false,
        });
      }
    );
    if (this.validator.allValid()) {
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  componentDidMount() {
    this.controller.getExpenseById(
      { id: parseInt(this.props.match.params.id) },
      (res) => {
        this.setState({
          categoryId: res.categoryId,
          date: new Date(),
          title: res.title,
          description: res.description,
          appTaskTitle: res.appTaskTitle,
          amount: res.amount,
          medias: res.medias,
        });
      }
    );
    this.controller.SearchExpense(res => {
      this.setState({
        appTasksList: res.appTasks?.map(item => {
          return { label: item.title, value: item.id }
        }),
        categories: res.category?.map(item => {
          return { label: item.title, value: item.id }
        }),
      })
    }, err => { })
  }
  GetSearchExpense() {
    this.controller.SearchExpense(res => {
      this.setState({
        appTasksList: res.appTasks?.map(item => {
          return { label: item.title, value: item.id }
        }),
        categories: res.category?.map(item => {
          return { label: item.title, value: item.id }
        }),
      })
    }, err => { })
  }
  handelChangeSelect(
    target: string,
    e: { label: string; value: number }
  ) {
    this.setState({ [target]: e.value });
  }
  handelDeleteExternalLink(link: string) {
    this.setState({
      ExternalUrl: this.state.ExternalUrl.filter(item => item !== link)
    })
  }
  handelRemoveMedia(id: number) {
    this.setState({
      removedMediasId: [...this.state.removedMediasId, id],
      medias: this.state.medias.filter((item) => item.id !== id),
    });
  }
  render() {
    const files = this.state.files.map((file: any, index) => (
      <li key={index}>
        {file.name} - {file.size} bytes
        <CircleIcon
          type={ThemeCircleIcon.dark}
          width="22px"
          height="22px"
          onClick={() => {
            this.handelDeleteFile(file);
          }}
        >
          <img
            src="/images/icons/garbage_can.svg"
            alt="radvix"
            width={15}
            height={15}
          />
        </CircleIcon>
      </li>
    ));
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <h5 className="b-title d-flex align-items-center">
            <span
              onClick={() => {
                window.history.back();
              }}
              className="backPage"
            ></span>{" "}
            Edit Expense
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Expense Name:"
                  popQuestion="Expense Name:"
                  onChange={(e) => {
                    this.handleChange("title", e.target.value);
                  }}
                  value={this.state.title}
                  inValid={this.validator.message(
                    "Name",
                    this.state.title,
                    "required"
                  )}
                ></InputComponent>
              </div><ul></ul>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Associated Task:
                </span>
                <SelectComponent
                  items={this.state.appTasksList}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  isMulti={false}
                  onChange={(e) => {
                    this.handelChangeSelect("appTaskId", e);
                  }}
                ></SelectComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Description:"
                  optional="optional"
                  onChange={(e) => {
                    this.handleChange("description", e.target.value);
                  }}
                  value={this.state.description}
                ></InputComponent>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-6">
                  <div className="item">
                    <InputComponent
                      type={InputType.text}
                      label="Amount:"
                      popQuestion="Amount:"
                      placeholder="$0.00"
                      onChange={(e) => {
                        this.handleChange("amount", e.target.value);
                      }}
                      value={String(this.state.amount)}
                      inValid={this.validator.message(
                        "amount",
                        this.state.description,
                        "required"
                      )}
                    ></InputComponent>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span className="label d-flex align-items-center">
                      Scheduled Timeline:{" "}
                      <CircleIcon
                        width="20px"
                        height="20px"
                        type={ThemeCircleIcon.dark}
                        backgroundColor="transparent"
                        border="1px solid #D5D5D5"
                        fontSize="10px"
                        color="#D5D5D5"
                      >
                        <i className="fas fa-question"></i>
                      </CircleIcon>
                    </span>
                    <DatePicker
                      selected={this.state.date}
                      onChange={(e) => {
                        this.handelChangeDate("date", e);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Protocols and Documents:
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="15px"
                    className="mx-2"
                  ></MainButton>
                  <CircleIcon
                    width="20px"
                    height="20px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="transparent"
                    border="1px solid #D5D5D5"
                    fontSize="10px"
                    color="#D5D5D5"
                  >
                    <i className="fas fa-question"></i>
                  </CircleIcon>
                </span>
                <Dropzone onDrop={this.onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section className="container fileUploadBox">
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <MainButton
                          type={MainButtonType.light}
                          minHeight="30px"
                          minWidth="179px"
                          fontSize="14px"
                          borderRadius="50px"
                          backgroundColor="#fff"
                          border="1px solid #707070"
                          color="#707070"
                          className="mt-4"
                          children={
                            <div className="d-flex justify-content-between align-items-center">
                              <img
                                src="/Images/icons/cloud_computing.svg"
                                alt="sssss"
                                height="20"

                              />{" "}
                              <span className="flex-fill">Browse Local Files</span>
                            </div>
                          }
                        ></MainButton>
                        <p>
                          Or drag and drop files here
                        </p>
                      </div>
                      <aside>
                        
                        <ul>{files}</ul>
                      </aside>
                    </section>
                  )}
                </Dropzone>
                <ul className="file-list mt-3">
                  {this.state.medias
                    .filter((item) => item.externalUrl === null)
                    .map((item, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-center mb-1"
                      >
                        <img
                          src="/images/icons/pdf_icon.svg"
                          alt=""
                          className="mx-2"
                        />{" "}
                        {item.title}
                        <CircleIcon
                          type={ThemeCircleIcon.dark}
                          width="22px"
                          height="22px"
                          className="mx-3 pointer"
                          onClick={() => {
                            this.handelRemoveMedia(item.id!);
                          }}
                        >
                          <img
                            src="/images/icons/garbage_can.svg"
                            alt="radvix"
                            width={15}
                            height={15}
                          />
                        </CircleIcon>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="item d-flex justify-content-between align-items-center">
                <InputComponent
                  type={InputType.text}
                  placeholder="https://"
                  className="mx-2"
                  value={this.state.External}
                  onChange={(e) => {
                    this.handleChange("External", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "External",
                    this.state.description,
                    "required"
                  )}
                ></InputComponent>
                <CircleIcon
                  width="36px"
                  height="36px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="#9D9D9D"
                  fontSize="18px"
                  color="#ffffff"
                  className="px-3"
                  onClick={() => { this.addExternalUrl() }}
                >
                  <i className="fas fa-plus"></i>
                </CircleIcon>
              </div>
              <ul className="file-list mt-3">
                {this.state.medias
                  .filter((item) => item.externalUrl)
                  .map((item, index) => (
                    <li
                      key={index}
                      className="my-2 d-flex flex-column flex-md-row"
                    >
                      <MainButton
                        children={item.externalUrl}
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#F5F5F5"
                        color="#096BFF"
                        className="text-truncate"
                      ></MainButton>
                      <CircleIcon
                        type={ThemeCircleIcon.dark}
                        width="22px"
                        height="22px"
                        className="mx-3"
                        onClick={() => {
                          this.handelRemoveMedia(item.id!);
                        }}
                      >
                        <img
                          src="/images/icons/garbage_can.svg"
                          alt="radvix"
                          width={15}
                          height={15}
                        />
                      </CircleIcon>
                    </li>
                  ))}
                {this.state.ExternalUrl.map((item) => (
                  <li className="my-2 d-flex flex-column flex-md-row">
                    <MainButton
                      children={item}
                      type={MainButtonType.dark}
                      borderRadius="24px"
                      fontSize="14px"
                      backgroundColor="#F5F5F5"
                      color="#096BFF"
                    ></MainButton>
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3 pointer"
                      onClick={() => this.handelDeleteExternalLink(item)}
                    >
                      <img
                        src="/images/icons/garbage_can.svg"
                        alt="radvix"
                        width={15}
                        height={15}
                      />
                    </CircleIcon>
                  </li>
                ))}
              </ul>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Category:
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="15px"
                    className="mx-2"
                  ></MainButton>
                  <CircleIcon
                    width="20px"
                    height="20px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="transparent"
                    border="1px solid #D5D5D5"
                    fontSize="10px"
                    color="#D5D5D5"
                  >
                    <i className="fas fa-question"></i>
                  </CircleIcon>
                </span>
                <div className="d-flex justify-content-between align-items-center">
                  <SelectComponent
                    items={this.state.categories}
                    TextItem="name"
                    ValueItem="id"
                    className="my-2 w-100"
                    placeholder="Click to see the list…"
                    isMulti={false}
                    onChange={(e) => {
                      this.handelChangeSelect("categoryId", e);
                    }}
                  ></SelectComponent>
                  <CircleIcon
                    width="36px"
                    height="36px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#9D9D9D"
                    fontSize="18px"
                    color="#ffffff"
                    className="mx-2 px-3"
                  >
                    <i className="fas fa-list"></i>
                  </CircleIcon>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
              <MainButton
                type={MainButtonType.dark}
                children={"Edit"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={() => { this.handelEditExpense() }}
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ExpensePageEdit);

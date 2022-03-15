import { UserRoles } from "./utils";

enum Status {
  OnGoing,
  Delayed,
  OnHold,
  Completed,
}
enum Priority {
  Low,
  Medium,
  High,
}
enum mediaType {
  Image,
  Svg,
  Video,
  Pdf,
}
enum TopicType {
  Research,
  GeneralTopic,
  Task,
  Data,
  Equipment,
  Laboratory,
  Team,
  Publication,
  Expense,
  Ticket,
}
declare global {
  interface Number {
    isStatus(): string;
    isPriority(): string;
    isMedia(): string;
    isRole(): string;
    isTopic(): string;
  }
}
Number.prototype.isStatus = function (): string {
  switch (Number(this)) {
    case Status.OnGoing:
      return "OnGoing";
    case Status.Delayed:
      return "Delayed";
    case Status.OnHold:
      return "OnHold";
    case Status.Completed:
      return "Completed";
    default:
      return "";
  }
};
Number.prototype.isPriority = function (): string {
  switch (Number(this)) {
    case Priority.Low:
      return "Low";
    case Status.Delayed:
      return "Delayed";
    case Priority.Medium:
      return "Medium";
    case Priority.High:
      return "High";
    default:
      return "";
  }
};
Number.prototype.isRole = function (): string {
  switch (Number(this)) {
    case UserRoles.Admin:
      return "Admin";
    case UserRoles.L1Client:
      return "Level 1 Client";
    case UserRoles.L1User:
      return "Level 1 ";
    case UserRoles.L2User:
      return "Level 2 ";
    case UserRoles.L3User:
      return "Level 3 ";
    default:
      return "";
  }
};
Number.prototype.isMedia = function (): string {
  switch (Number(this)) {
    case mediaType.Image:
      return "file_png.svg";
    case mediaType.Pdf:
      return "file_pdf.svg";
    case mediaType.Svg:
      return "file_svg.svg";
    case mediaType.Video:
      return "file_mp4.svg";
    default:
      return "";
  }
};
Number.prototype.isTopic = function (): string {
  switch (Number(this)) {
    case TopicType.Data:
      return "Data";
    case TopicType.Equipment:
      return "Equipment";
    case TopicType.Expense:
      return "Expense";
    case TopicType.GeneralTopic:
      return "General";
    case TopicType.Laboratory:
      return "Laboratory";
    case TopicType.Publication:
      return "Publication";
    case TopicType.Research:
      return "Research";
    case TopicType.Task:
      return "Task";
    case TopicType.Team:
      return "Team";
    case TopicType.Ticket:
      return "Ticket";
    default:
      return "";
  }
};
export {};

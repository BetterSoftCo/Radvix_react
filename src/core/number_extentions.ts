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
declare global {
  interface Number {
    isStatus(): string;
    isPriority(): string;
    isMedia(): string;
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
export {};

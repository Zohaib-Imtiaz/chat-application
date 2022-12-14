import { Size } from "../enums/Avatar";

interface AvatarProps {
  size?: `${Size}`;
  classes?: string;
}

export default function Avatar({ size, classes }: AvatarProps) {
  const sizeClass: string = (function getClasses(param = "medium") {
    let className: string = "";
    switch (param) {
      case "small":
        className = "h-[24px] w-[24px] text-[12px] px-2";
        break;

      case "medium":
        className = "h-10 w-10 px-4";
        break;

      case "large":
        className = "h-12 w-12 px-6";
        break;
    }
    return className;
  })(size);

  return (
    <div
      className={`${sizeClass} mx-2 grid items-center justify-center overflow-hidden rounded-full bg-gray-400 text-gray-600 dark:text-gray-300 ${classes}`}
    >
      JL
    </div>
  );
}

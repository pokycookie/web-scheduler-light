import { CookieComponent } from "../lib/cookie-node";
import FontAwesomeIcon, { IFontAwesomeIcon } from "./fontAwesomeIcon";

export interface ICheckBox {}

class CheckBox extends CookieComponent<ICheckBox> {
  private isCheck = false;

  constructor(props: ICheckBox) {
    super(props);
  }

  private clickHandler = () => {
    this.isCheck = !this.isCheck;
  };

  render() {
    return FontAwesomeIcon.create<IFontAwesomeIcon>({
      type: this.isCheck ? "solid" : "regular",
      icon: this.isCheck ? "square-check" : "square",
      onClick: () => {
        this.clickHandler;
      },
    });
  }
}

export default CheckBox;

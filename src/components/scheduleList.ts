import { CookieComponent, CookieNode } from "../lib/cookie-node";
import CheckBox, { ICheckBox } from "./checkBox";

export interface ISchdeuleList {
  text: string;
}

class ScheduleList extends CookieComponent<ISchdeuleList> {
  constructor(props: ISchdeuleList) {
    super(props);
  }

  render() {
    return CookieNode.li().create([
      CheckBox.create<ICheckBox>({}),
      CookieNode.p({ text: this.props.text }).create(),
      CookieNode.i({ className: "fa-solid fa-circle-minus" }).create(),
    ]);
  }
}

export default ScheduleList;

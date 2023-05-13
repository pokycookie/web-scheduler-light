import { CookieComponent, CookieNode } from "../lib/cookie-node";

export interface IFontAwesomeIcon {
  type: "regular" | "solid";
  icon: string;
  onClick?: () => void;
}

class FontAwesomeIcon extends CookieComponent<IFontAwesomeIcon> {
  constructor(props: IFontAwesomeIcon) {
    super(props);
  }

  render() {
    const node = CookieNode.div({ className: "icon" }).create(
      CookieNode.i({
        className: `fa-${this.props.type} fa-${this.props.icon}`,
      }).create()
    );

    if (this.props.onClick) node.addEventListener("click", this.props.onClick);

    return node;
  }
}

export default FontAwesomeIcon;

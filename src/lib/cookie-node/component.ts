import { CookieNode } from "./node";

export class CookieComponent<T> {
  protected props: T;

  constructor(props: T) {
    this.props = props;
  }

  render() {
    return CookieNode.div().create();
  }

  static create<U>(props: U) {
    return new this(props).render();
  }
}

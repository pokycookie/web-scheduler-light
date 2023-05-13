interface ICookieNodeOptions {
  id?: string;
  className?: string;
  text?: string;
  attribute?: {
    [key: string]: any;
  };
}

export class CookieNode {
  private tag: keyof HTMLElementTagNameMap;
  private id: string | null = null;
  private className: string | null = null;
  private text: string | null = null;
  private attribute: { [key: string]: string } | null = null;

  constructor(tag: keyof HTMLElementTagNameMap) {
    this.tag = tag;
  }

  set(options?: ICookieNodeOptions) {
    if (!options) return this;
    if (options.id) this.id = options.id;
    if (options.className) this.className = options.className;
    if (options.text) this.text = options.text;
    if (options.attribute) this.attribute = options.attribute;

    return this;
  }

  create(children?: HTMLElement | HTMLElement[]) {
    const node = document.createElement(this.tag);
    if (this.id) node.id = this.id;
    if (this.className) node.className = this.className;
    if (this.text) node.innerText = this.text;
    if (this.attribute) {
      for (const key of Object.keys(this.attribute)) {
        node.setAttribute(key, this.attribute[key]);
      }
    }
    if (children) {
      if (Array.isArray(children)) {
        children.forEach((child) => {
          node.appendChild(child);
        });
      } else {
        node.appendChild(children);
      }
    }
    return node;
  }

  static a(options?: ICookieNodeOptions) {
    return new CookieNode("a").set(options);
  }
  static abbr(options?: ICookieNodeOptions) {
    return new CookieNode("abbr").set(options);
  }
  static address(options?: ICookieNodeOptions) {
    return new CookieNode("address").set(options);
  }
  static area(options?: ICookieNodeOptions) {
    return new CookieNode("area").set(options);
  }
  static article(options?: ICookieNodeOptions) {
    return new CookieNode("article").set(options);
  }
  static aside(options?: ICookieNodeOptions) {
    return new CookieNode("aside").set(options);
  }
  static audio(options?: ICookieNodeOptions) {
    return new CookieNode("audio").set(options);
  }
  static b(options?: ICookieNodeOptions) {
    return new CookieNode("b").set(options);
  }
  static base(options?: ICookieNodeOptions) {
    return new CookieNode("base").set(options);
  }
  static bdi(options?: ICookieNodeOptions) {
    return new CookieNode("bdi").set(options);
  }
  static bdo(options?: ICookieNodeOptions) {
    return new CookieNode("bdo").set(options);
  }
  static blockquote(options?: ICookieNodeOptions) {
    return new CookieNode("blockquote").set(options);
  }
  static body(options?: ICookieNodeOptions) {
    return new CookieNode("body").set(options);
  }
  static br(options?: ICookieNodeOptions) {
    return new CookieNode("br").set(options);
  }
  static button(options?: ICookieNodeOptions) {
    return new CookieNode("button").set(options);
  }
  static canvas(options?: ICookieNodeOptions) {
    return new CookieNode("canvas").set(options);
  }
  static caption(options?: ICookieNodeOptions) {
    return new CookieNode("caption").set(options);
  }
  static cite(options?: ICookieNodeOptions) {
    return new CookieNode("cite").set(options);
  }
  static code(options?: ICookieNodeOptions) {
    return new CookieNode("code").set(options);
  }
  static col(options?: ICookieNodeOptions) {
    return new CookieNode("col").set(options);
  }
  static colgroup(options?: ICookieNodeOptions) {
    return new CookieNode("colgroup").set(options);
  }
  static data(options?: ICookieNodeOptions) {
    return new CookieNode("data").set(options);
  }
  static datalist(options?: ICookieNodeOptions) {
    return new CookieNode("datalist").set(options);
  }
  static dd(options?: ICookieNodeOptions) {
    return new CookieNode("dd").set(options);
  }
  static del(options?: ICookieNodeOptions) {
    return new CookieNode("del").set(options);
  }
  static details(options?: ICookieNodeOptions) {
    return new CookieNode("details").set(options);
  }
  static dfn(options?: ICookieNodeOptions) {
    return new CookieNode("dfn").set(options);
  }
  static dialog(options?: ICookieNodeOptions) {
    return new CookieNode("dialog").set(options);
  }
  static div(options?: ICookieNodeOptions) {
    return new CookieNode("div").set(options);
  }
  static dl(options?: ICookieNodeOptions) {
    return new CookieNode("dl").set(options);
  }
  static dt(options?: ICookieNodeOptions) {
    return new CookieNode("dt").set(options);
  }
  static em(options?: ICookieNodeOptions) {
    return new CookieNode("em").set(options);
  }
  static embed(options?: ICookieNodeOptions) {
    return new CookieNode("embed").set(options);
  }
  static fieldset(options?: ICookieNodeOptions) {
    return new CookieNode("fieldset").set(options);
  }
  static figcaption(options?: ICookieNodeOptions) {
    return new CookieNode("figcaption").set(options);
  }
  static figure(options?: ICookieNodeOptions) {
    return new CookieNode("figure").set(options);
  }
  static footer(options?: ICookieNodeOptions) {
    return new CookieNode("footer").set(options);
  }
  static form(options?: ICookieNodeOptions) {
    return new CookieNode("form").set(options);
  }
  static h1(options?: ICookieNodeOptions) {
    return new CookieNode("h1").set(options);
  }
  static h2(options?: ICookieNodeOptions) {
    return new CookieNode("h2").set(options);
  }
  static h3(options?: ICookieNodeOptions) {
    return new CookieNode("h3").set(options);
  }
  static h4(options?: ICookieNodeOptions) {
    return new CookieNode("h4").set(options);
  }
  static h5(options?: ICookieNodeOptions) {
    return new CookieNode("h5").set(options);
  }
  static h6(options?: ICookieNodeOptions) {
    return new CookieNode("h6").set(options);
  }
  static head(options?: ICookieNodeOptions) {
    return new CookieNode("head").set(options);
  }
  static header(options?: ICookieNodeOptions) {
    return new CookieNode("header").set(options);
  }
  static hgroup(options?: ICookieNodeOptions) {
    return new CookieNode("hgroup").set(options);
  }
  static hr(options?: ICookieNodeOptions) {
    return new CookieNode("hr").set(options);
  }
  static html(options?: ICookieNodeOptions) {
    return new CookieNode("html").set(options);
  }
  static i(options?: ICookieNodeOptions) {
    return new CookieNode("i").set(options);
  }
  static iframe(options?: ICookieNodeOptions) {
    return new CookieNode("iframe").set(options);
  }
  static img(options?: ICookieNodeOptions) {
    return new CookieNode("img").set(options);
  }
  static input(options?: ICookieNodeOptions) {
    return new CookieNode("input").set(options);
  }
  static ins(options?: ICookieNodeOptions) {
    return new CookieNode("ins").set(options);
  }
  static kbd(options?: ICookieNodeOptions) {
    return new CookieNode("kbd").set(options);
  }
  static label(options?: ICookieNodeOptions) {
    return new CookieNode("label").set(options);
  }
  static legend(options?: ICookieNodeOptions) {
    return new CookieNode("legend").set(options);
  }
  static li(options?: ICookieNodeOptions) {
    return new CookieNode("li").set(options);
  }
  static link(options?: ICookieNodeOptions) {
    return new CookieNode("link").set(options);
  }
  static main(options?: ICookieNodeOptions) {
    return new CookieNode("main").set(options);
  }
  static map(options?: ICookieNodeOptions) {
    return new CookieNode("map").set(options);
  }
  static mark(options?: ICookieNodeOptions) {
    return new CookieNode("mark").set(options);
  }
  static menu(options?: ICookieNodeOptions) {
    return new CookieNode("menu").set(options);
  }
  static meta(options?: ICookieNodeOptions) {
    return new CookieNode("meta").set(options);
  }
  static meter(options?: ICookieNodeOptions) {
    return new CookieNode("meter").set(options);
  }
  static nav(options?: ICookieNodeOptions) {
    return new CookieNode("nav").set(options);
  }
  static noscript(options?: ICookieNodeOptions) {
    return new CookieNode("noscript").set(options);
  }
  static object(options?: ICookieNodeOptions) {
    return new CookieNode("object").set(options);
  }
  static ol(options?: ICookieNodeOptions) {
    return new CookieNode("ol").set(options);
  }
  static optgroup(options?: ICookieNodeOptions) {
    return new CookieNode("optgroup").set(options);
  }
  static option(options?: ICookieNodeOptions) {
    return new CookieNode("option").set(options);
  }
  static output(options?: ICookieNodeOptions) {
    return new CookieNode("output").set(options);
  }
  static p(options?: ICookieNodeOptions) {
    return new CookieNode("p").set(options);
  }
  static picture(options?: ICookieNodeOptions) {
    return new CookieNode("picture").set(options);
  }
  static pre(options?: ICookieNodeOptions) {
    return new CookieNode("pre").set(options);
  }
  static progress(options?: ICookieNodeOptions) {
    return new CookieNode("progress").set(options);
  }
  static q(options?: ICookieNodeOptions) {
    return new CookieNode("q").set(options);
  }
  static rp(options?: ICookieNodeOptions) {
    return new CookieNode("rp").set(options);
  }
  static rt(options?: ICookieNodeOptions) {
    return new CookieNode("rt").set(options);
  }
  static ruby(options?: ICookieNodeOptions) {
    return new CookieNode("ruby").set(options);
  }
  static s(options?: ICookieNodeOptions) {
    return new CookieNode("s").set(options);
  }
  static samp(options?: ICookieNodeOptions) {
    return new CookieNode("samp").set(options);
  }
  static script(options?: ICookieNodeOptions) {
    return new CookieNode("script").set(options);
  }
  static section(options?: ICookieNodeOptions) {
    return new CookieNode("section").set(options);
  }
  static select(options?: ICookieNodeOptions) {
    return new CookieNode("select").set(options);
  }
  static slot(options?: ICookieNodeOptions) {
    return new CookieNode("slot").set(options);
  }
  static small(options?: ICookieNodeOptions) {
    return new CookieNode("small").set(options);
  }
  static source(options?: ICookieNodeOptions) {
    return new CookieNode("source").set(options);
  }
  static span(options?: ICookieNodeOptions) {
    return new CookieNode("span").set(options);
  }
  static strong(options?: ICookieNodeOptions) {
    return new CookieNode("strong").set(options);
  }
  static style(options?: ICookieNodeOptions) {
    return new CookieNode("style").set(options);
  }
  static sub(options?: ICookieNodeOptions) {
    return new CookieNode("sub").set(options);
  }
  static summary(options?: ICookieNodeOptions) {
    return new CookieNode("summary").set(options);
  }
  static sup(options?: ICookieNodeOptions) {
    return new CookieNode("sup").set(options);
  }
  static table(options?: ICookieNodeOptions) {
    return new CookieNode("table").set(options);
  }
  static tbody(options?: ICookieNodeOptions) {
    return new CookieNode("tbody").set(options);
  }
  static td(options?: ICookieNodeOptions) {
    return new CookieNode("td").set(options);
  }
  static template(options?: ICookieNodeOptions) {
    return new CookieNode("template").set(options);
  }
  static textarea(options?: ICookieNodeOptions) {
    return new CookieNode("textarea").set(options);
  }
  static tfoot(options?: ICookieNodeOptions) {
    return new CookieNode("tfoot").set(options);
  }
  static th(options?: ICookieNodeOptions) {
    return new CookieNode("th").set(options);
  }
  static thead(options?: ICookieNodeOptions) {
    return new CookieNode("thead").set(options);
  }
  static time(options?: ICookieNodeOptions) {
    return new CookieNode("time").set(options);
  }
  static title(options?: ICookieNodeOptions) {
    return new CookieNode("title").set(options);
  }
  static tr(options?: ICookieNodeOptions) {
    return new CookieNode("tr").set(options);
  }
  static track(options?: ICookieNodeOptions) {
    return new CookieNode("track").set(options);
  }
  static u(options?: ICookieNodeOptions) {
    return new CookieNode("u").set(options);
  }
  static ul(options?: ICookieNodeOptions) {
    return new CookieNode("ul").set(options);
  }
  static var(options?: ICookieNodeOptions) {
    return new CookieNode("var").set(options);
  }
  static video(options?: ICookieNodeOptions) {
    return new CookieNode("video").set(options);
  }
  static wbr(options?: ICookieNodeOptions) {
    return new CookieNode("wbr").set(options);
  }
}

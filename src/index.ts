import "./styles/global.scss";
import ScheduleList, { ISchdeuleList } from "./components/scheduleList";
import { create } from "./lib/cookie-node";
import "@fortawesome/fontawesome-free/js/all.js";

const root = document.getElementById("root");
const schedule = document.getElementById("schedule");

let state = {
  items: [1, 2, 3, 4, 5, 6, 7],
};

const render = () => {
  const { items } = state;
  if (!schedule) return;
  create(
    schedule,
    items.map((item) => {
      return ScheduleList.create<ISchdeuleList>({ text: String(item) });
    })
  );
};

render();

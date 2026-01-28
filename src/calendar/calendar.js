import { h } from "preact";
import { useState } from "preact/hooks";

export function Calendar() {
  const today = new Date();
  const [date] = useState(today);

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  return (
    <div class="calendar">
      <div class="header">
        {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
      </div>
      <div class="grid">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
          <div class="day-name">{d}</div>
        ))}
        {days.map(d => (
          <div class={"cell " + (d === today.getDate() ? "today" : "")}>
            {d || ""}
          </div>
        ))}
      </div>
    </div>
  );
}

import { h, render } from "preact";
import { Calendar } from "../calendar/calendar";

class MiniCalendar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.shadowRoot.appendChild(this.getStyles());
    this.shadowRoot.appendChild(mountPoint);

    render(<Calendar />, mountPoint);
  }

  getStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .calendar {
        font-family: Arial, sans-serif;
        width: 280px;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        background: white;
      }
      .header {
        text-align: center;
        font-weight: bold;
        margin-bottom: 8px;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
        font-size: 12px;
      }
      .day-name {
        font-weight: bold;
        text-align: center;
        color: #666;
      }
      .cell {
        text-align: center;
        padding: 6px 0;
        border-radius: 4px;
      }
      .cell.today {
        background: #4f46e5;
        color: white;
        font-weight: bold;
      }
    `;
    return style;
  }
}

customElements.define("mini-calendar", MiniCalendar);


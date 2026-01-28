import { h, render } from "preact";
import { SignupForm } from "./signup";

class SignupWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const mount = document.createElement("div");
    const contentPath = this.getAttribute("content-path");
    const aemAuthor = this.getAttribute("aem-author");

    this.shadowRoot.appendChild(this.styles());
    this.shadowRoot.appendChild(mount);

    render(
      <SignupForm contentPath={contentPath} aemAuthor={aemAuthor} />,
      mount
    );
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
      .signup { font-family: Arial; width:260px; display:flex; flex-direction:column; gap:8px; padding:12px; border:1px solid #ddd; border-radius:8px; background:#fff; }
      .title { font-weight:bold; text-align:center; }
      input { padding:6px; border-radius:4px; border:1px solid #ccc; }
      button { padding:8px; border:none; border-radius:4px; background:#4f46e5; color:#fff; cursor:pointer; }
      .status { font-size:12px; text-align:center; }
    `;
    return style;
  }
}

customElements.define("signup-widget", SignupWidget);


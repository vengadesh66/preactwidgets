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
      * { box-sizing: border-box; }
      
      .signup-container {
        display: flex;
        max-width: 1200px;
        min-height: 500px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      }
      
      /* Left Column - Promotional Content */
      .promo-column {
        flex: 1;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        background-size: cover;
        background-position: center;
        position: relative;
        padding: 48px;
        color: #fff;
        display: flex;
        align-items: center;
      }
      
      .promo-overlay {
        position: relative;
        z-index: 1;
      }
      
      .promo-column::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 0;
      }
      
      .promo-title {
        font-size: 36px;
        font-weight: 700;
        margin: 0 0 16px 0;
        line-height: 1.2;
      }
      
      .promo-subtitle {
        font-size: 20px;
        font-weight: 500;
        margin: 0 0 24px 0;
        opacity: 0.95;
      }
      
      .promo-description {
        font-size: 16px;
        line-height: 1.6;
        margin: 0;
        opacity: 0.9;
      }
      
      /* Right Column - Form */
      .form-column {
        flex: 1;
        background: #fff;
        padding: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .signup {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      
      .title {
        font-size: 28px;
        font-weight: 700;
        text-align: center;
        color: #1a202c;
        margin-bottom: 8px;
      }
      
      label {
        font-size: 14px;
        font-weight: 600;
        color: #4a5568;
        margin-bottom: -8px;
      }
      
      input {
        padding: 12px 16px;
        border-radius: 8px;
        border: 2px solid #e2e8f0;
        font-size: 16px;
        transition: border-color 0.2s;
      }
      
      input:focus {
        outline: none;
        border-color: #667eea;
      }
      
      button {
        padding: 14px 24px;
        border: none;
        border-radius: 8px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        margin-top: 8px;
      }
      
      button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
      }
      
      button:active {
        transform: translateY(0);
      }
      
      .status {
        font-size: 14px;
        text-align: center;
        padding: 8px;
        border-radius: 6px;
        background: #f0fdf4;
        color: #166534;
      }
      
      /* Responsive Design */
      @media (max-width: 768px) {
        .signup-container {
          flex-direction: column;
        }
        
        .promo-column {
          min-height: 300px;
          padding: 32px 24px;
        }
        
        .promo-title {
          font-size: 28px;
        }
        
        .promo-subtitle {
          font-size: 18px;
        }
        
        .form-column {
          padding: 32px 24px;
        }
        
        .title {
          font-size: 24px;
        }
      }
    `;
    return style;
  }
}

customElements.define("signup-widget", SignupWidget);


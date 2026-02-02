import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export function SignupForm({ contentPath, aemAuthor }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [content, setContent] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!contentPath) return;

    const isAuthor =
      window.location.hostname.includes('adobeaemcloud.com') ||
      window.location.hostname.includes('localhost');

    // Function to set safe defaults
    const setDefaultContent = () => {
      setContent({
        promoTitle: "Join Our Community",
        promoSubtitle: "Get exclusive updates",
        promoDescription: "Sign up today and be the first to know about our latest updates, exclusive offers, and community events.",
        promoBackgroundImage: "",
        title: "Join Our Newsletter",
        nameLabel: "Your Name",
        emailLabel: "Your Email",
        buttonText: "Sign Up"
      });
    };

    // AUTHOR MODE → fetch Content Fragment from AEM Author
    if (isAuthor && aemAuthor) {
      const url = `${aemAuthor}/api/assets${contentPath}.json`;

      fetch(url, { credentials: 'include' })
        .then(r => r.json())
        .then(data => {
          const elements = data?.elements || {};

          setContent({
            promoTitle: elements.promoTitle?.value || "Join Our Community",
            promoSubtitle: elements.promoSubtitle?.value || "",
            promoDescription: elements.promoDescription?.value || "Sign up today and be the first to know about our latest updates, exclusive offers, and community events.",
            promoBackgroundImage: elements.promoBackgroundImage?.value || "",
            title: elements.title?.value || "Join Our Newsletter",
            nameLabel: elements.nameLabel?.value || "Your Name",
            emailLabel: elements.emailLabel?.value || "Your Email",
            buttonText: elements.buttonText?.value || "Sign Up"
          });
        })
        .catch(setDefaultContent);
    }
    // PUBLISH MODE → don't call AEM
    else {
      setDefaultContent();
    }

  }, [contentPath, aemAuthor]);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Submitting...");
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" }
    });
    setStatus("✅ Submitted");
  };

  if (!content) return <div>Loading...</div>;

  const promoStyle = content.promoBackgroundImage
    ? { backgroundImage: `url(${content.promoBackgroundImage})` }
    : {};

  return (
    <div class="signup-container">
      {/* Left Column - Promotional Content */}
      <div class="promo-column" style={promoStyle}>
        <div class="promo-overlay">
          <h2
            class="promo-title"
            data-aue-resource={contentPath}
            data-aue-prop="promoTitle"
            data-aue-type="text"
            data-aue-host={aemAuthor}
          >
            {content.promoTitle}
          </h2>
          
          {content.promoSubtitle && (
            <h3
              class="promo-subtitle"
              data-aue-resource={contentPath}
              data-aue-prop="promoSubtitle"
              data-aue-type="text"
              data-aue-host={aemAuthor}
            >
              {content.promoSubtitle}
            </h3>
          )}
          
          <p
            class="promo-description"
            data-aue-resource={contentPath}
            data-aue-prop="promoDescription"
            data-aue-type="richtext"
            data-aue-host={aemAuthor}
          >
            {content.promoDescription}
          </p>
        </div>
      </div>

      {/* Right Column - Signup Form */}
      <div class="form-column">
        <form class="signup" onSubmit={handleSubmit}>
          <div
            class="title"
            data-aue-resource={contentPath}
            data-aue-prop="title"
            data-aue-type="text"
            data-aue-host={aemAuthor}
          >
            {content.title}
          </div>

          <label
            data-aue-resource={contentPath}
            data-aue-prop="nameLabel"
            data-aue-type="text"
            data-aue-host={aemAuthor}
          >
            {content.nameLabel}
          </label>
          <input
            type="text"
            name="name"
            placeholder={content.nameLabel}
            value={form.name}
            onInput={handleChange}
            required
          />

          <label
            data-aue-resource={contentPath}
            data-aue-prop="emailLabel"
            data-aue-type="text"
            data-aue-host={aemAuthor}
          >
            {content.emailLabel}
          </label>
          <input
            type="email"
            name="email"
            placeholder={content.emailLabel}
            value={form.email}
            onInput={handleChange}
            required
          />

          <button
            type="submit"
            data-aue-resource={contentPath}
            data-aue-prop="buttonText"
            data-aue-type="text"
            data-aue-host={aemAuthor}
          >
            {content.buttonText}
          </button>

          {status && <div class="status">{status}</div>}
        </form>
      </div>
    </div>
  );
}

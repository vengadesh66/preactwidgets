import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export function SignupForm({ contentPath, aemAuthor }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [content, setContent] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`${contentPath}.model.json`)
      .then(r => r.json())
      .then(data => setContent(data))
      .catch(() =>
        setContent({
          title: "Join Our Newsletter",
          nameLabel: "Your Name",
          emailLabel: "Your Email",
          buttonText: "Sign Up"
        })
      );
  }, [contentPath]);

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

  return (
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
  );
}

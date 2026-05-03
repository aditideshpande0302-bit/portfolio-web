import { footerHTML } from './shared.js';

function contactHTML() {
  return `
    <div class="contact-root">
      <p class="contact-eyebrow">Get in touch</p>
      <h1 class="contact-heading">Let's work<br>together.</h1>
      <p class="contact-intro">Open to product design, UI/UX design, research, and collaboration opportunities. Whether it's a full-time role, freelance project, or a conversation — I'd love to hear from you.</p>

      <div class="contact-grid">
        <a class="contact-card" href="mailto:aditideshpande0302@gmail.com">
          <span class="contact-card-icon">Email</span>
          <p class="contact-card-label">Email</p>
          <p class="contact-card-title">aditideshpande0302@gmail.com</p>
          <p class="contact-card-desc">Send me a message directly — I typically respond within 1–2 days.</p>
        </a>
        <a class="contact-card" href="https://linkedin.com/in/aditi" target="_blank">
          <span class="contact-card-icon">LinkedIn</span>
          <p class="contact-card-label">LinkedIn</p>
          <p class="contact-card-title">Connect on LinkedIn</p>
          <p class="contact-card-desc">Find me on LinkedIn to view my full professional profile and experience.</p>
        </a>
        <button class="contact-card" onclick="window.open('https://drive.google.com/file/d/1fPzEONrtjJCbjkJK1fO4UbxTC8Oh8dmU/view?usp=drive_link','_blank')">
          <span class="contact-card-icon">Resume</span>
          <p class="contact-card-label">Resume</p>
          <p class="contact-card-title">Download Resume</p>
          <p class="contact-card-desc">View my full work history, skills, and experience in one document.</p>
        </button>

      </div>

      <div class="contact-availability">
        <div class="contact-avail-dot"></div>
        <span class="contact-avail-text">Available for new opportunities — full-time and freelance</span>
      </div>
    </div>
    ${footerHTML()}`;
}

export default contactHTML;

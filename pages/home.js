function homeHTML() {
  return `
    <div class="home-root">
      <div class="hero">
        <p class="greeting">Hi, I'm Aditi</p>
        <h1 class="headline">
          <span class="headline-line"><span class="accent">Product Designer</span> specializing in</span>
          <span class="headline-line">interaction design and the user</span>
          <span class="headline-line">behaviors that make an</span>
          <span class="headline-line">experience.</span>
        </h1>
        <p class="subtext">I work end to end from framing the problem to shaping flows, refining interactions, and validating decisions through prototypes. Grounded in user psychology, accessibility, and an evolving AI-integrated workflow.</p>
      </div>
      <div class="cards">
        <button class="card" onclick="goTo('work')">
          <span class="card-title">Selected Work</span>
          <span class="card-desc">5+ case studies across ecommerce, AI, civic tech, accessibility, and mobile.</span>
          <span class="card-arrow">→</span>
        </button>
        <button class="card" onclick="goTo('about')">
          <span class="card-title">About Me</span>
          <span class="card-desc">2+ years of experience in designing end-to-end digital products.</span>
          <span class="card-arrow">→</span>
        </button>
      </div>
      <div class="availability">
        <div class="avail-dot"></div>
        <span class="avail-text">Available for new opportunities</span>
      </div>
    </div>`;
}

export default homeHTML;

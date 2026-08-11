const stars = document.getElementById("stars");

if (stars) {
  const count = 90;

  for (let i = 0; i < count; i += 1) {
    const star = document.createElement("span");
    star.className = "star";

    const size = Math.random() * 2 + 1; // small, slightly varied
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 4;
    const opacity = 0.35 + Math.random() * 0.55;
    const rot = (Math.random() - 0.5) * 30; // slight rotation for handmade feel

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${left}%`;
    star.style.top = `${top}%`;
    star.style.opacity = `${opacity}`;
    star.style.animationDelay = `${delay}s`;
    star.style.transform = `rotate(${rot}deg)`;

    stars.appendChild(star);
  }
}

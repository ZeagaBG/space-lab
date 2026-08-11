function calculateTravel() {
  const planet = document.getElementById("planet");
  const distance = parseFloat(planet.value);
  const planetName = planet.options[planet.selectedIndex].text;
  const resultBox = document.getElementById("result");

  const airplane = 900;
  const rocket = 40000;
  const light = 299792;

  const airplaneYears = (distance / airplane / 24 / 365).toFixed(1);
  const rocketYears = (distance / rocket / 24 / 365).toFixed(1);
  const lightSeconds = (distance / light).toFixed(1);

  resultBox.innerHTML = `
    <h2>🪐 ${planetName}</h2>
    <p>📏 Разстояние: ${distance.toLocaleString()} km</p>
    <p>✈️ Със самолет: ${airplaneYears} години</p>
    <p>🚀 С ракета: ${rocketYears} години</p>
    <p>💡 Със скоростта на светлината: ${lightSeconds} секунди</p>
  `;
}

calculateTravel();
function calculate() {
  const weight = parseFloat(document.getElementById("weight").value);
  const planet = document.getElementById("planet");
  const gravity = parseFloat(planet.value);
  const planetName = planet.options[planet.selectedIndex].text;
  const resultBox = document.getElementById("result");

  if (!Number.isFinite(weight) || weight <= 0) {
    resultBox.innerHTML = "⚠ Въведи валидно тегло, което е по-голямо от нула.";
    return;
  }

  const result = (weight * gravity).toFixed(1);
  resultBox.innerHTML = `
    <strong>На ${planetName}</strong> ще тежиш:
    <div style="font-size: 1.4rem; margin-top: 8px;">🪐 ${result} кг</div>
  `;
}
function calculate(){

    const weight =
        parseFloat(
            document.getElementById("weight").value
        );

    const planet =
        document.getElementById("planet");

    const gravity =
        parseFloat(planet.value);

    const planetName =
        planet.options[
            planet.selectedIndex
        ].text;

    if(!weight){

        document.getElementById("result")
            .innerHTML =
            "⚠ Въведи валидно тегло.";

        return;
    }

    const result =
        (weight * gravity).toFixed(1);

    document.getElementById("result")
        .innerHTML =
        `На ${planetName} ще тежиш <br>
        🪐 ${result} кг`;
}
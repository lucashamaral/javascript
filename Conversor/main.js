function weightConverter(valNum) {
    document.getElementById('outputKilograms-c').innerHTML= Math.round((valNum - 32) / 1.8);
    document.getElementById('outputKilograms-k').innerHTML= Math.round((((valNum - 32) / 1.8) + 273.15));
}
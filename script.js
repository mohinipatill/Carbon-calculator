// script.js
function calculateCarbonFootprint() {
    const miles = parseFloat(document.getElementById('miles').value);
    const mpg = parseFloat(document.getElementById('mpg').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const gas = parseFloat(document.getElementById('gas').value);

    const co2FromDriving = (miles / mpg) * 19.6; // 19.6 lbs of CO2 per gallon of gasoline burned
    const co2FromElectricity = electricity * 1.222; // 1.222 lbs of CO2 per kWh
    const co2FromGas = gas * 11.7; // 11.7 lbs of CO2 per therm of natural gas burned

    const totalCO2 = co2FromDriving + co2FromElectricity + co2FromGas;

    document.getElementById('result').innerHTML = `<p>Your annual carbon footprint is <strong>${totalCO2.toFixed(2)} lbs</strong>.</p>`;
}

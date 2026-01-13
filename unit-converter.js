// ===========================
// CONVERSION FACTORS
// ===========================

const conversionFactors = {
    length: {
        // Base unit: Meter (m)
        'mm': 0.001,
        'cm': 0.01,
        'm': 1,
        'km': 1000,
        'inch': 0.0254,
        'foot': 0.3048,
        'yard': 0.9144,
        'mile': 1609.344
    },
    weight: {
        // Base unit: Kilogram (kg)
        'mg': 0.000001,
        'g': 0.001,
        'kg': 1,
        'oz': 0.0283495,
        'lb': 0.453592,
        'ton': 1000
    },
    volume: {
        // Base unit: Liter (L)
        'ml': 0.001,
        'liter': 1,
        'gallon': 3.78541,
        'quart': 0.946353,
        'pint': 0.473176,
        'cup': 0.236588,
        'fl_oz': 0.0295735,
        'tbsp': 0.0147868,
        'tsp': 0.00492892
    },
    speed: {
        // Base unit: Meter per second (m/s)
        'ms': 1,
        'kmh': 3.6,
        'mph': 2.23694,
        'knots': 1.94384
    },
    area: {
        // Base unit: Square meter (m²)
        'mm2': 0.000001,
        'cm2': 0.0001,
        'm2': 1,
        'km2': 1000000,
        'acre': 4046.86,
        'hectare': 10000
    },
    pressure: {
        // Base unit: Pascal (Pa)
        'pa': 1,
        'bar': 100000,
        'atm': 101325,
        'psi': 6894.76
    }
};

// ===========================
// CONVERSION FUNCTIONS
// ===========================

/**
 * Convert length value
 * @param {number} value - Input value
 * @param {string} fromUnit - Source unit
 * @param {string} toUnit - Target unit
 * @returns {number} - Converted value
 */
function convertLength(value, fromUnit, toUnit) {
    if (!value || isNaN(value)) return 0;
    
    // Convert to base unit (meter)
    const valueInMeters = value * conversionFactors.length[fromUnit];
    
    // Convert from base unit to target unit
    const result = valueInMeters / conversionFactors.length[toUnit];
    
    return parseFloat(result.toFixed(10)); // Remove floating point errors
}

/**
 * Convert weight value
 * @param {number} value - Input value
 * @param {string} fromUnit - Source unit
 * @param {string} toUnit - Target unit
 * @returns {number} - Converted value
 */
function convertWeight(value, fromUnit, toUnit) {
    if (!value || isNaN(value)) return 0;
    
    // Convert to base unit (kilogram)
    const valueInKg = value * conversionFactors.weight[fromUnit];
    
    // Convert from base unit to target unit
    const result = valueInKg / conversionFactors.weight[toUnit];
    
    return parseFloat(result.toFixed(10)); // Remove floating point errors
}

/**
 * Convert volume value
 * @param {number} value - Input value
 * @param {string} fromUnit - Source unit
 * @param {string} toUnit - Target unit
 * @returns {number} - Converted value
 */
function convertVolume(value, fromUnit, toUnit) {
    if (!value || isNaN(value)) return 0;
    
    // Convert to base unit (liter)
    const valueInLiters = value * conversionFactors.volume[fromUnit];
    
    // Convert from base unit to target unit
    const result = valueInLiters / conversionFactors.volume[toUnit];
    
    return parseFloat(result.toFixed(10)); // Remove floating point errors
}

/**
 * Convert speed value
 * @param {number} value - Input value
 * @param {string} fromUnit - Source unit
 * @param {string} toUnit - Target unit
 * @returns {number} - Converted value
 */
function convertSpeed(value, fromUnit, toUnit) {
    if (!value || isNaN(value)) return 0;
    
    // Convert to base unit (m/s)
    const valueInMs = value / conversionFactors.speed[fromUnit];
    
    // Convert from base unit to target unit
    const result = valueInMs * conversionFactors.speed[toUnit];
    
    return parseFloat(result.toFixed(10)); // Remove floating point errors
}

/**
 * Convert area value
 * @param {number} value - Input value
 * @param {string} fromUnit - Source unit
 * @param {string} toUnit - Target unit
 * @returns {number} - Converted value
 */
function convertArea(value, fromUnit, toUnit) {
    if (!value || isNaN(value)) return 0;
    
    // Convert to base unit (m²)
    const valueInM2 = value * conversionFactors.area[fromUnit];
    
    // Convert from base unit to target unit
    const result = valueInM2 / conversionFactors.area[toUnit];
    
    return parseFloat(result.toFixed(10)); // Remove floating point errors
}

/**
 * Convert pressure value
 * @param {number} value - Input value
 * @param {string} fromUnit - Source unit
 * @param {string} toUnit - Target unit
 * @returns {number} - Converted value
 */
function convertPressure(value, fromUnit, toUnit) {
    if (!value || isNaN(value)) return 0;
    
    // Convert to base unit (Pa)
    const valueInPa = value * conversionFactors.pressure[fromUnit];
    
    // Convert from base unit to target unit
    const result = valueInPa / conversionFactors.pressure[toUnit];
    
    return parseFloat(result.toFixed(10)); // Remove floating point errors
}

/**
 * Convert temperature value
 * @param {number} value - Input value
 * @param {string} fromUnit - Source unit (celsius, fahrenheit, kelvin)
 * @param {string} toUnit - Target unit
 * @returns {number} - Converted value
 */
function convertTemperature(value, fromUnit, toUnit) {
    if (isNaN(value)) return 0;
    
    let celsius;
    
    // Convert to Celsius first
    switch(fromUnit) {
        case 'celsius':
            celsius = value;
            break;
        case 'fahrenheit':
            celsius = (value - 32) * (5/9);
            break;
        case 'kelvin':
            celsius = value - 273.15;
            break;
        default:
            celsius = value;
    }
    
    // Convert from Celsius to target unit
    let result;
    switch(toUnit) {
        case 'celsius':
            result = celsius;
            break;
        case 'fahrenheit':
            result = celsius * (9/5) + 32;
            break;
        case 'kelvin':
            result = celsius + 273.15;
            break;
        default:
            result = celsius;
    }
    
    return parseFloat(result.toFixed(4));
}

// ===========================
// FORMAT OUTPUT
// ===========================

/**
 * Format number with appropriate decimal places
 * @param {number} num - Number to format
 * @returns {string} - Formatted number string
 */
function formatNumber(num) {
    if (num === 0) return '0';
    
    // If the number is very large or very small, use exponential notation
    if (Math.abs(num) < 0.0001 || Math.abs(num) > 1000000) {
        return num.toExponential(6);
    }
    
    // Otherwise, use standard notation with up to 6 decimal places
    return num.toLocaleString('en-US', {
        maximumFractionDigits: 6,
        minimumFractionDigits: 0
    });
}

// ===========================
// LENGTH CONVERTER EVENT LISTENERS
// ===========================

const lengthInput = document.getElementById('length-input');
const lengthFromUnit = document.getElementById('length-from-unit');
const lengthToUnit = document.getElementById('length-to-unit');
const lengthResult = document.getElementById('length-result');

function updateLengthConversion() {
    const value = parseFloat(lengthInput.value) || 0;
    const fromUnit = lengthFromUnit.value;
    const toUnit = lengthToUnit.value;
    
    const result = convertLength(value, fromUnit, toUnit);
    lengthResult.value = formatNumber(result);
}

lengthInput.addEventListener('input', updateLengthConversion);
lengthFromUnit.addEventListener('change', updateLengthConversion);
lengthToUnit.addEventListener('change', updateLengthConversion);

// ===========================
// WEIGHT CONVERTER EVENT LISTENERS
// ===========================

const weightInput = document.getElementById('weight-input');
const weightFromUnit = document.getElementById('weight-from-unit');
const weightToUnit = document.getElementById('weight-to-unit');
const weightResult = document.getElementById('weight-result');

function updateWeightConversion() {
    const value = parseFloat(weightInput.value) || 0;
    const fromUnit = weightFromUnit.value;
    const toUnit = weightToUnit.value;
    
    const result = convertWeight(value, fromUnit, toUnit);
    weightResult.value = formatNumber(result);
}

weightInput.addEventListener('input', updateWeightConversion);
weightFromUnit.addEventListener('change', updateWeightConversion);
weightToUnit.addEventListener('change', updateWeightConversion);

// ===========================
// VOLUME CONVERTER EVENT LISTENERS
// ===========================

const volumeInput = document.getElementById('volume-input');
const volumeFromUnit = document.getElementById('volume-from-unit');
const volumeToUnit = document.getElementById('volume-to-unit');
const volumeResult = document.getElementById('volume-result');

function updateVolumeConversion() {
    const value = parseFloat(volumeInput.value) || 0;
    const fromUnit = volumeFromUnit.value;
    const toUnit = volumeToUnit.value;
    
    const result = convertVolume(value, fromUnit, toUnit);
    volumeResult.value = formatNumber(result);
}

volumeInput.addEventListener('input', updateVolumeConversion);
volumeFromUnit.addEventListener('change', updateVolumeConversion);
volumeToUnit.addEventListener('change', updateVolumeConversion);

// ===========================
// SPEED CONVERTER EVENT LISTENERS
// ===========================

const speedInput = document.getElementById('speed-input');
const speedFromUnit = document.getElementById('speed-from-unit');
const speedToUnit = document.getElementById('speed-to-unit');
const speedResult = document.getElementById('speed-result');

function updateSpeedConversion() {
    const value = parseFloat(speedInput.value) || 0;
    const fromUnit = speedFromUnit.value;
    const toUnit = speedToUnit.value;
    
    const result = convertSpeed(value, fromUnit, toUnit);
    speedResult.value = formatNumber(result);
}

speedInput.addEventListener('input', updateSpeedConversion);
speedFromUnit.addEventListener('change', updateSpeedConversion);
speedToUnit.addEventListener('change', updateSpeedConversion);

// ===========================
// AREA CONVERTER EVENT LISTENERS
// ===========================

const areaInput = document.getElementById('area-input');
const areaFromUnit = document.getElementById('area-from-unit');
const areaToUnit = document.getElementById('area-to-unit');
const areaResult = document.getElementById('area-result');

function updateAreaConversion() {
    const value = parseFloat(areaInput.value) || 0;
    const fromUnit = areaFromUnit.value;
    const toUnit = areaToUnit.value;
    
    const result = convertArea(value, fromUnit, toUnit);
    areaResult.value = formatNumber(result);
}

areaInput.addEventListener('input', updateAreaConversion);
areaFromUnit.addEventListener('change', updateAreaConversion);
areaToUnit.addEventListener('change', updateAreaConversion);

// ===========================
// PRESSURE CONVERTER EVENT LISTENERS
// ===========================

const pressureInput = document.getElementById('pressure-input');
const pressureFromUnit = document.getElementById('pressure-from-unit');
const pressureToUnit = document.getElementById('pressure-to-unit');
const pressureResult = document.getElementById('pressure-result');

function updatePressureConversion() {
    const value = parseFloat(pressureInput.value) || 0;
    const fromUnit = pressureFromUnit.value;
    const toUnit = pressureToUnit.value;
    
    const result = convertPressure(value, fromUnit, toUnit);
    pressureResult.value = formatNumber(result);
}

pressureInput.addEventListener('input', updatePressureConversion);
pressureFromUnit.addEventListener('change', updatePressureConversion);
pressureToUnit.addEventListener('change', updatePressureConversion);
// ===========================
// TEMPERATURE CONVERTER EVENT LISTENERS
// ===========================

const tempInput = document.getElementById('temp-input');
const tempFromUnit = document.getElementById('temp-from-unit');
const tempToUnit = document.getElementById('temp-to-unit');
const tempResult = document.getElementById('temp-result');

function updateTemperatureConversion() {
    const value = parseFloat(tempInput.value) || 0;
    const fromUnit = tempFromUnit.value;
    const toUnit = tempToUnit.value;
    
    const result = convertTemperature(value, fromUnit, toUnit);
    tempResult.value = formatNumber(result);
}

tempInput.addEventListener('input', updateTemperatureConversion);
tempFromUnit.addEventListener('change', updateTemperatureConversion);
tempToUnit.addEventListener('change', updateTemperatureConversion);

// ===========================
// NAVIGATION
// ===========================

const navLinks = document.querySelectorAll('.nav-link');
const converterSections = document.querySelectorAll('.converter-section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the category from data attribute
        const category = link.dataset.category;
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Hide all sections
        converterSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected section
        const targetSection = document.getElementById(category);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all converters
    updateLengthConversion();
    updateWeightConversion();
    updateVolumeConversion();
    updateSpeedConversion();
    updateAreaConversion();
    updatePressureConversion();
    updateTemperatureConversion();
    
    // Log app loaded
    console.log('Unit Converter App Loaded Successfully!');
});

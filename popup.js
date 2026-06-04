async function checkService(job, elementId) {
const prometheusUrl = `http://192.168.1.4:9090/api/v1/query?query=up{job="${job}"}`;

try {
const response = await fetch(prometheusUrl);
const data = await response.json();

const value = data.data.result[0]?.value[1];

const element = document.getElementById(elementId);

if (value === "1") {
element.textContent = "UP";
element.className = "up";
} else {
element.textContent = "DOWN";
element.className = "down";
}
} catch (error) {
const element = document.getElementById(elementId);
element.textContent = "ERROR";
element.className = "down";
}
}

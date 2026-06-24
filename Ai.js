function simulate() {
  const data = [
    {
      flare: "M2.3",
      probability: "70%",
      tec: "15%",
      gps: "Medium",
      radio: "Moderate",
      region: "India",
      duration: "20 Minutes",
      risk: "🟡 MODERATE RISK",
      class: "moderate"
    },
    {
      flare: "X1.8",
      probability: "92%",
      tec: "35%",
      gps: "High",
      radio: "Severe",
      region: "Asia-Pacific",
      duration: "45 Minutes",
      risk: "🔴 SEVERE RISK",
      class: "severe"
    },
    {
      flare: "C4.1",
      probability: "45%",
      tec: "8%",
      gps: "Low",
      radio: "Low",
      region: "Europe",
      duration: "10 Minutes",
      risk: "🟢 LOW RISK",
      class: "low"
    }
  ];

  const d = data[Math.floor(Math.random() * data.length)];

  document.getElementById("flare").textContent = d.flare;
  document.getElementById("probability").textContent = d.probability;
  document.getElementById("tec").textContent = d.tec;
  document.getElementById("gps").textContent = d.gps;
  document.getElementById("radio").textContent = d.radio;
  document.getElementById("region").textContent = d.region;
  document.getElementById("duration").textContent = d.duration;

  const status = document.getElementById("status");
  status.textContent = d.risk;
  status.className = d.class;
}

const cars = {
  Toyota: {
    Corolla: {
      engine: "1.8L",
      color: "White",
      price: 25000,
    },
    Camry: {
      engine: "2.5L",
      color: "Black",
      price: 30000,
    },
    Prius: {
      engine: "Hybrid",
      color: "Blue",
      price: 28000,
    },
  },
  Honda: {
    Civic: {
      engine: "2.0L",
      color: "Red",
      price: 24000,
    },
    Accord: {
      engine: "2.4L",
      color: "Gray",
      price: 31000,
    },
    Fit: {
      engine: "1.5L",
      color: "Silver",
      price: 20000,
    },
  },
  BMW: {
    Series3: {
      engine: "2.0L Turbo",
      color: "White",
      price: 45000,
    },
    Series5: {
      engine: "3.0L Turbo",
      color: "Black",
      price: 60000,
    },
    X3: {
      engine: "2.0L AWD",
      color: "Blue",
      price: 50000,
    },
  },
};

// Populate company options when page loads
window.onload = function () {
  const companySelect = document.getElementById("company-name");
  for (let company in cars) {
    companySelect.innerHTML += `<option value="${company}">${company}</option>`;
  }
};

function handleCompany() {
  const company_name = document.getElementById("company-name").value;
  const modelSelect = document.getElementById("model-name");
  const ul = document.getElementById("ul");
  const h1 = document.getElementById("model");

  // Reset
  modelSelect.innerHTML = `<option value="">Select model</option>`;
  ul.innerHTML = "";
  h1.innerHTML = "";

  if (company_name) {
    modelSelect.classList.add("show");

    const models = Object.keys(cars[company_name]);
    models.forEach((model) => {
      modelSelect.innerHTML += `<option value="${model}">${model}</option>`;
    });
  } else {
    modelSelect.classList.remove("show");
  }
}

function handleModel() {
  const company_name = document.getElementById("company-name").value;
  const model_name = document.getElementById("model-name").value;
  const modelDetails = cars[company_name][model_name];

  const h1 = document.getElementById("model");
  const ul = document.getElementById("ul");

  // Reset
  h1.innerHTML = "";
  ul.innerHTML = "";

  if (modelDetails) {
    h1.innerHTML = model_name;
    for (let key in modelDetails) {
      ul.innerHTML += `<li><strong>${key}:</strong> ${modelDetails[key]}</li>`;
    }
  }
}

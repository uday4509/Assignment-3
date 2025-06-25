function generatePassword() {
      const length = document.getElementById("length").value;
      const includeUppercase = document.getElementById("uppercase").checked;
      const includeLowercase = document.getElementById("lowercase").checked;
      const includeNumbers = document.getElementById("numbers").checked;
      const includeSymbols = document.getElementById("symbols").checked;

      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lower = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+=-{}[]:;<>?/";

      let chars = "";
      if (includeUppercase) chars += upper;
      if (includeLowercase) chars += lower;
      if (includeNumbers) chars += numbers;
      if (includeSymbols) chars += symbols;

      if (chars === "") {
        alert("Please select at least one option.");
        return;
      }

      let password = "";
      for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      document.getElementById("password").value = password;
    }

    function copyPassword() {
      const passwordField = document.getElementById("password");
      passwordField.select();
      document.execCommand("copy");
      alert("Password copied!");
    }

    function toggleTheme() {
      const isChecked = document.getElementById("themeToggle").checked;
      document.body.classList.toggle("light", isChecked);
      localStorage.setItem("theme", isChecked ? "light" : "dark");
    }

    function adjustLength(change) {
      const slider = document.getElementById("length");
      let value = parseInt(slider.value);
      value += change;
      if (value >= 4 && value <= 50) {
        slider.value = value;
        document.getElementById("slider-value").textContent = value;
      }
    }

    window.onload = function () {
      const savedTheme = localStorage.getItem("theme") || "dark";
      const isLight = savedTheme === "light";
      document.body.classList.toggle("light", isLight);
      document.getElementById("themeToggle").checked = isLight;

      const slider = document.getElementById("length");
      const sliderValue = document.getElementById("slider-value");
      sliderValue.textContent = slider.value;

      slider.oninput = () => {
        sliderValue.textContent = slider.value;
      };
    }


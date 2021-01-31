// Genarate Pin Button Handle

function getPin() {
  const randomPin = Math.random() * 10000;
  const pinStr = (randomPin + "").split(".")[0];
  if (pinStr.length == 4) {
    return pinStr;
  } else {
    return getPin();
  }
}

//

document
  .getElementById("generate-pinBtn")
  .addEventListener("click", function () {
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
  });

document
  .getElementById("numberPad")
  .addEventListener("click", function (evsent) {
    const digit = evsent.target.innerText;
    if (isNaN(digit)) {
      if (digit === "C") {
        const typead = document.getElementById("typedPin");
        typead.value = "";
      }
    } else {
      const typead = document.getElementById("typedPin");
      typead.value = typead.value + digit;
    }
  });

document.getElementById("sumbits").addEventListener("click", function () {
  const pinInput = document.getElementById("pin").value;
  const typead = document.getElementById("typedPin").value;
  if (pinInput === typead) {
    status("incrate", "dont");
  } else {
    status("dont", "incrate");
  }
});

function status(right, notRight) {
  document.getElementById(right).style.display = "block";
  document.getElementById(notRight).style.display = "none";
}

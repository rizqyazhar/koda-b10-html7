const operatorMatch = [
  { opr: "+", str: "+" },
  { opr: "-", str: "-" },
  { opr: "*", str: "x" },
  { opr: "/", str: "&divide;" },
  { opr: "%", str: "%" },
];

let saveInput = "";

function calculate(n) {
  const res = eval(n);
  $("#res-display").text(res);
  return;
}

function calcDisplay(n) {
  $("#calc-display").text(n);
  if (
    operatorMatch.some((s) => s.opr === saveInput.charAt(saveInput.length - 1))
  )
    return;
  if (!n) return;
  calculate(n);
  return;
}

$(".key-num").each(function () {
  $(this).click(function () {
    saveInput += $(this).val();
    calcDisplay(saveInput);
  });
});

$(".key-op").each(function () {
  $(this).click(function () {
    if (saveInput.length === 0) return;
    if (
      operatorMatch.some(
        (op) => op.opr === saveInput.charAt(saveInput.length - 1),
      )
    )
      return;
    saveInput += $(this).val();
    calcDisplay(saveInput);
  });
});

$("#negative").click(function () {
  if (saveInput.charAt(saveInput.length - 1) === "-") return;
  saveInput += $(this).val();
  $("#calc-display").text(saveInput);
});

$("#comma").click(function () {
  if (
    operatorMatch.some(
      (op) => op.opr === saveInput.charAt(saveInput.length - 1),
    ) ||
    saveInput.length === 0
  ) {
    saveInput += "0.";
    calcDisplay(saveInput);
    return;
  }

  saveInput += ".";
  calcDisplay(saveInput);
  return;
});

$("#calc").click(function () {
  saveInput = "";
  $("#calc-display").text(saveInput);
});

$("#clear-all").click(function () {
  saveInput = "";
  $("#calc-display").text("");
  $("#res-display").text("0");
});

$("#clear").click(function () {
  const lastDel = saveInput.slice(0, saveInput.length - 1);
  saveInput = lastDel;
  calcDisplay(saveInput);
  if (saveInput.length === 0) {
    $("#res-display").text("0");
  }
  return;
});

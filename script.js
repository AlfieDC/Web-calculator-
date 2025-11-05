const display = document.getElementById("display")
let currentInput = "0"
let operator = null
let previousInput = null
let shouldResetDisplay = false

function updateDisplay() {
  display.value = currentInput
}

function appendNumber(num) {
  if (num === "-") {
    toggleSign()
    return
  }

  if (shouldResetDisplay) {
    currentInput = num
    shouldResetDisplay = false
  } else {
    if (currentInput === "0" && num !== ".") {
      currentInput = num
    } else if (num === "." && currentInput.includes(".")) {
      return
    } else {
      currentInput += num
    }
  }
  updateDisplay()
}

function appendOperator(op) {
  if (operator !== null && !shouldResetDisplay) {
    calculate()
  }
  previousInput = currentInput
  operator = op
  shouldResetDisplay = true
}

function calculate() {
  if (operator === null || previousInput === null) return

  let result
  const prev = Number.parseFloat(previousInput)
  const current = Number.parseFloat(currentInput)

  switch (operator) {
    case "+":
      result = prev + current
      break
    case "-":
      result = prev - current
      break
    case "*":
      result = prev * current
      break
    case "/":
      result = current !== 0 ? prev / current : 0
      break
    default:
      return
  }

  currentInput = result.toString()
  operator = null
  previousInput = null
  shouldResetDisplay = true
  updateDisplay()
}

function clearDisplay() {
  currentInput = "0"
  operator = null
  previousInput = null
  shouldResetDisplay = false
  updateDisplay()
}

function deleteLast() {
  if (currentInput.length === 1) {
    currentInput = "0"
  } else {
    currentInput = currentInput.slice(0, -1)
  }
  updateDisplay()
}

function toggleSign() {
  const num = Number.parseFloat(currentInput)
  currentInput = (num * -1).toString()
  updateDisplay()
}

document.querySelectorAll(".btn-number").forEach((btn) => {
  btn.addEventListener("click", (e) => appendNumber(e.target.textContent))
})

document.querySelectorAll(".btn-operator").forEach((btn) => {
  btn.addEventListener("click", (e) => appendOperator(e.target.getAttribute("data-operator")))
})

document.querySelectorAll(".btn-function").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const action = e.target.getAttribute("data-action")
    if (action === "clear") clearDisplay()
    else if (action === "delete") deleteLast()
    else if (action === "percent") {
      const num = Number.parseFloat(currentInput)
      currentInput = (num / 100).toString()
      updateDisplay()
    }
  })
})

document.querySelectorAll(".btn-equals").forEach((btn) => {
  btn.addEventListener("click", calculate)
})

updateDisplay()

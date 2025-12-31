// Utility function to create elements
function createElement(tag, text = '', attributes = {}) {
  const element = document.createElement(tag)
  element.textContent = text

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })

  return element
}

// ✅ Add element to the DOM
function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId)
  if (!container) return

  const p = createElement('p', text)
  container.appendChild(p)
}

// ✅ Remove element from the DOM
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  if (element && element.parentNode) {
    element.parentNode.removeChild(element)
  }
}

// ✅ Simulate button click and update DOM
function simulateClick(containerId, text) {
  addElementToDOM(containerId, text)
}

// ✅ Handle form submission + validation
function handleFormSubmit(formId, containerId) {
  const form = document.getElementById(formId)
  const input = document.getElementById('user-input')
  const errorMessage = document.getElementById('error-message')
  const container = document.getElementById(containerId)

  if (!form || !input || !errorMessage || !container) return

  errorMessage.textContent = ''
  errorMessage.classList.add('hidden')

  if (input.value.trim() === '') {
    errorMessage.textContent = 'Input cannot be empty'
    errorMessage.classList.remove('hidden')
    return
  }

  addElementToDOM(containerId, input.value)
  input.value = ''
}

// 🔹 Export functions for Jest
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit
}

// Keep Billing immediately below Reports in the completed workflow sidebar.
const navigation = document.querySelector('.nav')
const reportsButton = navigation?.querySelector('[data-nav="reports"]')
const billingButton = navigation?.querySelector('[data-nav="billing"]')

if (reportsButton && billingButton) {
  reportsButton.insertAdjacentElement('afterend', billingButton)
}

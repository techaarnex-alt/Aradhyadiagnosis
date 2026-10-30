// Keep Billing immediately below Patients in the completed workflow sidebar.
const navigation = document.querySelector('.nav')
const patientsButton = navigation?.querySelector('[data-nav="patients"]')
const billingButton = navigation?.querySelector('[data-nav="billing"]')

if (patientsButton && billingButton) {
  patientsButton.insertAdjacentElement('afterend', billingButton)
}

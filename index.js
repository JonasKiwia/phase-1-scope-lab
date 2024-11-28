// 1.  customerName Variable in global scope 
var customerName = 'bob';

// 2. Define upperCaseCustomerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Define setBestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. Define overwriteBestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare leastFavoriteCustomer and define changeLeastFavoriteCustomer
const leastFavoriteCustomer = 'initial customer';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; // This will throw an error
}

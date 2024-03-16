// Function to save user details in local storage
export function saveUserDetails(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// Function to get user details from local storage
export function getUserDetails() {
  return JSON.parse(localStorage.getItem('user'));
}

// Function to remove user details from local storage
export function removeUserDetails() {
  localStorage.removeItem('user');
}
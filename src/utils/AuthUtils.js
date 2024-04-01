const localStorageUserItemName = 'ecommerce-demo-user';

// Function to save user details in local storage
export function saveUserDetails(user) {
  localStorage.setItem(localStorageUserItemName, JSON.stringify(user));
}

// Function to get user details from local storage
export function getUserDetails() {
  return JSON.parse(localStorage.getItem(localStorageUserItemName));
}

// Function to remove user details from local storage
export function removeUserDetails() {
  localStorage.removeItem(localStorageUserItemName);
}

// Function to get headers for API calls
export const getRequestHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420"
  }
  if (getUserDetails()?.token && getUserDetails().token !== "")
    headers["Authorization"] = "Bearer " + getUserDetails().token;
  return { headers };
}
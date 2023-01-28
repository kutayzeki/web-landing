export default function getUniqueID() {
  const existingID = localStorage.getItem("uniqueID");
  if (existingID) {
    return existingID;
  } else {
    const newID = generateUniqueID();
    localStorage.setItem("uniqueID", newID);
    return newID;
  }
}
function generateUniqueID() {
  // Generate a 16-byte array
  var array = new Uint8Array(16);
  window.crypto.getRandomValues(array);

  // Convert the byte array to a hex string
  var hex = "";
  for (var i = 0; i < array.length; i++) {
    hex += ("00" + array[i].toString(16)).slice(-2);
  }

  return hex;
}

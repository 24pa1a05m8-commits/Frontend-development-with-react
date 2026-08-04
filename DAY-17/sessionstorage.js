function saveSession(){
    return sessionStorage.setItem("sessionToken", "teja123");
}
const token = sessionStorage.getItem("sessionToken"); 
console.log(token);
sessionStorage.removeItem("sessionToken");
function clearSession(){
    return sessionStorage.clear();
}

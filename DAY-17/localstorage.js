function saveLocal(){
    return localStorage.setItem("username", "Teja");
}
const user = localStorage.getItem("username"); 
console.log(user);
localStorage.removeItem("username");
function clearLocal(){
    return localStorage.clear();
}

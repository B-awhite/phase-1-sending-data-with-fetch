// Add your code here
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// });

function submitData(name, email) {
 return fetch("http://localhost:3000/users", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     "Accept": "application/json",
   },
   body: JSON.stringify({
     name,
     email
   }),
  })
  .then(function(resp) {
    return resp.json()
  })
  .then(function(object) {
    document.body.innerHTML = object["id"]
  })
  .catch(function(err) {
    document.body.innerHTML = err.message
  })
}
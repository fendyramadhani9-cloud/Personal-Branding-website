const form = document.getElementById("contactForm")

form.addEventListener("submit", async (e)=>{

e.preventDefault()

const data = {
name: form.name.value,
email: form.email.value,
message: form.message.value
}

const res = await fetch("http://localhost:3000/api/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

})

const result = await res.json()

document.getElementById("status").innerText = result.message

form.reset()

})
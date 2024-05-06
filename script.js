const log = console.log
const passwordInput = document.querySelector( ".pass-field input" );
const eyeIcon = document.querySelector(".pass-field > i")
const requirementList = document.querySelectorAll(".requirement-list li")

const requirements = [
  {regex:/.{8,}/, index:0}, // minmum length 8 
  {regex:/.[0-9]/, index:1}, 
  {regex:/.[a-z]/, index:2},
  {regex:/.[^A-Za-z0-9]/, index:3},
  {regex:/.[A-z]/, index:4},
]

passwordInput.addEventListener( "keyup", (e) =>
{
  requirements.forEach( item =>
  {
    const isVaild = item.regex.test(e.target.value) // true or false
    const requirementItem = requirementList[item.index]
    if ( isVaild )
    {
      requirementItem.firstElementChild.className = "fa-solid fa-check" 
      requirementItem.classList.add("valid")
    } else
    {
      requirementItem.firstElementChild.className = "fa-solid fa-circle"
      requirementItem.classList.remove("valid")
    }
  })
})

eyeIcon.addEventListener( "click", () =>
{
  passwordInput.type = passwordInput.type === "password" ? "text" : "password"
  eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`
})

import { useEffect, useState } from "react"

const Logout = () => {
  const [user, setUser] = useState("")
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if(!currentUser) {
      window.location.href = "/"
    } else {
      setUser(currentUser);
      const logout = document.querySelector(".logout")
      logout.addEventListener("click", () => {
        localStorage.removeItem("currentUser")
        window.location.href = "/"
      })
    } 
  },[])
  
  return (
  
      <div className="flex gap-4 h-auto">
        <div>
          <p className="text-primary font-bold">{`Hola, ${user.firstName}`}</p>
        </div>
        <img src="/images/icons/logout.svg" alt="logout icon" className="min-w-[30px] cursor-pointer logout"/>
      </div>
    
  )
}

export default Logout
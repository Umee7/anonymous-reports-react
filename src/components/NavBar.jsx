import { Link } from "react-router-dom"


export default function NavBar() {
  return (
    <>
      <nav style={{display: "flex", justifyContent: "space-between"}}>
        <img src='src\assets\react.svg' alt="logo"/>
        <ul style={{display: "flex", listStyle: "none"}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/createreport'>Create Report</Link></li>
            <li><Link to='./about'>About</Link></li>
        </ul>
      </nav>
    </>
  )
}

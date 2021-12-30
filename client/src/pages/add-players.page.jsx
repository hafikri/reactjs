// import { FrmInput } from "../component/form-input.component"
// import { BtnForm } from "../component/button.component"
import { Link } from "react-router-dom"
import '../App.css'

export const AddPlayers = (props) => {
    return(
      <div className="container-form">
        <form>
        
          <label htmlFor="uname">Username</label>
          <input
            type="text"
            id="uname"
            name="username"
            value={props.tmpPlayer.username}
            onChange={(e) => props.setTmpPlayer({
              ...props.tmpPlayer,
              username: e.target.value
            })}
          />
          

          
          <label htmlfor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={props.tmpPlayer.email}
            onChange={(e) => props.setTmpPlayer({
              ...props.tmpPlayer,
              email: e.target.value
            })}
          />
          

          
          <label htmlfor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={props.tmpPlayer.password}
            onChange={(e) => props.setTmpPlayer({
              ...props.tmpPlayer,
              password: e.target.value
            })}
          />
          

          
          <label htmlfor="experience">Experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={props.tmpPlayer.experience}
            onChange={(e) => props.setTmpPlayer({
              ...props.tmpPlayer,
              experience: e.target.value
            })}
          />
          

          
          <label htmlfor="lvl">Level</label>
          <input
            type="text"
            id="lvl"
            name="lvl"
            value={props.tmpPlayer.lvl}
            onChange={(e) => props.setTmpPlayer({
              ...props.tmpPlayer,
              lvl: e.target.value
            })}
          />
          

          <button className="btn-submit">
            <Link 
            to={{
              pathname: `/`,
              }} onClick={props.addPlayer}>Submit</Link>
          </button>
          
        </form>
      </div>
    )
}

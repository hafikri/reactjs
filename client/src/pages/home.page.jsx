// import { FrmInput } from "../component/form-input.component"
// import { BtnForm } from "../component/button.component"
import { ListForm } from "../component/ListFormComp"
import { Link } from "react-router-dom"
import './home.page.css'

const Home = (props) => {
    return(
        <div className='container'>
                <h1>List Data Players</h1>
                <button>
                    <Link 
                    to={`/playerAdd`}>
                        Add Players
                    </Link>
                </button>
            <div>
                <table className="table">
                <thead>
                    <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Experience</th>
                    <th>Level</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.players.map((player) => (
                        <ListForm
                            key={player.id}
                            username={player.username}
                            email={player.email}
                            password={player.password}
                            experience={player.experience}
                            lvl={player.lvl}
                        />
                        ))
                    }
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
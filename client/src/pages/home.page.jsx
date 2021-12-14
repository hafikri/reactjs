// import { FrmInput } from "../component/form-input.component"
// import { BtnForm } from "../component/button.component"
import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div class='container pt-5'>
            {/* <Button size="small" variant="contained" className="submit-container">
          <Link
            style={{  textDecoration: 'none', color: '#fff' }}
            to={`/todo`}
          >
            Create Todo
          </Link>
        </Button> */}
            <button className="btn btn-primary mb-3">
            <Link
            style={{  textDecoration: 'none', color: '#fff' }}
            to={`/playerAdd`}
          >
            Add Players
          </Link>
            </button>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Username</th>
                    <th scope="col">Password</th>
                    <th scope="col">Email</th>
                    <th scope="col">Experience</th>
                    <th scope="col">Level</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>******</td>
                    <td>mark@binar.com</td>
                    <td>Adventure, RPG</td>
                    <td>Medium</td>
                    <td>
                        <button className="btn btn-warning">
                            <Link
                            style={{  textDecoration: 'none', color: '#fff' }}
                            to={`/playerEdit`}
                            >
                            Edit
                            </Link>
                        </button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Home
import { FrmInput } from "../component/form-input.component"
import { BtnForm } from "../component/button.component"

const AddPlayers = () => {
    return(
    <div className="container d-flex align-items-center">
      <form className="card p-5">
        <FrmInput />
        <BtnForm />
      </form>
    </div>
    )
}

export default AddPlayers
// import styles from "./form-input.module.css"

export const FrmInput =()=>{
    return(
        <div>
            <form class="row" action="">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username"></input>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email"></input>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password"></input>
                </div>
                <div class="mb-3">
                    <label for="experience" class="form-label">Experience</label>
                    <input type="text" class="form-control" id="experience"></input>
                </div>
                <div class="mb-3">
                    <label for="level" class="form-label">Level</label>
                    <input type="text" class="form-control" id="level"></input>
                </div>
            </form>
        </div>
    )
}
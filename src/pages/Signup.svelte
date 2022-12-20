<script>
    import axios from "axios";
    let signup = {
        firstName:"",
        lastName:"",
        username:"",
        password:"",
        reset:()=>{
            this.firstName = "";
            this.lastName = "";
            this.username = "";
            this.password = "";
        }
    }
    const onFormSubmit = async (e)=>{
        e.preventDefault();
    }
</script>
<div class="row mt-3">
    <div class="col-md-6 offset-md-3">
        <form class="card" on:submit={onFormSubmit}>
            <div class="card-header">
                <h4>Signup</h4>
            </div>
           <div class="card-body">
            <div class="form-group mb-3">
                <label>First name</label>
                <input type="text" name="firstName" bind:value={signup.firstName} id="firstName" class="form-control">
            </div>
            <div class="form-group mb-3">
                <label>Last name</label>
                <input type="text" name="lastName" bind:value={signup.lastName} id="lastName" class="form-control">
            </div>
            <div class="form-group mb-3">
                <label>Username</label>
                <input type="text" name="username" bind:value={signup.username} id="username" class="form-control">
            </div>
            <div class="form-group mb-3">
                <label>Password</label>
                <input type="password" name="password" bind:value={signup.password} id="password" class="form-control">
            </div>
            <div class="form-group d-flex flex-column text-center">
                <button class="btn btn-primary w-10 mb-3">Signup</button>
                <a href="#/login">Login</a>
            </div>
           </div>
        </form>
    </div>
</div>
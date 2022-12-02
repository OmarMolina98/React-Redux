export const Index = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        Axios.get("http://localhost:3000/users")
        .then(response => {
            const users = response.data;
            const userToLog = users.find(user => user.email )
        })
    }




    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <h2 className="mb-4">Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" ref={emailField}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" ref={passwordField}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
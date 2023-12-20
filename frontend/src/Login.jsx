
const Login = () => {



    const handleSubmit=(e)=>{
        
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userData = { email, password}
        console.log(userData);
    }

    return (
        <div>
            <div className="w-4/12 m-auto mt-44">
                <form onSubmit={handleSubmit} action="" className="border p-10 bg-purple-200">
                    <label htmlFor="" className="block mb-4">
                        <span>your email</span> <br />
                        <input className="border w-full p-2 mt-2" name="email" type="email" placeholder="your email" />
                    </label>
                    <label htmlFor="" className="block mb-4">
                        <span>your password</span> <br />
                        <input className="border w-full p-2 mt-2" name="password" type="password" placeholder="your password" />
                    </label>
                    <button className="py-2 w-full block bg-purple-500 text-white" type="submit">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Login;
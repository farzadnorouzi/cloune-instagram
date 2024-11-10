

function Login() {
    return(
        <div className="w-96 h-96 bg-gray-200 rounded flex flex-col justify-center items-center">
        <input className="block text-center mb-4" placeholder="username" type="text" />
        <input className="block text-center" placeholder="password" type="text" />
        <button className="mt-9 w-48 bg-white rounded">forget password?</button>
    </div>
    )
    
}

export default Login
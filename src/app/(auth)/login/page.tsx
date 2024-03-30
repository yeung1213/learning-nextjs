
export const generateMetadata = async () => {
  return {
    // title: 'login page',
    mycode: true
  }
}

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <div className="container">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}
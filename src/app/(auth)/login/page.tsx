
import LoginForm from "./_login-form/login-form"
import "./page.css"

export const generateMetadata = async () => {
  return {
    // title: 'login page',
    mycode: true
  }
}

export default function Login() {
  return (
    <div className="form-container">
      <LoginForm />
    </div>
  )
}
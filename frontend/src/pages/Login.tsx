import '../styles/login.css'

function Login() {
    return (
        <div className="container-form">
            <form action="" method="post" className='login-form'>
                <div className="field">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" autoComplete="off" placeholder='Seu nome'/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" autoComplete="off" placeholder='Seu melhor email'/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password" autoComplete="off" placeholder='Digite sua senha'/>
                </div>
                <div className="field-btn">
                    <button type="submit">Entrar</button>
                    <a href="">Crie uma conta</a>
                </div>
            </form>
        </div>
    );
}

export default Login;
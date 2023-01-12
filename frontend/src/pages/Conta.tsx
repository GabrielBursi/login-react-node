
import '../styles/minhaConta.css'

function Conta() {

    return (
        <div className="container">
            <div className="minha-conta">
                <div className="header-minha-conta">
                    <h1>Minha conta</h1>
                </div>
                <section className="info-container">
                    <div className='info-conta'>
                        <p>Nome: <span></span></p>
                        <p>Email: <span></span></p>
                        <p>Conta criada em: <span></span></p>
                    </div>
                    <div className="actions">
                        <button type="button">Editar Nome</button>
                        <button type="button">Editar Email</button>
                        <button type="button">Editar Senha</button>
                        <button type="button">Sair</button>
                        <button type="button">Excluir Conta</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Conta;
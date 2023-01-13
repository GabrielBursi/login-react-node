
function Modal() {
    return (
        <div className="modal">
            <h2>Tem certeza que deseja excluir sua conta?</h2>
            <hr></hr>
            <span>Isso fará com que você precise criar outra conta para conseguir acessar a página da API.</span>
            <div className="actions">
                <button type="button">Excluir conta</button>
                <button type="button">Cancelar</button>
            </div>
        </div>
    );
}

export default Modal;
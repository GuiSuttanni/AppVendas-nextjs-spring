import { Layout } from 'components';

export const CadastroProdutos: React.FC = () => {
    return (
        <Layout titulo="Cadastro de Produtos">
            <div className="columns">
                <div className="field is-half column">
                    <label className="label" htmlFor="inputSku">Código: *</label>
                    <div className="control">
                        <input className="input" 
                            id="inputSku"
                            placeholder="Digite o CÓDIGO do produto" />
                    </div>
                </div>

                <div className="field is-half column">
                    <label className="label" htmlFor="inputPreco">Preço: *</label>
                    <div className="control">
                        <input className="input" 
                            id="inputPreco"
                            placeholder="Digite o PREÇO do produto" />
                    </div>
                </div>
           </div>

           <div className="columns"> 
                <div className="field column is-full">
                    <label className="label" htmlFor="inputNome">Nome: *</label>
                    <div className="control">
                        <input className="input" 
                            id="inputNome"
                            placeholder="Digite o NOME do produto" />
                    </div>
                </div>
           </div>

           <div className="columns"> 
                <div className="field column is-full">
                    <label className="label" htmlFor="inputDesc">Descrição: *</label>
                    <div className="control">
                        <textarea className="textarea" 
                            id="inputDesc"
                            placeholder="Digite a DESCRIÇÃO do produto" />
                    </div>
                </div>
           </div>

           <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Voltar</button>
                </div>
           </div>
        </Layout>
    )
}


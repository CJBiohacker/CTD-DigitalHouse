/* Importando o Hook personalizado e alguns status */
import { toast } from 'react-toastify';
import { statusList, useFetch } from "./UseFetch"
import { useState } from 'react';

function Dog({ breed }) {
    const [clicked, isClicked] = useState(false);

    const notifySuccess = () => {
        toast.success('Seu Doguinho está aqui !!!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
    
      const notifyError = () => {
        toast.error('Erro ao buscar a imagem do cachorro.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
    
    const generateDog = async () => {
        await fetchData();
        if (status === statusList.SUCCESS) {
          isClicked(true);
          notifySuccess();
        } else {
          notifyError();
        }
    }
    
    /* Utilizamos o custom Hook para acessar a API informando apenas a URL(endpoint) */
    const { data, status, fetchData } = useFetch(`https://dog.ceo/api/breed/${breed}/images/random`);

    /* De acordo com o status da conexão com a API apresenta-se uma informação ao usuário */
    if (status === statusList.LOADING) {
        return <p>Carregando...</p>;
    }
    if (status === statusList.SUCCESS) {
        //DICA: Você poderia executar algo aqui.
        return (
            <div>
            <button onClick={generateDog}>Gerar um novo Doguinho !</button>
            {clicked ? <>
            <h2>Você buscou pela raça: {breed}</h2>
            <img src={data.message} />
            </> : <></>}
        </div>
        )
    }
    if (status === statusList.ERROR) {
        throw new Error(`Erro ao buscar uma imagem para a raça: ${breed}`);
    }
}

export default Dog;
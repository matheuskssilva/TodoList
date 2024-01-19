import { BotaoAdicionar } from "../../Components/BotaoAdicionar"
import BarraLateral from "../../containers/BarraLateral"
import ListaDeTarefas from "../../containers/ListaDeTarefas"


export const Home = () => {
  return (
    <>
        <BarraLateral />
        <ListaDeTarefas />
        <BotaoAdicionar />    
    </>
  )
}

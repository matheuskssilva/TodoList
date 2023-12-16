import Tarefa from "../../Components/Tarefa"
import { Container } from "./styles"

const ListaDeTarefas = () => {
   return (
    <Container>
    <p>2 tarefas marcadas como: "categoria" e "termo"</p>
    <ul>
      <li>
         <Tarefa />
      </li>
      <li>
         <Tarefa />
      </li>
      <li>
         <Tarefa />
      </li>
      <li>
         <Tarefa />
      </li>
      <li>
         <Tarefa />
      </li>
    </ul>
</Container>
   )
}

export default ListaDeTarefas

import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../Components/FiltroCard'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { Campo } from '../../styles'

import { RootReducer } from '../../store'
import { alteraTermos } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermos(evento.target.value))}
        />

        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            legenda="pendentes"
            criterio="status"
          />
          <FiltroCard
            valor={enums.Status.CONCLUDIA}
            legenda="concluídas"
            criterio="status"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            legenda="urgentes"
            criterio="prioridade"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            legenda="importantes"
            criterio="prioridade"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            legenda="normal"
            criterio="prioridade"
          />
          <FiltroCard legenda="todas" criterio="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral

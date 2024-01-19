import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar Javascript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUDIA,
      titulo: 'Estudar Javascript revendo o exercicio 7'
    },
    {
      id: 2,
      descricao: 'Estudar Typescript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUDIA,
      titulo: 'Estudar Typescript'
    },
    {
      id: 3,
      descricao: 'Estudar React',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar React revendo o exercicio 6'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrarTaf: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert("Tarefa ja existe")
        
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrarTaf } = tarefasSlice.actions

export default tarefasSlice.reducer

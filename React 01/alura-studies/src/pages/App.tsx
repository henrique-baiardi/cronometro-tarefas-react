import { useState } from 'react';
import Cronometro from '../componentes/cronometro';
import Formulario from '../componentes/formulario';
import Lista from '../componentes/lista';
import style from './app.module.scss'
import { ITarefa } from '../types/tarefa';


function App() {
  
  const [tarefas, setTarefas] = useState<ITarefa[] | []>(
    [{
    tarefa: 'React',
    tempo: '02:00:00',
    selecionado: false,
    completado: false,
    id: '01',
    }]
  )
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada:ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);

      setTarefas(tarefasAnteriores => 
        tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id){
            return {
              ...tarefa,
              selecionado: false,
              completado:true,
            }
          }
          return tarefa;
        }))
    }
  }

  return (
    <div className={style.appStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
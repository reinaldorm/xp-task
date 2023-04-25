interface Step {
  heading: string;
  description: JSX.Element;
  position: number;
  step: number;
}

export const steps: Step[] = [
  {
    heading: 'Bem Vindo!',
    description: (
      <>
        Pressione o <strong>botão</strong> acima para adicionar uma nova tarefa.
      </>
    ),
    step: 0,
    position: 282,
  },
  {
    heading: 'Preencha!',
    description: (
      <>
        De um nome e uma descrição para sua tarefa e pressione <strong>criar tarefa</strong>.
      </>
    ),
    step: 1,
    position: 632,
  },
  {
    heading: 'Concluído?',
    description: (
      <>
        Agora para completar sua <strong>tarefa</strong> basta pressionar logo acima dela.
      </>
    ),
    step: 2,
    position: 0,
  },
  {
    heading: 'Pronto!',
    description: (
      <>
        <strong>Parabéns!</strong> <br />
        Tudo certo para começar a gerenciar suas tarefas, boa sorte!
      </>
    ),
    step: 3,
    position: 0,
  },
];

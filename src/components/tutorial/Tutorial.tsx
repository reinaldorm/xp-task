import React from 'react';
import { usePlayer } from '../../context/player/context';

import styles from './css/tutorial.module.scss';
import assets from '../../assets/sources';

import type { Tutorial } from '../../types';

interface Step {
  heading: string;
  description: JSX.Element;
  step: number;
}

const tutorialSteps: Step[] = [
  {
    heading: 'Bem Vindo!',
    description: (
      <>
        Pressione o <strong>botão</strong> acima para adicionar uma nova tarefa.
      </>
    ),
    step: 0,
  },
  {
    heading: 'Preencha!',
    description: (
      <>
        De um nome e uma descrição para sua tarefa e pressione <strong>criar tarefa</strong>.
      </>
    ),
    step: 1,
  },
  {
    heading: 'Concluído?',
    description: (
      <>
        Agora para completar sua <strong>tarefa</strong> basta pressionar logo acima dela.
      </>
    ),
    step: 2,
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
  },
];

const Tutorial = () => {
  const { player, updatePlayerField, updateTutorialField } = usePlayer();

  function handleSkip() {
    updatePlayerField({
      tutorial: {
        active: false,
        step: 0,
      },
    });
  }

  function handleGoToNextStep() {
    if (player.tutorial.step + 1 >= tutorialSteps.length) return;
    updateTutorialField({
      step: player.tutorial.step + 1,
    });
  }

  function handleGoToPreviousStep() {
    if (player.tutorial.step - 1 < 0) return;
    updateTutorialField({
      step: player.tutorial.step - 1,
    });
  }

  return (
    <div className={styles.tutorial}>
      <div className={styles.tutorialContent}>
        <h1 className={styles.tutorialHeading}>{tutorialSteps[player.tutorial.step].heading}</h1>
        <p className={styles.tutorialDescription}>{tutorialSteps[player.tutorial.step].description}</p>
        <button
          onClick={handleSkip}
          className={styles.tutorialSkipText}>
          Pular Tutorial
          <img
            src={assets.arrowRight}
            alt='skip-tutorial'
          />
        </button>
        <nav className={styles.tutorialNavigation}>
          <button
            disabled={player.tutorial.step === 0}
            onClick={handleGoToPreviousStep}
            className={styles.navButton}>
            <img
              src={assets.chevronLeft}
              alt='previous-step'
            />
          </button>
          <button
            disabled={player.tutorial.step === tutorialSteps.length - 1}
            onClick={handleGoToNextStep}
            className={styles.navButton}>
            <img
              src={assets.chevronRight}
              alt='next-step'
            />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Tutorial;

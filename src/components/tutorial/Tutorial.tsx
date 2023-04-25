import React from 'react';
import { usePlayer } from '../../context/player/context';
import { useModal } from '../../context/modal/context';

import styles from './css/tutorial.module.scss';
import assets from '../../assets/sources';
import { steps } from './step';

import type { Tutorial } from '../../types';

const Tutorial = () => {
  const { player, updatePlayerField, updateTutorialField } = usePlayer();
  const { toggleModal } = useModal();

  function trackTutorialStep(step: number) {
    switch (step) {
      case 0:
        toggleModal(false);
        break;
      case 1:
        toggleModal(true);
        break;
      case 2:
        toggleModal(false);
        break;
      case 3:
        toggleModal(false);
        break;
    }
  }

  function handleSkip() {
    toggleModal(false);
    updatePlayerField({
      tutorial: {
        active: false,
        step: 0,
      },
    });
  }

  function handleGoToNextStep() {
    if (player.tutorial.step + 1 >= steps.length) return;
    updateTutorialField({
      step: player.tutorial.step + 1,
    });
    trackTutorialStep(player.tutorial.step + 1);
  }

  function handleGoToPreviousStep() {
    if (player.tutorial.step - 1 < 0) return;
    updateTutorialField({
      step: player.tutorial.step - 1,
    });
    trackTutorialStep(player.tutorial.step - 1);
  }

  // function handleWindowsKeys(e: KeyboardEvent) {
  //   switch (e.key) {
  //     case 'ArrowLeft':
  //       handleGoToPreviousStep();
  //       break;
  //     case 'ArrowRight':
  //       handleGoToNextStep();
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // React.useEffect(() => {
  //   window.addEventListener('keyup', handleWindowsKeys);

  //   return () => {
  //     window.removeEventListener('keyup', handleWindowsKeys);
  //   };
  // }, []);

  return (
    <div className={styles.tutorial}>
      <div
        style={{ top: `${steps[player.tutorial.step].position}px` }}
        className={styles.tutorialContent}>
        <h1 className={styles.tutorialHeading}>{steps[player.tutorial.step].heading}</h1>
        <p className={styles.tutorialDescription}>{steps[player.tutorial.step].description}</p>
        <button
          type="button"
          onClick={handleSkip}
          className={styles.tutorialSkipText}>
          Pular Tutorial
          <img
            src={assets.arrowRight}
            alt="skip-tutorial"
          />
        </button>
        <nav className={styles.tutorialNavigation}>
          <button
            type="button"
            disabled={player.tutorial.step === 0}
            onClick={handleGoToPreviousStep}
            className={styles.navButton}>
            <img
              src={assets.chevronLeft}
              alt="previous-step"
            />
          </button>
          <button
            type="button"
            disabled={player.tutorial.step === steps.length - 1}
            onClick={handleGoToNextStep}
            className={styles.navButton}>
            <img
              src={assets.chevronRight}
              alt="next-step"
            />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Tutorial;

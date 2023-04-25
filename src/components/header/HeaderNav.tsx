import React from 'react';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { useModal } from '../../context/modal/context';
import { usePlayer } from '../../context/player/context';

import styles from './styles/header.module.scss';
import assets from '../../assets/sources';

const HeaderNav = () => {
  const { toggleModal } = useModal();
  const { player } = usePlayer();

  React.useEffect(() => {
    const tween = gsap.from('.navButton', {
      y: -20,
      stagger: 0.1,
      onComplete: () => {
        tween.revert();
      },
    });

    return () => {
      tween.revert();
    };
  }, []);

  return (
    <nav className={styles.headerNav}>
      <button
        onClick={() => toggleModal(true)}
        className={clsx(
          styles.navButtonAdd,
          'navButton',
          player.tutorial.active && player.tutorial.step === 0 && 'activeStep'
        )}>
        <img
          src={assets.plus}
          alt="add-task"
        />
      </button>
      <button className={clsx([styles.navButtonFilter, 'navButton'])}>
        <img
          src={assets.favorite}
          alt="filter-favorite-tasks"
        />
      </button>
      <button className={clsx([styles.navButtonFilter, 'navButton'])}>
        <img
          src={assets.archive}
          alt="filter-archive-tasks"
        />
      </button>
    </nav>
  );
};

export default HeaderNav;

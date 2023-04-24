import React from 'react';
import { gsap } from 'gsap';
import { useModal } from '../../context/modal/context';

import styles from './styles/header.module.scss';
import assets from '../../assets/sources';

const HeaderNav = () => {
  const { toggleModal } = useModal();

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
        className={styles.navButtonAdd + ' navButton'}>
        <img
          src={assets.plus}
          alt="add-task"
        />
      </button>
      <button className={styles.navButtonFilter + ' navButton'}>
        <img
          src={assets.favorite}
          alt="filter-favorite-tasks"
        />
      </button>
      <button className={styles.navButtonFilter + ' navButton'}>
        <img
          src={assets.archive}
          alt="filter-archive-tasks"
        />
      </button>
    </nav>
  );
};

export default HeaderNav;

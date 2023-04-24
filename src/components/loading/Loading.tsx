import React from 'react';

import styles from './styles/loading.module.scss';
import assets from '../../assets/sources';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img
        src={assets.xpLogo}
        alt="xp-loading"
      />
    </div>
  );
};

export default Loading;

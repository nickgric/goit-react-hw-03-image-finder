import { TailSpin } from 'react-loader-spinner';

import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <TailSpin color="gray" />
    </div>
  );
};

export default Loader;

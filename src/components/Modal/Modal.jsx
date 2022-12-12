import styles from './Modal.module.css';
import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.closeModalByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModalByEsc);
  }

  closeByEsc = event => {
    if (event.code === 'Escape') {
      this.props.closeModalByEsc();
    }
  };

  render() {
    const { closeModal, large, id } = this.props;
    return (
      <div onClick={closeModal} className={styles.overlay}>
        <div className={styles.modal}>
          <img src={large} alt="Photo" />
        </div>
      </div>
    );
  }
}

export default Modal;

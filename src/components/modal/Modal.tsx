import React from 'react';
import { usePlayer } from '../../context/player/context';
import { useModal } from '../../context/modal/context';
import { useTasks } from '../../context/task/context';

import styles from './styles/modal.module.scss';
import assets from '../../assets/sources';

const Modal = () => {
  const coverRef = React.useRef<HTMLDivElement | null>(null);
  const titleInputRef = React.useRef<HTMLInputElement | null>(null);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const { player } = usePlayer();
  const { toggleModal } = useModal();
  const { addTask, tasks, changePage, page } = useTasks();

  function handleShadowClose({ target }: React.MouseEvent) {
    if (target !== coverRef.current) return;

    toggleModal(false);
  }

  function handleWindowKey(e: KeyboardEvent) {
    if (e.key !== 'Enter' && e.key !== 'Escape') return;

    switch (e.key) {
      case 'Enter':
        handleAddTask();
        break;
      case 'Escape':
        handleClose();
        break;
      default:
        break;
    }
  }

  function handleClose() {
    toggleModal(false);
  }

  function handleAddTask() {
    if (tasks.length >= 9 || !name || !description) return;

    const taskPage = addTask({
      name,
      description,
      page: Math.ceil((tasks.length + 1) / 3) - 1,
    });

    toggleModal(false);
    setName('');
    setDescription('');

    if (taskPage && taskPage !== page) changePage(taskPage);
  }

  React.useEffect(() => {
    titleInputRef.current?.focus();

    window.addEventListener('keyup', handleWindowKey);

    return () => {
      window.removeEventListener('keyup', handleWindowKey);
    };
  }, []);

  React.useEffect(() => {}, []);

  return (
    <div
      onClick={handleShadowClose}
      className={styles.modal}>
      <div
        ref={coverRef}
        className={styles.modalCover}></div>
      <form
        className={styles.modalContent}
        action="/"
        method="dialog">
        <div className={styles.modalForm}>
          <label
            className={styles.modalLabel}
            htmlFor="task-title">
            Titulo
          </label>
          <input
            id="task-title"
            name="task-title"
            placeholder="Insira o titulo da tarefa."
            type="text"
            value={name}
            className={styles.modalTitleInput}
            onChange={(i) => setName(i.currentTarget.value)}
            ref={titleInputRef}
          />
          <label
            className={styles.modalLabel}
            htmlFor="task-description">
            Descrição
          </label>
          <input
            id="task-description"
            name="task-description"
            placeholder="Insira a descrição da tarefa"
            type="text"
            value={description}
            className={styles.modalDescriptionInput}
            onChange={(i) => setDescription(i.currentTarget.value)}
          />
          <p className={styles.modalXP}>+{100 + player.level * 20}</p>
        </div>
        <div className={styles.modalButtons}>
          <button
            onClick={handleAddTask}
            type="button">
            Criar Tarefa
          </button>
          <button
            onClick={handleClose}
            type="button">
            <img
              src={assets.close}
              alt="close-modal-button"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;

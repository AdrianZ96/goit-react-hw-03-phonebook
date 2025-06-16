import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.item}>
      <span>{name}: {number}</span>
      <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

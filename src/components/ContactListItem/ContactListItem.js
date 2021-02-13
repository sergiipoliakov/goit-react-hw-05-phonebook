import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ContactListItem.css';

const ContactListItem = ({ id, name, number, onRemove }) => (
  <li key={id} className="ContactList-item">
    <p className="ContactList-text">{name}: </p>
    <p className="ContactList-text">{number}</p>
    <div className="ContactList-actions">
      <Button
        label="Delete"
        type="button"
        className="ContactList-button"
        onClick={onRemove}
      />
    </div>
  </li>
);

export default ContactListItem;

ContactListItem.defaultProps = {
  name: 'noName',
  number: '123 45 67',
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};

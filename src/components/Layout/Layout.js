import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './Layout.css';

const Layout = ({ children }) => (
  <div className="Layout">
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="Layout-title-slideIn"
      unmountOnExit
    >
      <h1 className="Layout-title">Phonebook</h1>
    </CSSTransition>
    {children}
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

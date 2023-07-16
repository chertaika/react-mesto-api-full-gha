import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import headerLogo from '../assets/images/header-logo.svg';

const Header = ({ onSignOut, userEmail }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header className={`header ${isMenuOpened && 'header_menu-opened'}`}>
      <img className="header__logo" src={headerLogo} alt="логотип Место" />
      <Routes>
        <Route
          path="/sign-in"
          element={(
            <Link className="header__nav-link link-hover" to="/sign-up">
              Регистрация
            </Link>
          )}
        />
        <Route
          path="/sign-up"
          element={(
            <Link className="header__nav-link link-hover" to="/sign-in">
              Войти
            </Link>
          )}
        />
        <Route
          path="/"
          element={(
            <>
              <div className="header__user-info">
                <p className="header__email">{userEmail}</p>
                <button
                  type="button"
                  className="header__logout link-hover"
                  onClick={() => {
                    onSignOut();
                    handleOpenMenu();
                  }}
                >
                  Выйти
                </button>
              </div>
              <button
                type="button"
                className="header__burger btn-hover"
                onClick={handleOpenMenu}
              >
                <span className={`header__burger-line ${isMenuOpened && 'header__burger-line_active'}`} />
              </button>
            </>
          )}
        />
      </Routes>
    </header>
  );
};

export default Header;

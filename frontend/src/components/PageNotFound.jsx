import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="not-found">
    <h3 className="not-found__title">404</h3>
    <p className="not-found__text">
      Упс, кажется, ты заблудился. Скорее вернись
      {' '}
      <Link className="not-found__link" to="/">домой</Link>
    </p>
  </div>
);

export default PageNotFound;

import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import ViewMoviePage from '../Pages/ViewMoviePage';
import AddMoviePage from '../Pages/AddMoviePage';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import LogoutPage from '../Logout/Logout';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/view': ViewMoviePage,
  '/add': AddMoviePage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/logout': LogoutPage
};

export default routes;

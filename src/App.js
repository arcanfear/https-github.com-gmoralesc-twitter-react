import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar';
import ProtectedRoute from './containers/ProtectedRoute';

const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const TweetDetails = React.lazy(() => import('./pages/TweetDetails'));
const Profile = React.lazy(() => import('./pages/Profile'));
const EditProfile = React.lazy(() => import('./pages/EditProfile'));

function App() {
  return (
    <Router>
      <NavBar />
      <Container maxWidth="sm">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute path="/profile/:id" exact>
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute path="/profile/:id/edit">
              <EditProfile />
            </ProtectedRoute>
            <ProtectedRoute path="/tweets/:id">
              <TweetDetails />
            </ProtectedRoute>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <ProtectedRoute path="/">
              <Home />
            </ProtectedRoute>
          </Switch>
        </React.Suspense>
      </Container>
    </Router>
  );
}

export default App;

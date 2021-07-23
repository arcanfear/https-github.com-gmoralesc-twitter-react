import React, { ReactChildren, ReactElement } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

type ProtectedRouteProps = {
  path: string,
  children: ReactChildren
  props: Record<string, string>
}

export default function ProtectedRoute({ path = '/', children, ...props }: ProtectedRouteProps): ReactElement {
  const logged = isAuthenticated();

  return (
    <Route path={path} {...props}>
      {logged ? children : <Redirect to="/login" />}
    </Route>
  );
}

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import PrivateRoute from '../components/PrivateRoute';
import ErrorBoundary from '../components/ErrorBoundary';

const Characters = lazy(() => import('../Pages/Characters'));
const Locations = lazy(() => import('../Pages/Locations'));
const Episodes = lazy(() => import('../Pages/Episodes'));
const Element = lazy(() => import('../Pages/Element'));
const Login = lazy(() => import('../Pages/Login'));

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ErrorBoundary>
          <div>Home Page</div>
        </ErrorBoundary>
      }>
      </Route>
      <Route path="/characters" element={
        <PrivateRoute>
          <ErrorBoundary>
            <Characters />
          </ErrorBoundary>
        </PrivateRoute>}>
      </Route>
      <Route path="/characters/:id" element={
        <PrivateRoute>
          <ErrorBoundary>
            <Element />
          </ErrorBoundary>
        </PrivateRoute>}>
      </Route>
      <Route path="/locations" element={
        <PrivateRoute>
          <ErrorBoundary>
            <Locations />
          </ErrorBoundary>
        </PrivateRoute>}>
      </Route>
      <Route path="/locations/:id" element={
        <PrivateRoute>
          <ErrorBoundary>
            <Element />
          </ErrorBoundary>
        </PrivateRoute>}>
      </Route>
      <Route path="/episodes" element={
        <PrivateRoute>
          <ErrorBoundary>
            <Episodes />
          </ErrorBoundary>
        </PrivateRoute>}>
      </Route>
      <Route path="/episodes/:id" element={
        <PrivateRoute>
          <ErrorBoundary>
            <Element />
          </ErrorBoundary>
        </PrivateRoute>}>
      </Route>
      <Route path="/login" element={
        <ErrorBoundary>
          <Login />
        </ErrorBoundary>
      }>
      </Route>
      <Route path="/*"></Route>
    </Routes>
  )
};
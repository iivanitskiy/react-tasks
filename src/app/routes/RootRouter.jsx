import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import PrivateRoute from './PrivateRoute.jsx';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
import Hooks from '../../pages/hooks/Hooks.jsx';
import Home from '../../pages/home/Home.jsx';

const Characters = lazy(() => import('../../pages/characters/Characters.jsx'));
const Locations = lazy(() => import('../../pages/locations/Locations.jsx'));
const Episodes = lazy(() => import('../../pages/episodes/Episodes.jsx'));
const Element = lazy(() => import('../../pages/element/Element.jsx'));
const Login = lazy(() => import('../../pages/login/Login.jsx'));

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      }>
      </Route>
      <Route path="/hooks" element={
        <ErrorBoundary>
          <Hooks />
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
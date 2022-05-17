import React from 'react';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
import { Route, Routes, useLocation } from 'react-router';
import { PAGE_PATH } from './common/constList';
import SigninPage from './page/SigninPage/SigninPage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import './App.css';

export default function App(): JSX.Element {
  const location = useLocation();
  const pageList = Object.values(PAGE_PATH).map(path => `/${path}`);

  if (location.pathname === `/${PAGE_PATH.signin}`) {
    return <Routes><Route path={`/${PAGE_PATH.signin}`} element={<SigninPage />} /></Routes>;
  }
  if (!pageList.find(page => page === location.pathname)) {
    return <Routes><Route path="/*" element={<NotFoundPage />} /></Routes>;
  }
  return <DefaultLayout />;

}

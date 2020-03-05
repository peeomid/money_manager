import React from 'react';

// import CategoryList from './views/Category/CategoryList';

const CategoryList = React.lazy(() => import('./views/Category/CategoryList'));
const TransactionList = React.lazy(() => import('./views/Transaction/TransactionList'));
const TransactionForm = React.lazy(() => import('./views/Transaction/TransactionForm'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/categories', name: 'Categories', component: CategoryList },
  { path: '/transactions', exact: true, name: 'Income/Expenses', component: TransactionList },
  { path: '/transactions/add', name: 'Add Transaction', component: TransactionForm },
];

export default routes;
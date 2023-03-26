import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';

describe('Routing', () => {
  test('renders dashboard when redirected from root', () => {
    render(
      <HashRouter initialEntries={['/']}>
        <App />
      </HashRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  test('renders AuthLayout when navigated to /auth', () => {
    render(
      <HashRouter initialEntries={['/auth']}>
        <App />
      </HashRouter>
    );
    expect(screen.getByText('Auth Layout')).toBeInTheDocument();
  });

  test('renders AdminLayout when navigated to /admin', () => {
    render(
      <HashRouter initialEntries={['/admin']}>
        <App />
      </HashRouter>
    );
    expect(screen.getByText('Admin Layout')).toBeInTheDocument();
  });
});

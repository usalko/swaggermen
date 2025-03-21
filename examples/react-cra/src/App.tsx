import { DevPortalProvider } from '@swaggermen/swaggermen-dev-portal';
import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { SwaggermenAPI } from './components/API';
import { Navigation } from './components/Navigation';
import { NotFound } from './components/NotFound';
import { SwaggermenProjectDocs } from './components/SwaggermenProject';

class App extends Component {
  render() {
    return (
      <DevPortalProvider>
        <BrowserRouter>
          <div className="app-container">
            <header>
              <Navigation />
            </header>
            <main className="main-content">
              <Routes>
                <Route path="/zoom-api/*" element={<SwaggermenAPI />} />
                <Route path="/swaggermen-project/*" element={<SwaggermenProjectDocs />} />
                <Route path="/" element={<Navigate to="swaggermen-project" replace />} />
                <Route element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </DevPortalProvider>
    );
  }
}

export default App;

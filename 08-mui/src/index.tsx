import ReactDOM from 'react-dom/client';
import './index.css';
import { WaitersApp } from './features/waiters';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './features/NotFound';
import { About } from './features/About';
import { Container, Stack, AppBar, Toolbar } from '@mui/material';
import { Navigation } from './components/Navigation';
import {ThemeProvider} from "./components/ThemeProvider";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Container maxWidth="md">
            <Stack spacing={2}>
              <AppBar position="static">
                <Toolbar>
                  <Navigation />
                </Toolbar>
              </AppBar>
              <Routes>
                <Route path="/" element={<WaitersApp/>}/>
                <Route path="/waiters/*" element={<WaitersApp/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Stack>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
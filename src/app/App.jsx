import './styles/App.css';
import '@mantine/core/styles.css';
import { BrowserRouter } from "react-router";
import { RootRouter } from './routes/RootRouter.jsx';
import { AuthProvider } from '../features/auth/ui/AuthProvider.jsx';
import { MantineProvider } from '@mantine/core';
import Navigation from '../widgets/navigation/Navigation.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <AuthProvider>
            <Navigation />
            <RootRouter />
          </AuthProvider>
        </MantineProvider>
      </BrowserRouter>
    </>
  )
}

export default App

import GlobalStyles from './GlobalStyles';
import Routes from './routes/';
import { AuthProvider } from './contexts/index';

function App() {
  return (
    <>
    <AuthProvider>
    <Routes/>
    <GlobalStyles/>
    </AuthProvider>
    </>
  )
     
  
}

export default App

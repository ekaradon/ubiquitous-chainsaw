import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Header } from './Header';

function App({ history, user }: { history: string[], user?: { permissions: string[] } }) {
  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default App

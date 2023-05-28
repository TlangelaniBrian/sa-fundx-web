
import './App.css';

import SidePanel from './components/SidePanel';

function App() {
  return (
    <div className="App">
      <header id="header" className="App-header">
      </header>
      <body id="body">
        <SidePanel/>
        <main>Main UI</main>
      </body>
      <footer id="footer">
        Footer UI
      </footer>
    </div>
  );
}

export default App;

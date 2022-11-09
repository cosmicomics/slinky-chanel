import './App.css';
import { Menu } from './components/Menu';
import { data } from './data';

function App() {
    return <Menu content={data} />;
}

export default App;

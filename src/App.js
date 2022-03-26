import { Search } from './Search.tsx';
import { Input } from './Input.tsx';
import { TopDownloads } from './TopDownloads.tsx';

import './index.css'


function App() {
  return (
    <div className="App">
      <Input />
      <Search />
      <TopDownloads />
    </div>
  );
}

export default App;

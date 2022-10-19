import { JSX } from 'solid-js';
import { Sidebar } from './components/navigation/Sidebar';
import { ServerList } from './components/servers/ServerList';

const App: () => JSX.Element = () => {
  return (
    <div
      class="flex gap-4 h-screen"
      style={'background-image: url(https://8thgear.racing/static/bg.webp)'}
    >
      <Sidebar/>

      <ServerList/>
    </div>
  );
};

export default App;

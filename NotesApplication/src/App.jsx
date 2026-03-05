import { memo } from 'react';
import Hero from './Hero.jsx';

const App = () => {
  return (
    <div className ="min-h-screen bg-black text-white">
      <Hero />
    </div>
  );
};

export default memo(App);
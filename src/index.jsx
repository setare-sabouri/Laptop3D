import './style.scss';
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Perf } from 'r3f-perf';
import RotateOverlay from './components/RotateOverlay/RotateOverlay';
import useBreakpoint from './components/Hooks/useBreakpoint.js';
import useOrientation from './components/Hooks/useOrientation.js';

function App() {
  const breakpoint = useBreakpoint();
  const orientation = useOrientation();
  const rotateIsNeeded = breakpoint === 'mobile' && orientation === 'portrait';

  return (
    <>
       <RotateOverlay show={rotateIsNeeded} />
      <Canvas
        className="CanvasCls"
        camera={{ fov: 45, near: 0.1, far: 2000, position: [-3, 1.5, 4] }}
      >
        <Perf />
        <Experience />
      </Canvas>
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);

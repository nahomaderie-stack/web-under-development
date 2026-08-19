import SlicedWaves from './components/SlicedWaves/SlicedWaves';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return <HeroSection />;
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <SlicedWaves
        color1="#008000"
        color2="#70e000"
        color3="#38b000"
        columns={14}
        rows={9}
        barThickness={0.13}
        speed={0.4}
        travel={0.7}
        waveSpread={0.9}
        rowOffset={0.95}
        softness={0.05}
        glow={0}
        brightness={2}
        contrast={1}
        opacity={0.15}
        orientation="horizontal"
        alternate={false}
        mouseInteraction
        mouseStrength={1.15}
        mouseRadius={0.45}
        grain
        grainIntensity={0.05}
      />
    </div>
  );
}

export default App;

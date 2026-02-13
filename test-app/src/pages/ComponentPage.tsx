import { LanternsReact } from 'my-component';
import { useState } from 'react';

function ComponentPage() {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <LanternsReact style={{ width, height }} />
      <button onClick={() => setWidth((w) => (w == 500 ? 700 : 500))}>W</button>
      <button onClick={() => setHeight((h) => (h == 500 ? 700 : 500))}>H</button>
      <pre>{JSON.stringify({width, height})}</pre>
    </div>
  );
}

export default ComponentPage;

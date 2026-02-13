import { CanvasStage } from 'html-canvas-engine/dist/CanvasStage';
import { useEffect, useRef, useState } from 'react';
import { useResizeObserver } from 'usehooks-ts';
import { destroy, init } from './lanterns';

export const MyComponent = () => {
  const container = useRef<HTMLDivElement>(null!);
  const { width, height } = useResizeObserver({ ref: container });
  const [stage, setStage] = useState<CanvasStage | null>(null);

  useEffect(() => {
    if (stage) {
      stage.setSize(width, height);
    }
  }, [width, height]);

  useEffect(() => {
    if (container.current) {
      setStage(init(container.current));
      return () => {
        setStage(null);
        destroy();
      };
    }
  }, []);

  return <div ref={container} style={{width:500, height:500}}>Component</div>;
};

export default MyComponent;

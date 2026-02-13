import { MyComponent } from './index';

/**
 * Example usage of Sound Vis component
 */
export function Example() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MyComponent />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '2rem',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <h1>Component</h1>
        <p>Description</p>
      </div>
    </div>
  );
}

/**
 * Example with fixed dimensions
 */
export function FixedSizeExample() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#1a1a1a'
      }}
    >
      <MyComponent />
    </div>
  );
}

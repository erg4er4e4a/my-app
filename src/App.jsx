import React from 'react';
import { AppKitProvider } from './AppKitProvider';
import ApproveUSDT from './ApproveUSDT';

export default function App() {
  return (
    <AppKitProvider>
      <div style={{ padding: '20px' }}>
        <h1>Web3 Integration Example</h1>
        <ConnectButton />
        <ApproveUSDT />
      </div>
    </AppKitProvider>
  );
}

function ConnectButton() {
  return <appkit-button />;
}

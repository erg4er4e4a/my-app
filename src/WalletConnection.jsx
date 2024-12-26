import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export default function WalletConnection() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div>
        <p>已連接: {address}</p>
        <button onClick={() => disconnect()}>斷開連接</button>
      </div>
    );
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => connect({ connector })}
          disabled={!connector.ready}
        >
          {`連接 ${connector.name}`}
        </button>
      ))}
    </div>
  );
}

export const USDTAbi = [
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [{ name: 'success', type: 'bool' }],
    type: 'function',
  },
];

export const USDTAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

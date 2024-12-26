import React, { useState } from 'react';
import { useContractWrite } from 'wagmi';
import { USDTAbi, USDTAddress } from './abi/USDTAbi';

export default function ApproveUSDT() {
  const [spender, setSpender] = useState('');
  const [amount, setAmount] = useState('');

  // 使用 useContractWrite 實現授權功能
  const { data, isLoading, isSuccess, isError, write } = useContractWrite({
    abi: USDTAbi,
    address: USDTAddress,
    functionName: 'approve',
    args: [spender, amount], // 傳入 spender 和 amount 作為參數
  });

  const handleApprove = () => {
    if (!spender || !amount) {
      alert('請輸入有效的授權地址和金額');
      return;
    }
    write(); // 調用寫入方法
  };

  return (
    <div>
      <h2>Approve USDT</h2>
      <div>
        <label>
          授權地址 (Spender Address):
          <input
            type="text"
            value={spender}
            onChange={(e) => setSpender(e.target.value)}
            placeholder="輸入授權地址"
          />
        </label>
      </div>
      <div>
        <label>
          授權金額 (Amount):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="輸入金額（單位為 USDT 小數位）"
          />
        </label>
      </div>
      <button onClick={handleApprove} disabled={isLoading}>
        {isLoading ? '授權中...' : '授權 (Approve)'}
      </button>
      {isSuccess && <p>授權成功！</p>}
      {isError && <p>授權失敗，請檢查參數或重試。</p>}
    </div>
  );
}

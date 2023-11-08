import React, { useState } from 'react';
import Auth from './Auth'; // 新規登録ダイアログのコンポーネント


function TopPage() {
  const [isDialogOpen, setIsDialogOpen, ] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  
  return (
    <div>
      <h1>トップページ</h1>
      <button onClick={openDialog}>新規登録</button>
      {/* 新規登録ダイアログの表示 */}
      {isDialogOpen && (
        <Auth
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </div>
  );
}

export default TopPage;

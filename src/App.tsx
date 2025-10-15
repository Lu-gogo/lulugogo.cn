// import Home from './views/Home/index.tsx'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react';
import LoadingScreen from './components/loadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟实际加载过程
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* 显示加载界面 */}
      {isLoading && <LoadingScreen />}

      {/* 网站主要内容 */}
      <Outlet />
    </div>
  );
}
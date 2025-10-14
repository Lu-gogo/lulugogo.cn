import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Router from 'next/router'; // 如果使用Next.js

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // 页面切换时的加载状态
    const handleStart = () => {
      setIsLoading(true);
      setLoadingProgress(0);
    };

    const handleComplete = () => {
      setLoadingProgress(100);
      setTimeout(() => setIsLoading(false), 500);
    };

    // 模拟进度更新
    const interval = setInterval(() => {
      if (isLoading && loadingProgress < 90) {
        setLoadingProgress(prev => prev + 10);
      }
    }, 300);

    // Next.js路由事件
    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    // 初始加载
    const timer = setTimeout(() => {
      if (document.readyState === 'complete') {
        handleComplete();
      }
    }, 2000);

    window.addEventListener('load', handleComplete);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
      window.removeEventListener('load', handleComplete);
    };
  }, [isLoading, loadingProgress]);

  return (
    <>
      {isLoading && <LoadingScreen progress={loadingProgress} />}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
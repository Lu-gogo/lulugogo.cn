import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 实际加载检测
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 500);
    };

    // 监听页面加载事件
    window.addEventListener('load', handleLoad);

    // 模拟进度更新
    const interval = setInterval(() => {
      if (progress < 90) {
        setProgress(prev => prev + 10);
      }
    }, 300);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(interval);
    };
  }, [progress]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-800 transition-opacity duration-1000 opacity-100">
      <div className="text-center">
        {/* 动画角色 */}
        <div className="relative mx-auto mb-8 w-40 h-40">
          <img
            src="/images/loading-character.png"
            alt="加载中"
            className="w-full h-full object-contain animate-float"
          />
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse"></div>
        </div>

        {/* 进度条 */}
        <div className="w-72 h-3 bg-purple-700 rounded-full overflow-hidden mx-auto mb-6">
          <div
            className="h-full bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* 加载信息 */}
        <h2 className="text-2xl font-bold text-white mb-2 chinese-font">露露希的小作坊</h2>
        <p className="text-pink-200 mb-4">正在准备魔法材料... {progress}%</p>

        {/* 提示语 */}
        <div className="text-pink-300 text-sm italic max-w-md mx-auto">
          "耐心是魔法师的最高美德，就像等待樱花绽放一样"
        </div>
      </div>

      {/* 装饰性星星 */}
      <div className="absolute top-10 right-10 w-6 h-6 animate-pulse">
        <svg className="text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
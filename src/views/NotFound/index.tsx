// src/views/NotFound/index.tsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="selection:bg-white selection:text-pink-700">
      <div className="relative isolate overflow-hidden bg-gray-900 h-screen">
        <img
          src="../../../public/image/404/sleep.png"
          alt="404背景图"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 text-center  ">
          <h1 className="font-bold text-pink-600 text-9xl">404</h1>
          <h2 className="text-2xl font-semibold text-white lg:mt-4 lg:text-3xl sm:text-6xl sm:mt-8">页面未找到</h2>
          <div className="text-pink-700 mt-6 max-w-md mx-auto lg:text-lg sm:text-2xl sm:mt-12">
            抱歉，您访问的页面里只有熊熊在睡觉
            <div>可能是URL输入错误或页面已被移除</div>
          </div>
          <div className="lg:mt-12 sm:mt-32">
            <Link
              to="/"
              className="focus:outline-none inline-flex items-center bg-pink-600 text-white font-bolds rounded-lg hover:bg-pink-700 hover:border-white hover:border-2 transition-colors 
              px-6 py-3 lg:h-15 lg:w-40 lg:text-lg sm:h-24 sm:w-60 sm:text-3xl"
            >
              <svg className="lg:w-5 lg:h-5 lg:mr-2 sm:w-10 sm:h-10 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              返回首页
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
import { useState } from 'react';
type InfoType = 'penguin' | 'email' | null

export default function ContactButtons() {
  const [activeInfo, setActiveInfo] = useState<InfoType>(null);

  const handleMouseEnter = (infoType: InfoType) => {
    if (activeInfo === infoType) {
      setActiveInfo(null);
    } else {
      setActiveInfo(infoType);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-20 justify-center items-center py-10">
      {/* 我的企鹅按钮 */}
      <div className="relative">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
          onMouseEnter={() => handleMouseEnter('penguin')}
        >
          我的企鹅
        </div>

        {/* 企鹅信息框 */}
        <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 rounded-xl border border-pink-200 bg-white text-pink-600 p-6 text-center shadow-2xl p-6 z-10 min-w-max transition-all duration-300 ${activeInfo === 'penguin' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          {/* 信息内容 */}
          320602150
        </div>
      </div>

      {/* 我的邮箱按钮 */}
      <div className="relative">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
          onMouseEnter={() => handleMouseEnter('email')}
        >
          我的邮箱
        </div>

        {/* 邮箱信息框 */}
        <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 rounded-xl border-pink-200 bg-white text-pink-600 p-6 z-10 min-w-max border border-purple-200 transition-all duration-300 ${activeInfo === 'email' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          {/* 信息内容 */}
          xi-lank@outlook.com
        </div>
      </div>
    </div>
  );
}
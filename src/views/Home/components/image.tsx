import { useState } from 'react';

interface imageProps {
  src: string,
  pos: string
}

export default function ImageWithEffects({ src, pos }: imageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`absolute ${pos} overflow-hidden group animate-float cursor-pointer`}
      style={{ animationDelay: '3s' }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* 图片容器 */}
      <div className="relative w-full h-full">
        {/* 主图片 */}
        <img
          src={src}
          alt="被黄色星星环绕的动漫女性角色"
          className={`w-full h-full object-cover transition-all duration-700 
                     ${isExpanded ? 'scale-125 brightness-125' : 'group-hover:scale-110 group-hover:brightness-110'}`}
        />

        {/* 悬停/点击特效 */}
        <div className={`absolute inset-0 transition-all duration-700 
                        ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>

          {/* 星星特效 */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full filter blur-sm animate-twinkle"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.15}s`,
                animationDuration: `${1 + Math.random() * 3}s`
              }}
            ></div>
          ))}

          {/* 光晕效果 */}
          <div className="absolute inset-0 bg-gradient-to-l from-yellow-200/30 to-transparent pointer-events-none"></div>
        </div>

        {/* 装饰性边框 */}
        <div className={`absolute inset-0 border-4 transition-all duration-500 rounded-lg
                        ${isExpanded ? 'border-yellow-400/60' : 'border-transparent group-hover:border-yellow-300/30'}`}></div>
      </div>

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-l from-violet-600/70 via-violet-500/40 to-transparent pointer-events-none"></div>

      {/* 交互提示 */}
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full">
          {isExpanded ? '点击收起' : '点击展开'}
        </span>
      </div>
    </div>
  );
};
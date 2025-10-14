

interface imageProps {
  src: string,
  pos: string,
  color: string,
  info: string,
}

export default function ImageWithEffects({ src, pos, color, info }: imageProps) {

  return (
    <div
      className={`absolute ${pos}  group animate-float cursor-pointer hover:scale-125 duration-700`}
      style={{ animationDelay: '3s' }}
    >
      {/* 图片容器 */}
      <div className="relative w-full h-full">
        {/* 主图片 */}
        <img
          src={src}
          alt="百合熊风暴"
          className="w-full h-full object-cover transition-all "
        />
      </div>

      {/* 渐变遮罩 */}
      <div className={`absolute inset-0 bg-gradient-to-l ${color} pointer-events-none transition-all  
                      border-2 border-transparent group-hover:border-yellow-300`}></div>

      {/* 交互提示 */}
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="italic text-white text-sm font-medium bg-pink-600/20 px-3 py-1 rounded-full ">
          {info}
        </span>
      </div>
    </div>
  );
};
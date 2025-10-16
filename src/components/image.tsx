interface imageProps {
  src: string,
  pos: string,
  color: string,
  info: string | null,
  border: string
}

{/* <ImageWithEffects
            src="../../../../public/image/Home/guimi.jpg"
            pos="left-0 top-0 w-1/4 h-full z-0"
            color='from-violet-600/70 via-violet-500/40 to-transparent'
            info='呆呆可爱园丁'
          />
          <ImageWithEffects
            src="../../../../public/image/Home/Yurikuma.gif"
            pos="right-0 top-0 w-1/4 h-full z-0"
            color='from-violet-600/70 via-violet-500/40 to-transparent'
            info='露露和银子'
            border='border-2 border-transparent group-hover:border-yellow-300'
          /> */}

export default function ImageWithEffects({ src, pos, color, info, border }: imageProps) {

  return (
    <div
      className={`absolute ${pos}  group animate-float cursor-pointer hover:scale-125 duration-700 z-10`}
      style={{ animationDelay: '3s' }}
    >
      {/* 图片容器 */}
      <div className="relative w-full h-full">
        {/* 主图片 */}
        <img
          src={src}
          alt={info || ''}
          className="w-full h-full object-cover transition-all "
        />
      </div>

      {/* 渐变遮罩 */}
      <div className={`absolute inset-0 bg-gradient-to-l ${color} ${border} pointer-events-none transition-all  
                      `}></div>

      {/* 交互提示 */}
      {info && <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="italic text-white text-sm font-medium bg-pink-600/20 px-3 py-1 rounded-full ">
          {info}
        </span>
      </div>}
    </div>
  );
};
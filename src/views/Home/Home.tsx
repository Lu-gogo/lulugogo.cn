import ContactButtons from "../../components/contactBut"
import ImageWithEffects from "../../components/image"
const links = [
  { value: '学点计算机', name: '什么我又幻想了', image: '../../../public/image/Home/huanxiang.png', href: 'https://github.com/Lu-gogo' },
  { value: '看点动漫', name: '呃呃是臭郭楠', image: '../../../public/image/Home/guonan.png', href: '#' },
  { value: '做点模型', name: '魏大勋', image: '../../../public/image/Home/feiwu.png', href: '#' },
  { value: '玩点小游戏', name: '诡秘诡秘想不想和我玩第五人格喵喵喵', image: '../../../public/image/Home/yuanding.png', href: '#' },
]



export default function Home() {

  return (
    <div className="selection:bg-white selection:text-pink-700">
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="../../../public/image/Home/homeBanner.png"
          alt="露露希的小作坊背景图"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="../../../public/icon/android-chrome-512x512.png"
                alt="露露希的小作坊图标"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg sm:rounded-md lg:rounded-lg
                          border-2 border-pink-100 
                          shadow-lg 
                          shadow-pink-700/30
                          hover:scale-120 
                          hover:shadow-pink-700/50
                          transition-all 
                          duration-300
                          cursor-pointer" // 响应式尺寸
              />
              <h2 className="text-6xl sm:text-6xl font-semibold tracking-tight text-pink-600 whitespace-nowrap">
                欢迎来到断绝之壁！嗷呜嗷呜!!!!
              </h2>
            </div>
            <p className="italic mt-8 text-lg font-medium text-pretty text-pink-500 sm:text-xl/8 
          first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-pink-600
          first-letter:mr-3 first-letter:float-left">
              我的名字叫做<span className="text-2xl text-pink-600 font-bold">露露希</span>
              ,年龄20岁,家在重庆市渝北区的悦清大道内,未婚. 我在「重庆大学」上学,每周最晚也会在周五九点前回家, 不吸烟不喝酒,偶尔沾点钓鱼,晚上十一点上床,保证睡足八个小 时,睡前喝一杯热乎乎的牛奶,再做二十分钟伸展运动,然后再睡觉,基本能熟睡到天亮,像婴儿一样不留下任何疲惫和压力. 就这样迎来第二天的早晨,健康检查结果也显示我很正常.
              我想说明我是一个不论何时都追求内心平稳的人,不拘泥于胜负,不纠结于烦恼,不树立会使我夜不能寐的敌人,这就是我在这个社会生活的态度,我也清楚这就是我的幸福.再说,就算要战斗我也不会输给任何人.
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-2xl lg:mx-0 lg:max-w-none">

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {links.map((link) => (
                <a
                  href={link.href}
                  key={link.name}
                  className="group relative overflow-visiable rounded-b-4xl border-4 border-purple-600/20 bg-purple-400/40 p-6 text-center shadow-2xl shadow-indigo-500/50 transition-all duration-300 hover:scale-105 hover:border-purple-600/50 hover:bg-purple-400/60 hover:shadow-3xl"
                >
                  {/* 悬停时显示的图片 - 放在 a 标签内部 */}
                  <div className="absolute left-1/2 -top-40 transform -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                    <div className=" rounded-sm shadow-2xl ">
                      <img
                        src={link.image}
                        alt={link.value}
                        className="w-40 h-35 object-cover rounded-lg border-2 border-pink-100"
                      />
                    </div>

                  </div>
                  {/* 装饰性角标 */}
                  {/* <div className="absolute -top-2 -right-2 h-10 w-10 rounded-bl-full bg-emerald-400/20"></div>
                <div className="absolute -bottom-2 -left-2 h-12 w-12 rounded-tr-full bg-sky-500/20"></div> */}

                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-violet-500 transition-colors group-hover:text-violet-700">
                      {link.value}
                    </div>
                    <div className="line-through mt-2 text-sm text-pink-100 transition-colors group-hover:text-white/80">
                      {link.name} <span className="ml-1 transition-transform group-hover:translate-x-1"></span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>


        </div>
      </div>

      {/* <!-- 填补空白的装饰性区域 --> */}
      <div className="wave-pattern py-16 bg-gradient-to-b from-violet-500 to-violet-200">
        <div className="relative container h-60 mx-auto px-4">
          <ImageWithEffects
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
          />

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-violet-800 chinese-font mb-4">不想只当网友？</h2>
            <p className="italic text-white line-through">还想跟我处闺蜜？</p>
            <p className="italic text-white max-w-2xl mx-auto">欢迎通过以下方式找到我，一起分享命运的果实！</p>
          </div>
          <ContactButtons />
        </div>
      </div>

      {/* <!-- 简约页脚 --> */}
      <footer className="bg-pink-500 text-white py-8 text-center">
        <p className="chinese-font">© 2025 露露希的小作坊 · 嘘... 每当我的气泡触碰到某物并随之破裂时，就会从该物身上夺走些什么</p>
      </footer>

    </div>
  )
}


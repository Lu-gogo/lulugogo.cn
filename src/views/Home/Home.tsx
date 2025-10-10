
const links = [
  { name: '学点计算机', value: '什么我又幻想了', href: 'https://github.com/Lu-gogo' },
  { name: '看点动漫', value: '呃呃是臭郭楠', href: '#' },
  { name: '做点模型', value: '魏大勋', href: '#' },
  { name: '玩点小游戏', value: '诡秘诡秘想不想和我玩第五人格喵喵喵', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function Home() {
  return (
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
        <div className="mx-auto max-w-2xl lg:mx-0 selection:bg-purple-300 selection:text-purple-900">
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
              欢迎来到断绝之壁！
            </h2>
          </div>
          <p className="italic mt-8 text-lg font-medium text-pretty text-pink-500 sm:text-xl/8 
          first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-pink-600
          first-letter:mr-3 first-letter:float-left">
            我的名字叫做
            <span className="before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-pink-300 relative inline-block">
              <span className="relative text-white">露露希</span>
            </span>
            ，年龄22岁，家在重庆市渝北区的悦清大道内，未婚。 我在「重庆大学」上学，每周最晚也会在周五九点前回家，  不吸烟不喝酒，偶尔沾点钓鱼，晚上十一点上床，保证睡足八个小 时，睡前喝一杯热乎乎的牛奶，再做二十分钟伸展运动，然后再睡觉，基本能熟睡到天亮，像婴儿一样不留下任何疲惫和压力。 就这样迎来第二天的早晨，健康检查结果也显示我很正常。我想说明我是一个不论何时都追求内心平稳的人，不拘泥于胜负，不纠结于烦恼，不树立会使我夜不能寐的敌人，这就是我在这个社会生活的态度，我也清楚这就是我的幸福。再说，就算要战斗我也不会输给任何人。
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-2xl/7 font-semibold text-pink-700 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-pink-500">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-pink-600">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const ProjectExperience = () => {
  return(
    <div>
      <div className="flex flex-row text-2xl">
        <p>🛠️</p>
        <p className="overline ml-2 font-bold bg-gradient-to-r from-[rgba(46,157,240)] to-[rgba(104,185,246)] bg-clip-text text-transparent">项目经历</p>
      </div>

      <div className="flex flex-row  mt-4 justify-between">
        <div className="flex flex-row font-bold text-lg">
          <p>同画（ArtnectHub）</p>
          <p className="bg-blue-100 rounded-full text-sm w-20 text-[#68a1d1] text-center"><p className="mt-1">团队项目</p></p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">2023.9-2024.3</p>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-[#8fb3c2]">https://github.com/JiangXue-Center/ArtnectHub</p>
        <p className="text-gray-400 mt-2">“同画（ArtnectHub）”是一款用户通过自然语言去生成图画的app。</p>
        <p className="mt-4">职责描述：</p>
        <p className="mt-2">1. 负责整个项目UI设计。</p>
        <p className="mt-2">2. 使用react native + expo + nativeBase开发客户端。</p>
        <p className="mt-2">3. 使用NativeModule功能将原生支付宝集成到App。</p>
        <p className="mt-4">项目亮点：</p>
        <p className="mt-2">......</p>
      </div>

      <div className="flex flex-row  mt-4 justify-between">
        <div className="flex flex-row font-bold text-lg">
          <p>新苗同学 - 大学新生智慧迎新平台</p>
          <p className="bg-blue-100 rounded-full text-sm w-20 text-[#68a1d1] text-center ml-4"><p className="mt-1">团队项目</p></p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">2024.1-2024.3</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[#8fb3c2]">App：https://gitee.com/wuyuyjin/smart-welcome-platform</p>
        <p className="text-[#8fb3c2]">后台：https://gitee.com/wuyuyjin/smart-welcome-platform-backstage-management</p>
        <p className="text-gray-400 mt-2">“新苗同学 - 大学新生智慧迎新平台”专注新生从入学阶段的切实需求，提供全方位、个性化的校园生活指导和服务。</p>
        <p className="mt-4">职责描述：</p>
        <p className="mt-2">1. 负责整个项目UI设计。</p>
        <p className="mt-2">2. 使用react native + expo + tamagui开发移动端。</p>
        <p className="mt-2">3. 使用react + Vite + MantineUI开发后台管理</p>
        <p className="mt-4">项目亮点：</p>
        <p className="mt-2">......</p>
      </div>
    </div>
  )
}

export default ProjectExperience
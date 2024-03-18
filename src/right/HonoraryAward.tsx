const HonoraryAward = () => {
  return (
    <div>
      <div className="flex flex-row text-2xl">
        <p>🏅️</p>
        <p
          className="overline ml-2 font-bold bg-gradient-to-r from-[rgba(46,157,240)] to-[rgba(104,185,246)] bg-clip-text text-transparent">荣誉奖项</p>
      </div>

      <div className="mt-4 flex flex-row justify-between">
        <div className="w-1/2 text-sm">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <p className="font-bold">软设杯</p>
              <p className="bg-blue-100 rounded-full text-[#68a1d1] ml-4 text-center w-12">校级</p>
            </div>
            <div>
              <p className="text-gray-400">2023.6.16</p>
            </div>
          </div>
          <p className="mt-4">广州商学院社团文化节之“软社杯”一等奖</p>
        </div>

        <div className="w-1/2 text-sm">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <p className="font-bold">节粮可视化设计大赛</p>
              <p className="bg-blue-100 rounded-full text-[#68a1d1] ml-4 text-center w-12">校级</p>
            </div>
            <div>
              <p className="text-gray-400">2024.3.14</p>
            </div>
          </div>
          <p className="mt-4">节粮可视化设计大赛可视化设计类二等奖</p>
        </div>
      </div>
    </div>
  )
}

export default HonoraryAward
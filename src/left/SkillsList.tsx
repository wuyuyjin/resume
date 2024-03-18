import {IconBrandReact, IconBrandVue} from "@tabler/icons-react";

const SkillsList = () => {
  return (
    <div>
      <div className="text-2xl flex flex-row">
        <p>📖</p>
        <p className="overline ml-2 font-bold bg-gradient-to-r from-[rgba(46,157,240)] to-[rgba(104,185,246)] bg-clip-text text-transparent">技能清单</p>
      </div>
      <div className="w-60">
        <table className="table">
          {/* head */}
          <thead>
          <tr>
            <th><p className="font-bold text-xl text-black">框架</p></th>
            <th><p className="font-bold text-xl text-black">熟练度</p></th>
          </tr>
          </thead>
          <tbody>
          {/* row 1 */}
          <tr className="text-center">
            <td className="flex flex-row"><IconBrandReact color="#3a90d8"/><p className="m-1">react</p></td>
            <td><p className="bg-blue-100 rounded-full text-[#68a1d1]">熟练</p></td>
          </tr>
          {/* row 2 */}
          <tr className="text-center">
            <td className="flex flex-row"><IconBrandReact color="#3a90d8"/><p className="ml-1">react native</p></td>
            <td><p className="bg-blue-100 rounded-full text-[#68a1d1]">熟练</p></td>
          </tr>
          {/* row 3 */}
          <tr className="text-center">
            <td className="flex flex-row"><IconBrandVue color="#76b585"/><p className="m-1">vue</p></td>
            <td><p className="bg-blue-100 rounded-full text-[#68a1d1]">熟练</p></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SkillsList
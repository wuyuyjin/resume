import MyInfo from "./MyInfo.tsx";
import SkillsList from "./SkillsList.tsx";
import Programming from "./Programming.tsx";
import Tool from "./Tool.tsx";
import Network from "./Network.tsx";
import Study from "./Study.tsx";

const Left = () => {
  return(
    <div>
      <div>
        <MyInfo/>
      </div>
      <div className="mt-6">
        <SkillsList/>
      </div>

      <div className="mt-6">
        <Programming/>
      </div>

      <div className="mt-6">
        <Tool/>
      </div>

      <div className="mt-6">
        <Network/>
      </div>

      <div className="mt-6">
        <Study/>
      </div>

    </div>
  )
}

export default Left
import ProjectExperience from "./ProjectExperience.tsx";
import HonoraryAward from "./HonoraryAward.tsx";
import ExperienceAtSchool from "./ExperienceAtSchool.tsx";

const Right = () => {
  return(
    <div className="ml-2">
      <div>
        <ProjectExperience/>
      </div>

      <div className="mt-6">
        <HonoraryAward/>
      </div>

      <div className="mt-6">
        <ExperienceAtSchool/>
      </div>
    </div>
  )
}

export default Right
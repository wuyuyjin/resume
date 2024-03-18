import {IconBrandGithub, IconMail, IconPhone} from "@tabler/icons-react";

const MyInfo = () => {
  return (
    <div>
      <div className="flex justify-between items-end mr-8">
        <p className="text-2xl">吴裕锦</p>
        <p className="text-sm text-slate-500">2002.7.13</p>
      </div>

      <div className="mt-2">
        <p className="text-sm">广州商学院｜本科｜软件工程｜25届</p>
      </div>

      <div className="text-sm flex justify-around mt-2">
        <div className="space-y-2">
          <IconMail size="18"/>
          <IconPhone size="18"/>
          <IconBrandGithub/>

        </div>
        <div className="space-y-2 mr-16">
          <p>3075385315@qq.com</p>
          <p>13612746972</p>
          <p>github.com/wuyuyjin</p>
        </div>
    </div>
</div>
)
}

export default MyInfo
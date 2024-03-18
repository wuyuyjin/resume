import {IconWorld} from "@tabler/icons-react";

const Network = () => {
  return(
    <div>
      <div className="text-2xl flex flex-row">
        <p><IconWorld color="#70aeb2" size="30"/></p>
        <p className="font-bold ml-2">网络知识</p>
      </div>

      <div className="mt-2">
        <p>深入了解HTTP协议、跨域、WebSockets、网络安全和性能优化，熟悉安全通信的基本原理和<br/>
          常用技术。</p>
      </div>
    </div>
  )
}

export default Network
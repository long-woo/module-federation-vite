import { init, registerPlugins } from '@module-federation/enhanced/runtime'

import runtimePlugin from './modPlugin'

init({
  name: 'main2',
  remotes: [
    {
      name: 'app1',
      // mf-manifest.json 是在 Module federation 新版构建工具中生成的文件类型，对比 remoteEntry 提供了更丰富的功能
      // 预加载功能依赖于使用 mf-manifest.json 文件类型
      entry: `http://localhost:8081/mf-manifest.json`,
    },
    {
      name: 'app2',
      entry: `http://localhost:8082/mf-manifest.json`,
    }
  ],
})
console.log(11111)
if (import.meta.env.DEV) {
  // registerPlugins([runtimePlugin()])
}

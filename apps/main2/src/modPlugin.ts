import type { FederationRuntimePlugin } from '@module-federation/enhanced/runtime'

const runtimePlugin: () => FederationRuntimePlugin = function () {
  return {
    name: 'co-runtime-plugin',
    // beforeInit(args) {
    //   console.log('beforeInit: ', args)
    //   return args
    // },
    afterResolve(args) {
      console.log('afterResolve: ', args)
      const origin = new URL(args.remoteInfo.version ?? '').origin

      args.remoteInfo.entry = `${origin}${args.remoteInfo.entry}`
      return args
    },
    // onLoad(args) {
    //   console.log('onLoad: ', args)
    //   return args
    // },
    // async loadShare(args) {
    //   console.log('loadShare:', args)
    // },
    // async beforeLoadShare(args) {
    //   console.log('beforeloadShare:', args)
    //   return args
    // },
  }
}

export default runtimePlugin

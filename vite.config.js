import { defineConfig, loadEnv } from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const envConfig = loadEnv(mode,'./env');
  //在任何地方使用环境变量 import.meta.env.变量名
  let config = {
    plugins: [vue()],
    server:{
      port:envConfig.VITE_SERVER_PORT,
      host:envConfig.VITE_SERVER_HOST
    },
    envDir: './env',
    resolve: {
      alias: {
        "_": resolve('src')
      }
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `@import '_/assets/style/variable.sass'`
        }
      }
    }
  }
  return defineConfig(config)
}




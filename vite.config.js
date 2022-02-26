import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';
// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const envConfig = loadEnv(mode, './env');
  //在任何地方使用环境变量 import.meta.env.变量名
  let config = {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'wi-[name]'
      }),
    ],
    server: {
      port: envConfig.VITE_SERVER_PORT,
      host: envConfig.VITE_SERVER_HOST,
      proxy:{
        '/api': {
          target: `${envConfig.VITE_TARGET_HOST}:${envConfig.VITE_TARGET_PORT}`,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
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
          additionalData: `@import '_/assets/style/variable.sass'\n@import '_/assets/style/base.sass'`
        }
      }
    }
  }
  return defineConfig(config)
}




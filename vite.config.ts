import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import UnoCSS from 'unocss/vite'
import progress from 'vite-plugin-progress'
import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('iconpark-')
        }
      }
    }),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: true,
      dirs: ['src/components'], // 按需加载的文件夹
      resolvers: [ElementPlusResolver()]
    }),
    UnoCSS(),
    progress(),
    //优化包体积
    {
      ...legacy({
        targets: ['defaults', 'not IE 11']
      }),
      apply: 'build'
    },
    //压缩代码
    { ...viteCompression(), apply: 'build' },
    visualizer()
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.vue', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // 开启 css 的 SourceMap
    devSourcemap: true,
    // 配置 Less
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 加载自己的 less 变量
        preprocessorOptions: {
          less: {
            javascriptEnabled: true
          },
          patterns: [path.resolve(__dirname, './src/assets/main.less')]
        }
      }
    }
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 8000,
    hmr: true
  }
})

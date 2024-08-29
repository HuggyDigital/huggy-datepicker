import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import path from 'path';
import { mdPlugin } from './viteMarkdownPlugin';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const devLibPath = path.resolve(__dirname, '../lib');
  const prodLibPath = path.resolve(__dirname, '../index.es');
  return {
    base: '/@huggydigital/huggy-datepicker/',
    plugins: [vue(), vueJsx({ mergeProps: false }), svgLoader(), mdPlugin],
    resolve: {
      alias: {
        '@huggydigital/huggy-datepicker': command === 'build' ? prodLibPath : devLibPath,
      },
    },
  };
});

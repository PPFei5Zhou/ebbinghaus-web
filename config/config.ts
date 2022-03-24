import { defineConfig } from 'umi';
import { join } from 'path';
import routes from './routes';
import layoutSettings from './layoutSettings';

export default defineConfig({
  request: {
    dataField: '', // 配置为 '' （空字符串）的时候不做处理
  },
  openAPI: {
    requestLibPath: "import { request } from 'umi'",
    schemaPath: join(__dirname, 'oneapi.json'),
    mock: false,
  },
  dva: {
    immer: true,
    hmr: true,
  },
  mfsu: {},
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  layout: {
    name: 'Ebbinghaus',
    title: 'Ebbinghaus',
    sideWidth: 208,
    contentStyle: {
      background: 'white',
    },
    ...layoutSettings,
  },
  hash: true,
  routes,
});

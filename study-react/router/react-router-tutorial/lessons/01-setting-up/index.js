import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import routes from './modules2/routes';

render(
  // 使用browserHistory模式
  // 但是有一个小坑！当你点击一个链接后，刷新页面，会出现 Cannot GET /about
  // 因为当使用H5模式时，你刷新url是要向后台发请求的，但是呢，后台又没有配置
  // 所以啊，后台要配置，DevServer使用这种配置 --history-api-fallback
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('app'))

/**
 *  axios 配置文件
 *  @desc: 配置ajax headers request Response 数据预处理
 *  @author: helloLaoYang<aaron@codonas.cn>
 */

import axios from 'axios';
import systems from '@/configs';
import configs from '@/configs/api';

const { baseUrl } = configs;
// 确认默认链接
axios.defaults.baseURL  = baseUrl;

// 初始化post header
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/*
* todo: 预处理Response数据
* desc: 可以进行返回码操作
* @return data || null;
**/
axios.defaults.transformResponse = function _transformResponse( res ){
  // 处理返回数据
  try {
    // JSON 化数据
    res instanceof Object ? null : res = JSON.parse( res );
  } catch (e) {
    // 不是对象或者json格式字符串
    return null;
  };
  // 返回object对象到response[data]
  return res;
};

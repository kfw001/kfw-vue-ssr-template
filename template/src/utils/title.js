
import configs from '@/configs';

// 获取数据
function getTitle (vm) {
  const { title } = vm.$options;
  if (title) {
    return typeof title === 'function'? title.call(vm) : title;
  };
};

// 服务端混合
const serverTitleMixin = {
  created () {
    const title = getTitle(this);
    if (title) {
      this.$ssrContext.title = `${configs.title || ''}${title}`;
    };
  }
};

// 客户端混合
// 用于开发阶段
const clientTitleMixin = {
  mounted () {
    const title = getTitle(this);
    if (title) {
        document.title = `${configs.title || ''}${title}`;
    };
  }
};

export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin;

import VIcon from './components/icon';

const components = {
    VIcon,
};
const install = function(Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    install,
    ...components
};

module.exports.default = module.exports = API;

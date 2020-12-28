// import { createApp, computed, watchEffect } from 'vue';
import { machineInit } from './method/init.ts';

const install = function(Vue, options) {
  machineInit(Vue, options);
};

export default { install };

'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('lodash'),b=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),c=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),d=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),e=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),f=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),g=require('./3bfffbe88b3d923921f851c0697974fe.js'),h=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),i=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),j=require('./d28a711224425b00101635efe1034c99.js'),k=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),l=require('./5719b6ded53098ffd9e848abcac30153.js'),m={network:{RequestDomain:[],WsRequestDomain:[],UploadDomain:[],DownloadDomain:[]},setting:_extends({},k.setting)},n=()=>{try{const a=b.getState();a.window.simulator.show||b.dispatch({type:c.WINDOW_TOGGLE_SIMULATOR}),a.window.debug.show||b.dispatch({type:c.WINDOW_TOGGLE_DEBUGGER})}catch(a){}},o=(a,c,d)=>new Promise(async(g,h)=>{let k;try{const n=e.projectList,o=`${c.appid}_${c.projectname}`;let p=!1;for(let a in n)if(a==o){k=n[a],p=!0;break}p?k.projectpath!==d&&h(l.ERROR.DUPLICATE_PROJECT_ID()):(k=_extends({},c,{isAdmin:a.is_admin,isTourist:!1,urlCheck:!0,projectid:`${c.appid}_${c.projectname}`,hash:i.strToHash(`${c.appid}_${c.projectname}`),appid:c.appid,projectname:c.projectname,projectpath:d,appShowImageUrl:'',libVersion:j.getVendorConfig().currentLibVersion,attr:_extends({},m,{platform:!!a.is_platform,platformNickname:a.platform_nickname||'',appNickName:''})}),b.dispatch(f.createProjectSuccess(k))),g(k)}catch(a){h(l.ERROR.GENERIC_ERROR(a.toString()))}});module.exports={getProject:o,openProject:(a,c,d)=>new Promise(async(e,g)=>{try{const g=await o(a,c,d),h=()=>{b.dispatch(f.openProject(g.projectid)).then(()=>{setTimeout(()=>{n()},20)})},i=b.getState();i.project&&i.project.current?(b.dispatch(f.closeProject()),setTimeout(h,50)):h(),e()}catch(a){g(a)}}),isOpened:(a,c)=>{try{const d=b.getState().project.current;return d.projectid===a&&d.projectpath===c}catch(a){return!1}},openSimulatorAndDebugger:n,compile:()=>{try{b.dispatch(h.compile({origin:d.COMPILE_ORIGIN.HTTP}))}catch(a){}}}}(require('lazyload'),require);
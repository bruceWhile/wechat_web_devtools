"use strict";!function(require,directRequire){const a={};module.exports={setGlobalStorage:async function(b,c){const{api:d,args:e}=c;return a[e.key]=e.data,{errMsg:`${d}:ok`}},getGlobalStorage:async function(b,c){const{api:d,args:e}=c,f=a[e.key];return f?{errMsg:`${d}:ok`,data:f}:{errMsg:`${d}:fail data not found`}},getGlobalStorageInfo:async function(b,c){const{api:d,args:e}=c,f=JSON.stringify(a);return{errMsg:`${d}:ok`,keys:Object.keys(a),currentSize:parseInt(f.length/1024),limitSize:20480}},removeGlobalStorage:async function(b,c){const{api:d,args:e}=c;return delete a[e.key],{errMsg:`${d}:ok`}}}}(require("lazyload"),require);
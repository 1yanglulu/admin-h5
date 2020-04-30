let baseUrl=""
if(process.env.NODE_ENV==="development"){
  baseUrl="https://local.duizhuang.com:30002"
}else if(process.env.NODE_ENV==="production"){
  baseUrl="https://local.duizhuang.com:30002"
}else if(process.env.NODE_ENV==="test"){
  baseUrl="https://local.duizhuang.com:3000"
}
export default {
  baseUrl:baseUrl
}
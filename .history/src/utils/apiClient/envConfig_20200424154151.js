let baseUrl=""
if(process.env.NODE_ENV==="development"){
  baseUrl="https://local.duizhaung.com"
}else if(process.env.NODE_ENV==="production"){
  baseUrl="https://local.duizhaung.com"
}else if(process.env.NODE_ENV==="test"){
  baseUrl="https://local.duizhaung.com"
}
export default {
  baseUrl:baseUrl
}
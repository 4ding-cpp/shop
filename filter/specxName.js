
//過濾器
var specxName = (obj) => {
  if(typeof obj !== 'object') return obj ;
  let name = "";
  obj.forEach(element => {
    name += element.tw;
  });
  return name;
};
export default { specxName }
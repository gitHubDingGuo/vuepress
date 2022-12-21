
window['addAds'] = function(){
    //window.onload=function(){
    let childrenList=document.getElementsByClassName('google_ad_bottom');
    for(let i=0;i<childrenList.length;i++){
        (adsbygoogle = window.adsbygoogle || []).push({});
    //}
}
}
//全局字段
window.mykey='mykey';

<template>
  <aside class="no-rightbar" id="id-rightbar">
    <div class="right-side-toolbar" :default-active="$route.path" :datas="$route.path">

           <div class="option-box-toc-fixeds">
           <div class="toc-container-sidebar" id="toc-container-id">
                   <div class="pos-box">
                        <div class="hData" style="font-weight:bold;text-align:center;"></div>
                        <hr style="margin-top:8px;">

                          <!--<ul class="ulData">
                            <Toc />
                                <MySidebarItems />
                        </ul>-->
                        <div class="icon-arrow"></div>
                        <div class="scroll-box" style="max-height:650px；width: 245px; font-size: 0.55rem;">
                            <div class="toc-box">
                                   <Toc />       
                            </div>
                        </div>


                         <!-- <div style="height: 300px;  width: 120px; background:red;overflow-x: hidden; overflow-y: auto;" class="scroll"> 
                        <div style="height:100%; width: 140px; overflow-x: hidden;" class="scroll-son"> 
                               <Toc />
                        </div>
                       </div>-->
                      
                   </div>

                   <hr style="margin-top:8px;">
                              
                    <div style="padding-left:0.5em;">
                        <span style="font-size:12px;font-weight:400;">
                            <span style="color:red;font-weight:bold;">【双11】</span>阿里云服务器读者专享
                        </span>
                        <br>
                        <ul style="line-height:1rem;font-size:0.9em;color:var(--c-text);font-weight:300;margin-left:10px;margin-top:5px;">
                            <li>ECS 1核2G,1M,40GB, 79元/1年 <a href="https://www.aliyun.com/minisite/goods?userCode=qnyv6aho&share_source=copy_link" target="_blank">查看</a>
                            </li>
                            <li>云数据库RDS MySQL 限时9.9/1年 <a href="https://www.aliyun.com/minisite/goods?userCode=qnyv6aho&share_source=copy_link" target="_blank">查看</a>
                            </li>
                            <li>对象存储OSS 0.072/GB <a href="https://www.aliyun.com/minisite/goods?userCode=qnyv6aho&share_source=copy_link" target="_blank">查看</a>
                            </li>
                        </ul>
                    </div>

                   <div style="padding-left:0.5em;">
                        <span style="font-size:12px;font-weight:400;">
                            <span style="color:red;font-weight:bold;">【双11】</span>腾讯云服务器读者专享
                        </span>
                        <br>
                        <ul style="line-height:1rem;font-size:0.9em;color:var(--c-text);font-weight:300;margin-left:10px;margin-top:5px;">
                            <li>云服务器爆品抢先购,低至4.2元/月 <a href="https://url.cn/8V0anjy6" target="_blank">查看</a>
                            </li>
                            <li>2核2G轻量应用服务器6.58元/月起 <a href="https://url.cn/BdzVr7L0" target="_blank">查看</a>
                            </li>
                            <li>云数据库MySQL基础版1元体验 <a href="https://url.cn/GKdFGTMg" target="_blank">查看</a>
                            </li>
                            <li>ElasticSearch新用户特惠 <a href="https://url.cn/L9HvLmqW" target="_blank">查看</a>
                            </li>
                        </ul>
                    </div>

           </div>
        </div>  
     
    

        <div :class="shareSeeFlag ? 'right-option-box' : 'right-option-box'"  @mouseenter = "share"  @mouseleave="noshare">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" horizontalAlign="false" verticalAlign="false" width="25" height="25" viewBox="0 0 1024 1024" style="color: var(--c-text);" class="iconify iconify--ep">
                <path fill="currentColor" d="M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0a48 48 0 0 1 96 0z">
                </path>
            </svg>
            <span class="show-txt">手机看</span>
            <div  :class="shareSeeFlag ? 'toc-container-hover' : 'toc-container'">
                <div class="pos-box">
                    <div class="icon-arrow">
                    </div>
                    <div class="scroll-box" style="text-align: center;">
                        <span style="font-size: 0.9rem;">微信扫一扫</span>
                        <br>
                        <img :src="newUrl" style="margin: 10px; height: 180px;">
                        <b>手机看或分享至朋友圈</b>
                    </div>
                </div>
            </div>
        </div>

        <div class="right-option-box" id="hideLeftSideBar" @click="fullScreen">
            <a title="点击切换全屏">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" horizontalalign="false" verticalalign="false" style="color: var(--c-text);" width="25" height="25" viewBox="0 0 20 20" class="iconify iconify--dashicons">
                    <path fill="currentColor" d="M7 2H2v5l1.8-1.8L6.5 8L8 6.5L5.2 3.8L7 2zm6 0l1.8 1.8L12 6.5L13.5 8l2.7-2.7L18 7V2h-5zm.5 10L12 13.5l2.7 2.7L13 18h5v-5l-1.8 1.8l-2.7-2.8zm-7 0l-2.7 2.7L2 13v5h5l-1.8-1.8L8 13.5L6.5 12z"></path>
                </svg>
                <br>
                <span class="show-txt">全屏看</span>
            </a>
        </div>


    <div class="right-option-box" @click="hideLeftSideBar">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" horizontalalign="false" verticalalign="false" style="color: var(--c-text);" width="25" height="25" viewBox="0 0 24 24" class="iconify iconify--akar-icons">
            <g fill="none" stroke="currentColor" stroke-width="2">
                <rect width="20" height="18" x="2" y="3" stroke-linecap="round" stroke-linejoin="round" rx="2"></rect>
                <path d="M9 3v18"></path>
            </g>
        </svg>
        <span class="show-txt">左栏</span>
    </div>


    <div class="right-option-box" title=""><a href="" class="prePages">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" horizontalalign="false" verticalalign="false" style="color: var(--c-text);" width="25" height="25" viewBox="0 0 20 20" class="iconify iconify--ooui">
         <path fill="currentColor" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z">
        </path>
    </svg>
        <br><span class="show-txt">上一篇</span></a>
    </div>


    <div class="right-option-box" title=""><a href="" class="nextPages">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" horizontalalign="false" verticalalign="false" style="color: var(--c-text);" width="25" height="25" viewBox="0 0 20 20" class="iconify iconify--ooui">
    <path fill="currentColor" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z">
        </path></svg><br><span class="show-txt">下一篇</span>
        </a>
    </div>


    <svg class="go-to-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.484 28.284" data-v-fe15c52c="" @click="goToTop">
        <g transform="translate(-229 -126.358)" data-v-fe15c52c="">
            <rect fill="currentColor" width="35" height="5" rx="2" transform="translate(229 151.107) rotate(-45)" data-v-fe15c52c=""></rect>
            <rect fill="currentColor" width="35" height="5" rx="2" transform="translate(274.949 154.642) rotate(-135)" data-v-fe15c52c=""></rect>
        </g>
    </svg>


    </div><!--right-side-toolbar-->
  </aside>
</template>
<script>
export default {
     data() {
         return {
            shareSeeFlag:false,
            hideLeftSideBarFlag:false,
            fullScreenFlag:false,
            weiUrl:'https://api.qrserver.com/v1/create-qr-code/?data=',
            newUrl:'',
            datas:''
        
         }
     },
      methods: {
        share(){
            this.shareSeeFlag=!this.shareSeeFlag;
            this.newUrl=this.weiUrl+window.location.href;
        },
        noshare(){
            this.shareSeeFlag=false;
        },
        fullScreen(){
               this.fullScreenFlag=!this.fullScreenFlag;
               if(this.fullScreenFlag){
                    var element = document.documentElement
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.webkitRequestFullscreen) {
                        element.webkitRequestFullscreen();
                    } else if (element.msRequestFullscreen) {
                        element.msRequestFullscreen();
                    }
               }else{
                       if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        } else if (document.msExitFullscreen) {
                            document.msExitFullscreen();
                   }
               }        
        },
        hideLeftSideBar(){
                this.hideLeftSideBarFlag=!this.hideLeftSideBarFlag;      
                /* if(this.hideLeftSideBarFlag){
                var pages = document.getElementsByClassName('page');
                var styleElement = document.getElementsByClassName('sidebar');
                
                for(var i=0;i<pages.length;i++){
                    pages[i].style.paddingLeft="1rem";
                    }else{
                    pages[i].style.paddingLeft="19rem";
                    }
                    
                }
                for(var i=0;i<styleElement.length;i++){
                    if(this.hideLeftSideBarFlag){
                    styleElement[i].style.display="none";
                    }else{
                    styleElement[i].style.display="block";
                    } 
                        
                }*/  
                 if(this.hideLeftSideBarFlag){
                   //let styleElement = document.getElementsByClassName('theme-container');
                   document.getElementsByClassName('theme-container')[0].classList.add('no-sidebar');
                 }else{
                   document.getElementsByClassName('theme-container no-sidebar')[0].classList.remove('no-sidebar');  
                 }
                 
        },
        fleshUlData(){
                //querySelector
               // let ulData=document.querySelectorAll('main>div>div>ul');
                let hData=document.querySelector('main>div>div>h1');
                //let ulData=document.querySelector('main>div>div>pageuldata>ul');
                if(hData!=null){
                  let str=hData.innerHTML;
                  document.getElementsByClassName('hData')[0].innerHTML=str.substring(str.indexOf("</a>") + 4,str.length);
                }else{
                  document.getElementsByClassName('hData')[0].innerHTML='';
                }
                /*if(ulData!=null){
                  document.getElementsByClassName('ulData')[0].innerHTML=ulData.innerHTML;
                }else{
                  document.getElementsByClassName('ulData')[0].innerHTML='';  
                }*/
          
        },
        hideRightSideBar(path){
           //let rside= document.querySelector('rside');
           let rside=document.getElementById('id-rightbar')
           if(rside!=null){
                if(path==='/'){
                        rside.className='no-rightbar';        
                    }else{
                        rside.className='rightbar';       
                }
            }
        },
        goToTop(){
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            scrollBy(0,-top);
        },
        pageNoRightAd(){
            //右边无广告
             let pageNoRightAd=document.getElementById('norightad');
             let main=document.querySelector('main'); 
             let tocContain=document.getElementById('toc-container-id');
             if(!this.isMobile()){
                   if(pageNoRightAd!=null){
                     main.classList.add('page-no-rightad');
                     tocContain.className='toc-container-sidebar toc-container-sidebar-no';
                }else{
                      main.classList.remove('page-no-rightad');
                      tocContain.className='toc-container-sidebar';
                }     
             }else{
                    main.classList.remove('page-no-rightad');
                    tocContain.className='toc-container-sidebar';
             }
               
        },
         isMobile() {
            //pc?mobile
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
            return flag;
          },
          //右栏上一篇下一篇
          preNextPage(){
                let originPrePages=document.querySelector('span.prev>a');
                let originNextPages=document.querySelector('span.next>a');
                let prePages = document.querySelector('a.prePages');
                let nextPages = document.querySelector('a.nextPages');
                if(originPrePages!=null){
                    //originPrePages.style.backgroundColor = "red";
                    prePages.setAttribute('href',originPrePages.getAttribute("href"));
                    prePages.setAttribute('title',originPrePages.getAttribute("aria-label"));
                }else{
                    prePages.setAttribute('href',"");
                    prePages.setAttribute('title',"");
                }
                if(originNextPages!=null){
                    //originNextPages.style.backgroundColor = "green";
                    nextPages.setAttribute('href',originNextPages.getAttribute("href"));
                    nextPages.setAttribute('title',originNextPages.getAttribute("aria-label"));
                }else{
                    nextPages.setAttribute('href',"");
                    nextPages.setAttribute('title',"");
                }
          }

      },
     mounted() {
           this.hideRightSideBar(window.location.pathname);
           this.fleshUlData();
           setTimeout(() => {window.addAds()}, 500);
           //刷新导航栏
           this.pageNoRightAd();
           this.preNextPage();

        },
     beforeDestroy() {},
     watch: {
	       '$route.path'(now,old){
            this.hideRightSideBar(now);        
           //页内路由改变            
           setTimeout(() => { this.pageNoRightAd();}, 500);
           setTimeout(() => { this.preNextPage();}, 600);  
           setTimeout(() => { this.fleshUlData();}, 400);

	     }
       }

}
</script>

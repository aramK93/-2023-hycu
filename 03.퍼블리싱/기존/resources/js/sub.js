 document.addEventListener("DOMContentLoaded", () => {
    //메인 메뉴 마우스 오버시 열기
    let gnb = document.querySelector(".nav");
    let gnbElement = document.querySelector(".nav_box");
    let headerElement = document.querySelector(".header");

    gnb.addEventListener("mouseover",() => {
        headerElement.classList.add("on");
        //gnbElement.classList.add("on");
    });
    headerElement.addEventListener("mouseout",() => {
        headerElement.classList.remove("on");
        //gnbElement.classList.remove("on");
    });


    //모바일 메뉴 클릭시 열기 
    let menu = document.querySelector(".menu_btn");
    let menu_close = document.querySelector(".close");
    let mo_nav = document.querySelector(".mobile_nav");
    menu.addEventListener("click",() => {
         mo_nav.classList.add("open");
    });
    menu_close.addEventListener("click",() => {
        mo_nav.classList.remove("open");
    });

    //모바일 상단 셀렉트 클릭시 열기
    let click_select = document.querySelector(".select_page");
    let open_select = document.querySelector(".mselect_lst");

    click_select.addEventListener("click",function(){
        open_select.classList.toggle("on");
    });
  
    /* 모바일 가로스크롤 안내문구 박스 클릭시 제거 */
    let scroll_box = document.querySelector(".scroll_back");
    scroll_box.addEventListener("click",function(){
        scroll_box.classList.toggle("on");
    });

    //모바일 서브메뉴, lnb메뉴 클릭시 클래스 추가,제거
    function drop_down(menu){
        const dep = document.querySelectorAll(menu);
        const ACTIVE = "active" 
        dep.forEach(function(subContents){
            subContents.addEventListener("click",function(){
                dep.forEach(function(subContents){
                    subContents.classList.remove(ACTIVE);
                })
                subContents.classList.add(ACTIVE);
            })
        })
    }

    drop_down('.dep2');
    drop_down('.dep3');
    drop_down('.lnb_lst');

});

/* 버튼 클릭시 알림창 나오고 들어가고 */
document.addEventListener("DOMContentLoaded", () => {
    var notice = document.querySelector(".notice_window");
    var openBtn = document.querySelector(".notice_open > button");
    openBtn.addEventListener("click",function(){
        notice.classList.toggle("on");
    });
});


window.toggleSidebar=function(){let e=document.querySelector(".sidebar");"0px"!=e.style.left?e.style.left="0px":e.style.left="-18vw"},window.togglemobileSidebar=function(){let e=document.querySelector(".sidebar");"0px"!=e.style.left?(e.style.left="0px",document.getElementById("mobilemenuBtn").innerText="x"):(e.style.left="-100vw",document.getElementById("mobilemenuBtn").innerText="☰")},window.screen.width>=768&&document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("sidebar");document.addEventListener("click",t=>{"-100vw"==e.style.left||e.contains(t.target)||t.target===document.getElementById("menuBtn")||t.target===document.getElementById("mobilemenuBtn")||(window.screen.width>=768?e.style.left="-100vw":e.style.left="-18vw")})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll("section"),t=document.querySelectorAll("nav ul li a");window.addEventListener("scroll",function(){let n=window.scrollY;e.forEach(e=>{let l=e.offsetTop-50,d=e.clientHeight;if(n>=l&&n<l+d){let n=e.getAttribute("id");t.forEach(e=>{e.classList.remove("active"),e.getAttribute("href").includes(n)&&e.classList.add("active")})}})})}),document.addEventListener("DOMContentLoaded",function(){});
//# sourceMappingURL=index.63d0d2d1.js.map

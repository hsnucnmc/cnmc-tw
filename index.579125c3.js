function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left != '0px') sidebar.style.left = '0px'; //顯示
    else sidebar.style.left = '-18vw'; //隱藏
}
function togglemobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left != '0px') {
        sidebar.style.left = '0px'; //顯示
        document.getElementById("mobilemenuBtn").innerText = "x";
    } else {
        sidebar.style.left = '-100vw'; //隱藏
        document.getElementById("mobilemenuBtn").innerText = "\u2630";
    }
}
window.toggleSidebar = toggleSidebar;
window.togglemobileSidebar = togglemobileSidebar;
document.addEventListener('DOMContentLoaded', ()=>{
    // const pElements = document.querySelectorAll('.history p');
    // pElements.forEach((p) => {
    //     p.addEventListener('mouseenter', () => {
    //         pElements.forEach((otherp) => {
    //             if (otherp !== p) {
    //                 otherp.classList.add('dimmed'); // 其他元素變暗
    //             }
    //         });
    //     });
    //     p.addEventListener('mouseleave', () => {
    //         pElements.forEach((otherp) => {
    //             otherp.classList.remove('dimmed'); // 恢復正常
    //         });
    //     });
    // });
    const sidebar = document.getElementById('sidebar');
    // Function to close the menu if clicked outside
    document.addEventListener("click", (e)=>{
        // Check if the clicked element is not the menu or button
        if (sidebar.style.left != '-100vw' && !sidebar.contains(e.target) && e.target !== document.getElementById("menuBtn") && e.target !== document.getElementById("mobilemenuBtn")) {
            if (window.screen.width >= 768) sidebar.style.left = '-100vw';
            else sidebar.style.left = '-18vw';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section"); // Change if needed
    const navLinks = document.querySelectorAll("nav ul li a");
    function changeActiveSection() {
        let scrollY = window.scrollY;
        sections.forEach((section)=>{
            let sectionTop = section.offsetTop - 50;
            let sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                let targetId = section.getAttribute("id");
                navLinks.forEach((link)=>{
                    link.classList.remove("active");
                    if (link.getAttribute("href").includes(targetId)) link.classList.add("active");
                });
            }
        });
    }
    window.addEventListener("scroll", changeActiveSection);
});
document.addEventListener("DOMContentLoaded", function() {});

//# sourceMappingURL=index.579125c3.js.map

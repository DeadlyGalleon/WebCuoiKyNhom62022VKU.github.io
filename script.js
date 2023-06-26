
window.addEventListener('resize', function() {
    var teamName = document.querySelector('.team-name');
    var teamNameAbbreviation = document.querySelector('.team-name-abbreviation');
    if (window.innerWidth > 500) {
        teamName.style.display = 'inline';
        teamNameAbbreviation.style.display = 'none';
    } else {
        teamName.style.display = 'none';
        teamNameAbbreviation.style.display = 'inline';
    }
});


window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var content = document.querySelector('.content');
    var toggleBtn = document.getElementById('toggleSidebarBtn');
    
    // Kiểm tra vị trí cuộn trang
    if (window.pageYOffset > 0) {
        navbar.classList.add('hide');
        toggleBtn.style.display = 'none'; // Ẩn nút toggle
    } else {
        navbar.classList.remove('hide');
        toggleBtn.style.display = 'block'; // Hiển thị nút toggle
    }
    
    // Kiểm tra vị trí cuộn trang để ẩn/hiển thị nội dung
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        content.classList.add('hide');
    } else {
        content.classList.remove('hide');
    }
});







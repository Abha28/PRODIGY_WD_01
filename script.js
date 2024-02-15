 document.addEventListener('DOMContentLoaded', function () {
        var links = document.querySelectorAll('.new a');
        links.forEach(function (link) {
            link.addEventListener('click', function (event) {
                var targetId = link.getAttribute('href').substring(1);
                var targetElement = document.getElementById(targetId);
                event.preventDefault();
                var sections = document.querySelectorAll('.main > div');
                sections.forEach(function (section) {
                section.style.display = 'none';
                });
            targetElement.style.display = 'block';
        });
    });
});

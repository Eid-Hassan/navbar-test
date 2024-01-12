const $list = document.querySelectorAll('li');



function activeLink() {
    $list.forEach(($li) => {
        $li.classList.remove('action')
    });
    this.classList.add('action');
}

$list.forEach(($li) => {
    $li.addEventListener(
        'click',
        activeLink,
    );
});
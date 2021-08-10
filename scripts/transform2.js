const app = {
    init: function(){
        // console.log(3);
        let inner2 = document.querySelector('.inner-clippath2');
        let wrapperClippath = document.querySelector('.wrapper-clippath');
        console.log(wrapperClippath);
        wrapperClippath.addEventListener('click', e => {
            console.log('this', this);
            console.log('e.target', e.target);
            console.log('inner2', inner2);
            inner2.classList.toggle('action');
        });
    }
}

document.addEventListener('DOMContentLoaded', app.init);
const app = {
    init: function(){
        // console.log(3);
        // let inner2 = document.querySelector('.inner-clippath2');
        let wrapperClippath = document.querySelector('.wrapper-clippath');
        let containerClippath = document.querySelector('.container-clippath');
        containerClippath.addEventListener('click', e => {
            console.log('this', this);
            console.log('e.target', e.target);
            // console.log('inner2', inner2);
            // containerClippath.classList.toggle('action');
            wrapperClippath.classList.toggle('action');
            // console.log(containerClippath);
            console.log(wrapperClippath);
        });
    }
}

document.addEventListener('DOMContentLoaded', app.init);
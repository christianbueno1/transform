const app = {
    init: function(){
        let wrapperCp = document.querySelector('.wrapper-clippath');
        console.log('hello', wrapperCp);

        wrapperCp.addEventListener('click', (e) => {
            wrapperCp.classList.toggle('action');
            console.log(e.target, this, wrapperCp);
        });
    }
}
document.addEventListener('DOMContentLoaded', app.init);
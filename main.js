const centro = document.querySelector('.centro')
const centro2 = document.querySelector('.centro2')
const bola1 = document.querySelector('.bola1');
const bola2 = document.querySelector('.bola2'); 
const bola3 = document.querySelector('.bola3'); 
const bola4 = document.querySelector('.bola4'); 
const bola5 = document.querySelector('.bola5'); 
const enviar = document.querySelector('.enviar')
const avaliacao = document.querySelector('.avaliacao');


bola1.addEventListener('click', function() {
    bola1.classList.add('laranja');
    bola1.classList.remove('cinza');
    bola1.classList.remove('bola1');
    bola1.classList.add('bola1-1')
    bola2.classList.add('cinza');
    bola3.classList.add('cinza');
    bola4.classList.add('cinza');
    bola5.classList.add('cinza');

    bola5.classList.add('bola5')
    bola5.classList.remove('bola5-5')

    avaliacao.innerHTML = 'You select 1 out of 5'
})

bola2.addEventListener('click', function() {
    bola1.classList.add('cinza');

    bola1.classList.remove('bola1-1');
    bola1.classList.add('bola1');

    bola2.classList.add('laranja');
    bola2.classList.remove('cinza');

    bola2.classList.remove('bola2');
    bola2.classList.add('bola2-2')

    bola3.classList.add('cinza');
    bola4.classList.add('cinza');
    bola5.classList.add('cinza');

    bola5.classList.add('bola5')
    bola5.classList.remove('bola5-5')

    avaliacao.innerHTML = 'You select 2 out of 5'
})

bola3.addEventListener('click', function() {
    bola1.classList.add('cinza');
    bola2.classList.add('cinza');

    bola2.classList.remove('bola2-2');
    bola2.classList.add('bola2');

    bola3.classList.add('laranja');
    bola3.classList.remove('cinza');

    bola3.classList.remove('bola3');
    bola3.classList.add('bola3-3')

    bola4.classList.add('cinza');
    bola5.classList.add('cinza');

    bola5.classList.add('bola5')
    bola5.classList.remove('bola5-5')

    avaliacao.innerHTML = 'You select 3 out of 5'
})

bola4.addEventListener('click', function() {
    bola1.classList.add('cinza');
    bola2.classList.add('cinza');
    bola3.classList.add('cinza');

    bola3.classList.remove('bola3-3');
    bola3.classList.add('bola3')

    bola4.classList.add('laranja');
    bola4.classList.remove('cinza');

    bola4.classList.remove('bola4');
    bola4.classList.add('bola4-4')

    bola5.classList.add('cinza');

    bola5.classList.add('bola5')
    bola5.classList.remove('bola5-5')

    avaliacao.innerHTML = 'You select 4 out of 5'
})

bola5.addEventListener('click', function() {
    bola1.classList.add('cinza');
    bola2.classList.add('cinza');
    bola3.classList.add('cinza');
    bola4.classList.add('cinza');

    bola4.classList.remove('bola4-4')
    bola4.classList.add('bola4')

    bola5.classList.add('laranja');
    bola5.classList.remove('cinza');

    bola5.classList.remove('bola5')
    bola5.classList.add('bola5-5')

    avaliacao.innerHTML = 'You select 5 out of 5'

})

enviar.addEventListener('click', function() {
    centro.classList.add('centro1-1')
    centro2.classList.add('centro2-2')
})
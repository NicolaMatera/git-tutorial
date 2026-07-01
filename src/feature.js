// Selezioniamo tutti gli h3 che hanno un ID che inizia con "f"
const features = document.querySelectorAll('h3[id^="f"]');

features.forEach(feature => {
    feature.addEventListener('click', () => {
       
        if (feature.id === 'f1') {
            document.getElementById('img1').classList.remove('hidden');
            document.getElementById('img2').classList.add('hidden');
            document.getElementById('img3').classList.add('hidden');
        }
       
        if (feature.id === 'f2') {
            document.getElementById('img2').classList.remove('hidden');
            document.getElementById('img1').classList.add('hidden');
            document.getElementById('img3').classList.add('hidden');
        }

        if (feature.id === 'f3') {
            document.getElementById('img3').classList.remove('hidden');
            document.getElementById('img2').classList.add('hidden');
            document.getElementById('img1').classList.add('hidden');
        }
    });
});
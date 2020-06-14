const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    console.log('start')
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';

    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log('end')
    e.target.className = "imgBox"
});
for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('dragover')
    });
    whiteBox.addEventListener('dragenter', (e) => {
        e.target.className+=' dashed';
        console.log('drag enetered')

    });
    whiteBox.addEventListener('dragleave', (e) => {
        e.target.className="whiteBox";

    });

    whiteBox.addEventListener('drop', (e) => {
        e.target.append(imgBox);
    });


}
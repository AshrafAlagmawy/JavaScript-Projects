const input = document.getElementById('inp');
const btn = document.getElementById('btn');
const boxs = document.querySelectorAll('.box');
let drag = null;

btn.onclick = function () {
  if (input.value != '') {
    boxs[0].innerHTML += `
    <p class="item" draggable="true"> ${input.value} </p>
    `;
    input.value = '';
  }
  dragItem();
};

function dragItem() {
  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    item.addEventListener('dragstart', function () {
      // console.log('Drag Start');
      drag = item;
      item.style.opacity = '0.5';
    });

    item.addEventListener('dragend', function () {
      // console.log('Drag end');
      drag = null;
      item.style.opacity = '1';
    });

    boxs.forEach((box) => {
      box.addEventListener('dragover', function (e) {
        // console.log('drag over');
        e.preventDefault();
        this.style.background = '#090';
        this.style.color = '#fff';
      });

      box.addEventListener('dragleave', function () {
        this.style.background = '#fff';
        this.style.color = '#000';
      });

      box.addEventListener('drop', function () {
        this.append(drag);
        this.style.background = '#fff';
        this.style.color = '#000';
      });
    });
  });
}

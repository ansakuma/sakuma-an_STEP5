const button = document.getElementById('button');
const input = document.getElementById('input');
const output = document.getElementById('output');

// ボタンがクリックされたときの処理を追加
button.addEventListener('click', function() {
    // テキストボックスの内容を取得
    const text = input.value;
    if (text === "") {
        alert("入力値が空です。");
        return;
    } 
        output.textContent = text;
});


//　設問２
const bgButton = document.getElementById('background-color');

bgButton.addEventListener('click', function () {
    const current = document.body.style.backgroundColor;
    if (current === 'lightblue') {
        document.body.style.backgroundColor = 'lightgreen';
    } else if (current === 'lightgreen') {
        document.body.style.backgroundColor = 'lightcoral';
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
});

// 設問3
const highlightBtn = document.getElementById('highlight-button');
const outputArea = document.getElementById('highlight-text');

highlightBtn.addEventListener('click', function () {
    outputArea.classList.toggle('highlight');
});


// 設問４
const tableInput = document.getElementById('table-input');
const tableAddButton = document.getElementById('table-add-button');
const tableBody = document.getElementById('table-body');

let addCount = 0; // 追加回数

tableAddButton.addEventListener('click', function () {
  const text = tableInput.value.trim();
  if (text === '') return;

  const tr = document.createElement('tr');
  const tdText = document.createElement('td');
  tdText.textContent = text;

  const tdAction = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', function () {
    tr.remove();
  });

  tdAction.appendChild(deleteButton);
  tr.appendChild(tdText);
  tr.appendChild(tdAction);
  tableBody.appendChild(tr);

  tableInput.value = '';

  addCount += 1;
  if (addCount >= 3) {
    tableAddButton.style.display = 'none'; // 3回目で消す
  }
});



// 設問５
const table5Input = document.getElementById('table5-input');
const table5AddButton = document.getElementById('table5-add-button');
const table5Body = document.getElementById('table5-body');

function updateTable5ButtonVisibility() {
  const rowCount = table5Body.children.length;
  if (rowCount >= 3) {
    table5AddButton.style.display = 'none';
  } else {
    table5AddButton.style.display = '';
  }
}

table5AddButton.addEventListener('click', function () {
  const text = table5Input.value.trim();
  if (text === '') return;

  const tr = document.createElement('tr');

  const tdText = document.createElement('td');
  tdText.textContent = text;

  const tdAction = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';

  deleteButton.addEventListener('click', function () {
    tr.remove();
    updateTable5ButtonVisibility(); // 削除後に再判定
  });

  tdAction.appendChild(deleteButton);
  tr.appendChild(tdText);
  tr.appendChild(tdAction);
  table5Body.appendChild(tr);

  table5Input.value = '';
  updateTable5ButtonVisibility(); // 追加後に再判定
});




// 設問６
const limit6Input = document.getElementById('limit6-input');
const limit6Button = document.getElementById('limit6-button');
const limit6Body = document.getElementById('limit6-body');

const limit6Items = []; // 最大3件

limit6Button.addEventListener('click', function () {
  const text = limit6Input.value.trim();
  if (text === '') return;

  limit6Items.push(text);

  // 4件以上なら古い順に削除
  if (limit6Items.length > 3) {
    limit6Items.shift();
  }

  // テーブル再描画
  limit6Body.innerHTML = '';
  for (const item of limit6Items) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = item;
    tr.appendChild(td);
    limit6Body.appendChild(tr);
  }

  limit6Input.value = '';
});


// 設問７
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
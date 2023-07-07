// Shavala

let curPage = 1;
let totalPages = 3; // Загальна кількість сторінок

function goToPage(page) {

document.getElementById('page' + curPage).classList.remove('active');

 document.getElementById('page' + page).classList.add('active');

 curPage = page;
}

function goToFirstPage() {
   goToPage(1);
}

function goToLastPage() {
   goToPage(totalPages);
}

function goToPrevPage() {
  if (curPage > 1) {
     goToPage(curPage - 1);
}
}

function goToNextPage() {
  if (curPage < totalPages) {
    goToPage(curPage + 1);
  }
}


//$('#demo').pagination({
    //dataSource: [1, 2, 3, 4, 5, 6, 7, ... , 195],
   // callback: function(data, pagination) {
        // template method of yourself
     //   let html = template(data);
     //   dataContainer.html(html);
   // }
// })

// Shavala

var curPage = 1;
var totalPages = 3; // Загальна кількість сторінок

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


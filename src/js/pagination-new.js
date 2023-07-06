$(function() {
    let totalPages = 10; // Загальна кількість сторінок
  
    let dataSource = Array.from({ length: totalPages - 1 }, (_, i) => i + 1);
  
    $('#demo').pagination({
      dataSource: dataSource,
      pageSize: 1,
      showPrevious: true,
      showNext: true,
      showPageNumbers: true,
      prevText: '‹',
      nextText: '›',
      formatNavigator: '...',
      callback: function(data, pagination) {
        let html = template(data);
        $('#dataContainer').html(html);
      },
      afterRender: function() {
        $('.pagination-prev').on('click', function() {
          $('#demo').pagination('prevPage');
        });
  
        $('.pagination-next').on('click', function() {
          $('#demo').pagination('nextPage');
        });
      }
    });
  });
  
  
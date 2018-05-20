$(document).ready(function() {

	$('.pagination').jqPagination({
		link_string	: '/?page={page_number}',
		max_page	: 40,
		page_string : 'Страница {current_page} из {max_page}',
		paged		: function(page) {
			$('.log').prepend('<li>Запрошен переход к странице ' + page + '</li>');
		}
	});

});
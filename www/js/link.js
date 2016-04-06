// JavaScript File
$(document).on('click','a',function(e) {
		    if ($(this).attr('target') === '_blank') {
		        window.open($(this).attr('href'),'_system','location=no');
		        e.preventDefault();
		    }
		});
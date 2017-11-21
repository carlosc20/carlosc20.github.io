
$(function(){
	var MAX = 4; //maximum number of projects that show

	$.get('https://api.github.com/users/carlosc20/repos', function(data, status){
		if(status=='success'){
			//console.log(data);
			for (var i = 0; i < MAX && i < data.length; i++) {
				var html = createGitArticles(data[i].name, data[i].description, data[i].html_url, data[i].updated_at, data[i].language);
				$('#gitrepos').append(html);
				console.log(html);
			}
			if (data.length >= i + 1) {
				$('#gitrepos').append('<a href="https://github.com/carlosc20?tab=repositories">See more</a>');
			}
		}
		//console.log(data,status);
	});
});




function createGitArticles(name, description, url, updated, language){
	if(!description) description = 'No description.';
	if(!language) language = '';
		else language += '<br/>';

	var html = '';
	html += '<article>';
	html += '	<span class="image"><img src="https://raw.githubusercontent.com/carlosc20/' + name + '/master/display.jpg" onerror="this.src=`images/avatar.jpg`" alt="" /></span>';
	html += '	<div class="inner">';
	html += '		<a href="' + url + '"><h4 class="hover">' + name + '</h4></a>';
	html += '		<p>' + language + description + '<br/><small>' + updated + '</small></p>';
	html += '	</div>';
	html += '</article>';
	return html;
}

//all timestamps return in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ


$(function(){
	$.get('https://api.github.com/users/dans24/repos', function(data, status){
		if(status=='success'){
			//console.log(data);
			for (var i = 0; i < 4; i++) {
				var html = createGitArticles(data[i].name, data[i].description, data[i].html_url, data[i].updated_at, data[i].language);
				$('#gitrepos').append(html);
				console.log(html);
			}
			if (data.length >= i + 1) {
				$('#gitrepos').append('<a href="https://github.com/carlosc20?tab=repositories">See more.</a>');
			}
		}
		// console.log(data,status);
	});
});

function createGitArticles(name, description, url, updated, language){
	if(!description) description = 'No description.';
	if(!language) language = '';
		else language += '<br/>';

	var html = '';
	html += '<article>';
	html += '	<a href="' + url + '" class="image"><img src="images/pic01.jpg" alt="" /></a>';
	html += '	<div class="inner">';
	html += '		<h4>' + name + '</h4>';
	html += '		<p>' + language + description + '<br/><small>' + updated + '</small></p>';
	html += '	</div>';
	html += '</article>';
	return html;
}
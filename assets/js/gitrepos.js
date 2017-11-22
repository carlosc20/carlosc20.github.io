
$(function(){
	var MAX = 4; //maximum number of projects that show

	$.get('https://api.github.com/users/carlosc20/repos', function(data, status){
		if(status=='success'){
			//console.log(data);
			for (var i = 0; i < MAX && i < data.length; i++) {
				var html = createGitArticles(data[i].name, data[i].description, data[i].html_url, data[i].updated_at, data[i].language);
				$('#gitrepos').append(html);
				//console.log(html);
			}
			if (data.length >= i + 1) {
				$('#gitrepos').append('<a href="https://github.com/carlosc20?tab=repositories">See more</a>');
			}
		}
		//console.log(data,status);
	});
});

function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
    })
}

function changeDescription(text){
	var MAXSIZE = 175;

	//limits max size of description to 175 characters, cuts words
	if(text.length > MAXSIZE) {
		text = text.substring(0, MAXSIZE);
		text += '...';
	}

	//makes links in description clickable
	text = urlify(text);

	return text;
}

function changeDate(date){
	//all timestamps return in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
	return new Date(date).toDateString();
}

function createGitArticles(name, description, url, updated, language){
	if(!description) description = 'No description.';
	if(!language) language = '';
		else language = '<b>' + language + '</b><br/>';

	var html = '';
	html += '<article>';
	html += '	<span class="image"><img src="https://raw.githubusercontent.com/carlosc20/' + name + '/master/display.jpg" onerror="this.src=`images/avatar.jpg`" alt="" /></span>';
	html += '	<div class="inner">';
	html += '		<a href="' + url + '"><h4 class="hover">' + name + '</h4></a>';
	html += '		<p>' + language + changeDescription(description) + '<br/><small>' + changeDate(updated) + '</small></p>';
	html += '	</div>';
	html += '</article>';
	return html;
}



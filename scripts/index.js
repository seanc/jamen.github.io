(function($){
  'use strict';
  $(function(){
    var content = $('.content');

    $.ajax({
      'url': 'https://api.github.com/users/jamen/repos?sort=pushed',
      'type': 'GET'
    }).success(function(repos){
      $('.getting').remove();
      repos.forEach(function(repo){
        if (!repo.fork) {
          content.append(
            "<div class='repo'>" +
              "<div class='info'>" +
                "<span class='name'>" +
                  "<a target='_blank' href='" + repo.html_url + "'>" + repo.full_name + "</a>" +
                "</span>" +
                "<span class='desc'>" + repo.description + "</span>" +
              "</div>" +
              "<div class='items'>" +
                "<span class='stars icon'>" +
                  "<a href='" + repo.html_url + "/stargazers'>" + repo.stargazers_count + "</a>" +
                "</span>" +
                "<span class='forks icon'>" +
                  "<a href='" + repo.html_url + "/forks'>" + repo.forks + "</a>" +
                "</span>" +
                (repo.language ? "<span class='lang'>(" + repo.language + ")</span>" : '') +
              "</div>" +
            "</div>"
          );
        }
      });
    }).fail(function(){
      $('.getting').addClass('failed').html('Could not fetch projects from GitHub.');
    });
  });
})(jQuery);

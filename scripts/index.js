(function($){
  'use strict';
  $(function(){
    var projects = $('.project-repos');

    $.ajax({
      'url': 'https://api.github.com/users/jamen/repos?sort=pushed',
      'type': 'GET'
    }).success(function(repos){
      $('.getting').remove();
      repos.forEach(function(repo){
        if (!repo.fork) {
          projects.append(
            "<div class='repo-box'>" +
              "<div class='repo-info'>" +
                "<a class='name' target='_blank' href='" + repo.html_url + "'>" + repo.full_name + "</a>" +
                "<span class='desc'>" + repo.description + "</span>" +
              "</div>" +
              "<div class='repo-items'>" +
                "<a class='item -stars' href='" + repo.html_url + "/stargazers'>" + repo.stargazers_count + "</a>" +
                "<a class='item -forks' href='" + repo.html_url + "/network'>" + repo.forks + "</a>" +
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

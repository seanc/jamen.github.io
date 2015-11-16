(function() {
  $(function() {
    var nav, projects;
    projects = $('.project-repos');
    $.ajax({
      url: 'https://api.github.com/users/jamen/repos?sort=pushed',
      type: 'GET'
    }).success(function(repos) {
      var i, len, ref, repo;
      $('.getting').remove();
      for (i = 0, len = repos.length; i < len; i++) {
        repo = repos[i];
        if (!repo.fork) {
          repo.description = repo.description.replace(/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/, '<a href="$1">$1</a>');
          projects.append("<div class='repo-box'>" + "<div class='repo-info'>" + "<a class='name' target='_blank' href='" + repo.html_url + "'>" + repo.name + "</a>" + "<span class='desc'>" + repo.description + "</span>" + "</div>" + "<div class='repo-items'>" + "<a class='item -icon -stars' href='" + repo.html_url + "/stargazers'>" + repo.stargazers_count + "</a>" + "<a class='item -icon -forks' href='" + repo.html_url + "/network'>" + repo.forks + "</a>" + ((ref = repo.language) != null ? ref : "<span class='item'>(" + repo.language + {
            ')</span>': ''
          }) + "</div>" + "</div>");
        }
      }
      return null;
    }).fail(function() {
      $('.getting').addClass('failed').html('Could not fetch projects from GitHub.');
      return null;
    });
    nav = $('.site-nav');
    $('.toggle').on('click', function() {
      nav.toggleClass('-active');
      return null;
    });
    return null;
  });

}).call(this);

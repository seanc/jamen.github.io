(function($) {
  $(function() {
    $.getJSON('https://api.github.com/users/jamen/repos?sort=pushed')
      .success(function(repos) {
        $('.project-repo').each(function(i) {
          var project = repos[i];
          $(this).append(
            '<div class="title">' +
            '<span class="mega-octicon octicon-repo"></span>' +
            '<span class="name">' + project.name + '</span>' +
            '<span class="desc">' + project.description + '</span>' +
            '</div>'
          )
        });
      })
      .fail(function() {
        $('.getting').addClass('failed').html('An error occurred whilst connecting to Github');
      });
  });
}(jQuery));
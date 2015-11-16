# out: index.js
$ ->
  projects = $('.project-repos')

  $.ajax
    url: 'https://api.github.com/users/jamen/repos?sort=pushed'
    type: 'GET'
  .success (repos) ->
    $('.getting').remove()
    for repo in repos
      if not repo.fork
        repo.description = repo.description.replace ///
          (https?:\/\/(?:www\.|(?!www))
          [^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})
        ///, '<a href="$1">$1</a>'

        projects.append(
          "<div class='repo-box'>" +
            "<div class='repo-info'>" +
              "<a class='name' target='_blank' href='" + repo.html_url + "'>" + repo.name + "</a>" +
              "<span class='desc'>" + repo.description + "</span>" +
            "</div>" +
            "<div class='repo-items'>" +
              "<a class='item -icon -stars' href='" + repo.html_url + "/stargazers'>" + repo.stargazers_count + "</a>" +
              "<a class='item -icon -forks' href='" + repo.html_url + "/network'>" + repo.forks + "</a>" +
              (repo.language ? "<span class='item'>(" + repo.language + ')</span>' : '') +
            "</div>" +
          "</div>"
        )
    null # End

  .fail ->
    $('.getting').addClass('failed').html('Could not fetch projects from GitHub.')
    null # End

  nav = $('.site-nav')
  $('.toggle').on 'click', ->
    nav.toggleClass '-active'
    null # End

  null # End

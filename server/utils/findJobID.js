function findJobID(html) {
  var str = html.substring(html.search('Job ID is: ') +
    'Job ID is: '.length, html.length);

  return str.substring(0, str.search('</div>'));
}

module.exports = {
  findJobID: findJobID
}

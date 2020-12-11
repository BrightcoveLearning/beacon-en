var BCLS_collapsed_content = ( function (window, document) {
  var sections = document.querySelectorAll('.section_contents'),
    h2s = document.querySelectorAll('h2'),
    i,
    iMax,
    section_id = getHash();

    function getHash() {
      var hash = window.location.hash;
      if (hash !== '') {
        hash = hash.substr(1);
        console.log('hash ', hash);
        return hash;
      }
      return null;
    }

    function openSection(section_id) {
      var section;
      if (section_id) {
        iMax = sections.length;
        for (i = 0; i < iMax; i++) {
          section = sections[i];
          console.log('id', section_id);
          if (section.id === section_id) {
            section.setAttribute('style', 'display:block;');
          } else {
            section.setAttribute('style', 'display:none');
          }
        }
      }
    }
    
    if (window.location !== window.parent.location) {
      var h2;
      openSection(section_id);
      iMax = h2s.length;
      for (i = 0; i < iMax; i++) {
        h2 = h2s[i];
        h2.setAttribute('style', 'color:rgb(8, 8, 139;cursor:pointer;)');
        h2.addEventListener('click', function(e) {
          openSection(this.nextElementSibling.id);
        });
      }
    }
})(window, document);


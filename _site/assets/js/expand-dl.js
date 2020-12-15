var BCLS = ( function (window, document) {
  var dts = document.querySelectorAll('dt.expander'),
    toggles = document.querySelectorAll('.expand-toggle'),
    i,
    iMax = dts.length;

  function expandThis(e) {
    var j;
      jMax = dts.length;
    
    // hide all dds
      for (j = 0; j < iMax; j++) {
      dts[j].setAttribute('style', 'color:inherit;');
      dts[j].nextElementSibling.setAttribute('style', 'display:none;');
      toggles[j].setAttribute('src', '/assets/images/feather/plus.svg');
    }
    // open this dd
    this.setAttribute('style', 'color:#09078c;');
    this.nextElementSibling.setAttribute('style', 'display:block;');
    this.firstElementChild.setAttribute('src', '/assets/images/feather/minus.svg');
  }

  for (i = 0; i < iMax; i++) {
    // initially hide all dd's
    dts[i].nextElementSibling.setAttribute('style', 'display:none;');

    dts[i].addEventListener('click', expandThis);
  }
})(window, document);
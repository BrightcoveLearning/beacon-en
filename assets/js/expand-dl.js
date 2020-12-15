var BCLS = ( function (window, document) {
  var dts = document.querySelectorAll('dt.expander'),
    i,
    iMax = dts.length;

  function expandThis(e) {
    var j;
      jMax = dts.length;
    
    for (j = 0; j < iMax; j++) {
      dts[j].setAttribute('style', 'color:inherit;');
      dts[j].nextElementSibling.setAttribute('style', 'display:none;');
    }
    this.setAttribute('style', 'color:#09078c;');
    this.nextElementSibling.setAttribute('style', 'display:block;');
  }

  for (i = 0; i < iMax; i++) {
    dts[i].nextElementSibling.setAttribute('style', 'display:none;');
    dts[i].addEventListener('click', expandThis);
  }
})(window, document);
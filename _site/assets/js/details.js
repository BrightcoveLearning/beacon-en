var BCLS_details = ( function (window, document) {
  var all_details = document.querySelectorAll('details'),
    i,
    iMax = all_details.length;

  
  for (i = 0; i < iMax; i++) {
    all_details[i].addEventListener('click', function(evt) {
      var j;
      
      if (!this.hasAttribute('open')) {
      evt.preventDefault();
      for (j = 0; j < iMax; j++) {
        all_details[j].removeAttribute('open');
      }
      this.setAttribute('open', 'true');
      }
    });
  }
})(window, document);
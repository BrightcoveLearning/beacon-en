var BCLS_local = ( function (window, document) {

  function hideElement(el) {
    if (el) {
      el.setAttribute('style', 'display:none;');
    } else {
      console.log('The element ' + el + 'does not exist');
    }
  }

  /**
   * gets value of a URL param if exists
   * @param {string} name the param you want the value of
   * @return {string} result value of param if exists or ""
   */
  function getURLparam(name) {
    var regex,
        results;
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")
    );



  function createFrameNav() {
    forward_button.addEventListener('click', function() )
    back_button = document.getElementById('back_button'); 
  }
  
  // if inside iframe, hide appropriate elements
  if (window.location !== window.parent.location) {
    var header = document.querySelector('header'),
    side_nav = document.getElementById('side_nav'),
    footer = document.querySelector('footer'),
    talla_wrapper = document.getElementById('talla_wrapper'),
    open_new_tab = document.getElementById('open_new_tab'),
    bc_veggie_burger_wrapper = document.getElementById('bc_veggie_burger_wrapper'),
    in_prod_nav = document.getElementById('in_prod_nav'),
    forward_button = document.getElementById('forward_button')
    back_button = document.getElementById('back_button');
  } else {
    hideElement(forward_button);
    hideElement(back_button);
  }
  })(window, document);
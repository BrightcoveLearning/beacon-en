---
layout: null
---

var BCLS_local = ( function (window, document) {

  var header                 = document.querySelector('header'),
  side_nav                 = document.getElementById('side_nav'),
  footer                   = document.querySelector('footer'),
  talla_wrapper            = document.getElementById('talla_wrapper'),
  open_new_tab             = document.getElementById('open_new_tab'),
  bc_veggie_burger_wrapper = document.getElementById('bc_veggie_burger_wrapper'),
  in_prod_nav              = document.getElementById('in_prod_nav'),
  forward_button           = document.getElementById('forward_button'),
  back_button              = document.getElementById('back_button'),
  all_links                = document.querySelectorAll('a'),
  this_page                = window.location.pathname,
  back_page                = getURLparam('back_page'),
  forward_page             = getURLparam('forward_page');

  // disable nav if no back/forward pages

  if (!back_page) {
    disableElement(back_button);
  } else {
    enableElement(back_button);
  }
  if (!forward_page) {
    disableElement(forward_button);
  } else {
    enableElement(forward_button);
  }

  function addExternalLink() {
    
  }

  /**
   * hide element not needed for the context; logs an error if the element does not exist
   * @param {object} el - the element to hide 
   */
  function hideElement(el) {
    if (el) {
      el.setAttribute('style', 'display:none;');
    } else {
      console.log('The element ' + el + 'does not exist');
    }
  }

  /**
   * disable a nav button when there's no target
   * @param {object} el the nav button element 
   */
  function disableElement(el) {
    el.setAttribute('style', 'opacity:.2;cursor:not-allowed;')
  }

  /**
   * enable a nav button when there's a target
   * @param {object} el the nav button element 
   */
  function enableElement(el) {
    el.setAttribute('style', 'opacity:1;cursor:pointer;')
  }

  /**
   * gets value of a URL param if exists
   * @param {string} name the param you want the value of
   * @return {string} result value of param if exists or ""
   */
  function getURLparam(name) {
    var regex,
        results;
    name       = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    regex      = new RegExp("[\\?&]" + name + "=([^&#]*)");
    results    = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function createFrameNav() {
    forward_button.addEventListener('click', function() {

    });
    back_button.addEventListener('click', function() {

    });
  }
  
  // if inside iframe, hide appropriate elements
  if (window.location !== window.parent.location) {
    var i,
      iMax = all_links.length,
      link,
      href;
    for (i = 0; i < iMax; i++) {
      link = all_links[i];
      href = all_links[i].getAttribute('href');
      if (href.charAt(0) !== '#') {
        link.setAttribute('href', href + '?back_page=' + this_page);
        enableElement(back_button);
      }
    }
  } else {
    hideElement(forward_button);
    hideElement(back_button);
  }
})(window, document);
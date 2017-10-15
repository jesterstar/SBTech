/**
 * Module to init dropdown
 */

export function initDropdown(el) {
  let currElement = $(el);

  if (!currElement) {
    return false;
  } else {

    /**
     * Toggle function
     */
    function clickTrigger(container) {
      let dropdown = $(container);

      $(dropdown).each((i) => {
        $(dropdown[i]).on('click', (e) => {
          e.preventDefault();

          if ($(dropdown[i]).hasClass('active')) {
            $(dropdown[i]).removeClass('active');
            return;
          }
          $(dropdown[i]).addClass('active');

          $(document).mouseup(function (e){
            if (!$(dropdown[i]).is(e.target) && $(dropdown[i]).has(e.target).length === 0) {
              $(dropdown[i]).removeClass('active');
            }
          });
        });
      });
    }

    /**
     * Init function
     */
    clickTrigger(currElement);
  }
}
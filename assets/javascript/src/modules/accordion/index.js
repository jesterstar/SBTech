/**
 * Module to init accordion
 */

export function initAccordion(el) {

  /**
   * Define constants
   */
  const OPEN_LABEL_TEXT = 'Click to open';
  const CLOSE_LABEL_TEXT = 'Click to close';

  let currElement = document.querySelectorAll(el);
  let paneCollection, dataToggle;

  if (!currElement) {
    return false;
  } else {

    /**
     * Function to render all panes
     */
    function paneRender(container) {
      paneCollection = currElement[0].children;

      for (let i=0; i < paneCollection.length; i++) {
        dataToggle = paneCollection[i].dataset.toggle;

        if (dataToggle == 'close') {
          paneCollection[i].classList.add('closed');
          paneCollection[i].children[0].innerHTML = OPEN_LABEL_TEXT;
        } else if (dataToggle == 'open') {
          paneCollection[i].classList.add('opened');
          paneCollection[i].children[0].innerHTML = CLOSE_LABEL_TEXT;
        }
      }
      /*paneCollection = $(container).find('.pane');

      for (let i=0; i < paneCollection.length; i++) {
        dataToggle = $(paneCollection[i]).data('toggle');

        if (dataToggle == 'close') {
          $(paneCollection[i])
            .addClass('closed')
            .find('.panel .title')
            .text(openLabel);
        } else if (dataToggle == 'open') {
          $(paneCollection[i])
            .addClass('opened')
            .removeClass('closed')
            .find('.panel .title')
            .text(closeLabel);
        }
      }*/
    }

    /**
     * Toggle function
     */
    function clickTrigger(container) {
      /*let panel = $(container).find('.pane > .panel');

      $(panel).each((i) => {
        $(panel[i]).on('click', () => {
          dataToggle = $(panel[i]).closest('.pane').data('toggle');

          if (dataToggle == 'close') {
            $(panel)
              .closest('.pane')
              .addClass('closed')
              .removeClass('opened')
              .data('toggle', 'close')
              .find('.panel .title')
              .text(openLabel);

            $(panel[i])
              .closest('.pane')
              .addClass('opened')
              .removeClass('closed')
              .data('toggle', 'open')
              .find('.panel .title')
              .text(closeLabel);
          } else if (dataToggle == 'open') {
            $(panel)
              .closest('.pane')
              .addClass('closed')
              .removeClass('opened')
              .data('toggle', 'close')
              .find('.panel .title')
              .text(openLabel);
          }
        });
      });*/
    }

    /**
     * Init functions
     */
    paneRender(currElement);
    clickTrigger(currElement);
  }
}
/**
 * Module to init accordion
 */

export function initAccordion(el) {

  /**
   * Define constants
   */
  const OPEN_LABEL_TEXT = 'Click to open';
  const CLOSE_LABEL_TEXT = 'Click to close';

  /**
   * Define variables
   */
  let currElement = document.querySelectorAll(el);
  let dataToggle, panel;

  if (!currElement) {
    return false;
  } else {

    /**
     * Method to render all panes
     */
    function paneRender(container) {
      panel = container[0].children;

      for (let i=0; i < panel.length; i++) {
        dataToggle = panel[i].dataset.toggle;

        if (dataToggle == 'close') {
          panel[i].classList.add('closed');
          panel[i].children[0].innerHTML = OPEN_LABEL_TEXT;
        } else if (dataToggle == 'open') {
          panel[i].classList.add('opened');
          panel[i].children[0].innerHTML = CLOSE_LABEL_TEXT;
        }
      }
    }

    /**
     * Click trigger method
     */
    function clickTrigger(container) {
      panel = container[0].children;

      /**
       * Method to click on pane
       */
      function initClick() {
        dataToggle = this.parentNode.dataset.toggle;

        if (dataToggle == 'open') {
          this.innerHTML = OPEN_LABEL_TEXT;
          this.parentNode.dataset.toggle = 'close';
          this.parentNode.classList.replace('opened', 'closed');
        } else if (dataToggle = 'close') {
          closeAllPanes();

          this.innerHTML = CLOSE_LABEL_TEXT;
          this.parentNode.dataset.toggle = 'open';
          this.parentNode.classList.replace('closed', 'opened');
        }
      }

      /**
       * Method to close all panes
       */
      function closeAllPanes() {
        for (let i=0; i < panel.length; i++) {
          panel[i].children[0].innerHTML = OPEN_LABEL_TEXT;
          panel[i].dataset.toggle = 'close';
          panel[i].classList.replace('opened', 'closed');
        }
      }

      /**
       * Adding event listener to the panes
       */
      for (let i=0; i < panel.length; i++) {
        panel[i].children[0].addEventListener('click', initClick, false);
      }
    }

    /**
     * Init method`s
     */
    paneRender(currElement);
    clickTrigger(currElement);
  }
}
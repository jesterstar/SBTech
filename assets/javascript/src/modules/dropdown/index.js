/**
 * Module to init dropdown
 */

export function initDropdown(el) {

  /**
   * Define variables
   */
  let currElement = document.querySelectorAll(el);

  if (!currElement) {
    return false;
  } else {

    /**
     * Toggle function
     */
    function clickTrigger(container) {
      let dropdown = container[0];

      function initClick(e) {
        e.preventDefault();

        /**
         * Condition to remove/add active class
         */
        if (this.classList.value.match('active')) {
          this.className = 'dropdown';
          return;
        }

        this.classList.add('active');

        /**
         * Event when user click not on active element
         */
        document.addEventListener('click', function(event) {
          var isClickInside = dropdown.contains(event.target);

          if (!isClickInside) {
            dropdown.className = 'dropdown';
          }
        });
      }

      dropdown.addEventListener('click', initClick, false);
    }

    /**
     * Init function
     */
    clickTrigger(currElement);
  }
}
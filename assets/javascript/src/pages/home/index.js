import { initHeader } from './../../modules/header';
import { initSidebar } from './../../modules/sidebar';

/**
 * Home page
 */
class Home {

  /**
   * Home page constructor
   */
  constructor() {
    this.initModules();
  }

  /**
   * Method for init Home page modules
   */
  initModules() {
    initHeader();
    initSidebar();
  }
}

new Home();

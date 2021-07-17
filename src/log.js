export default class Log {
  #logger = console;

  /**
   * Log to console
   * @param {*} message 
   * @param  {...any} args 
   */
  log(message, ...args) {
    this.#logger.log(message, ...args);
  }

  /**
   * 
   * @param {number} delay in millis 
   * @param {*} message 
   * @param  {...any} args 
   */
  asyncLog(delay, message, ...args) {
    setTimeout(() => {
      this.log(message, ...args);
    }, delay)
  }
}
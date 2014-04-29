window.App = window.App || {};
window.Env = window.Env || {};

(function(App, Env){


    App.DropDown = {

        /**
         * Init modal window module
         */
        init: function() {
            var button=self.getElementsById('nav-fchild')[0];
            this.buildMarkup();
            this.bindEvents();

        },

        /**
         * Build All modal Windows
         */
        buildMarkup: function() {
            var self = this;

            var template = [
                '<div class="dropdown-menu-wrap">',
                        '<ul class="left-col-nav">',
                            '<li>Now playing</li>',
                            '<li>Top movies</li>',
                            '<li>Showtimes &amp; tickets</li>',
                            '<li>Trailers</li>',
                            '<li>DVD &amp; blue-ray</li>',
                            '<li>Independant film</li>',
                        '</ul>',
                        '<ul class="right-col-nav">',
                            "<li>Top 250</li>",
                            "<li>Genres</li>",
                            "<li>Editor's spotlight</li>",
                            "<li>Breaking Dawn</li>",
                            "<li>Horror</li>",
                            "<li>Summer movie guide</li>",
                        "</ul>",
                        "</div>"
            ].join("");



                self.button.addEventListener('mousedown', function(evnt) {

                    self.show(template[]);

                });

                /**
                 * Add close button event listener
                 */
                self.button.addEventListener('mousedown', function() {

                    self.hide(template[]);

                });


            });

        },

        /**
         * Show the window
         * @param [Dom Object] modalWindow
         */
        show: function(DropDown) {
            //hide the window
            DropDown.style.display = 'block';
            //hide the curtain
            //cache the opened window, so we know wich window to close
            this.openedWindow = DropDown;
        },

        hide: function() {
            //close the current opened window
            this.openedWindow.style.display = 'none';
            //hide the modal curtain
        },

        /**
         * Bind global events
         */
        bindEvents: function() {
            var self = this;

            //when pressing escape
            document.addEventListener('keydown', function(evnt) {
                if (evnt.keyCode == 27) {
                    self.hide();
                }
            });

            //when clicking the curtain
            this.button.addEventListener('mousedown', function(evnt){
                self.hide();
            });
        }
    };

        App.ModalWindow.init();

})(Env, App);
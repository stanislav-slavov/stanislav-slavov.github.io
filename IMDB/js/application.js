/**
 * Master application
 * Includes Classes Env, App
 */

window.App = window.App || {};
window.Env = window.Env || {};

(function(App, Env){


    App.ModalWindow = {

        /**
         * Init modal window module
         */
        init: function() {
            this.isShown = false;
            this.topbar = document.getElementById('top-bar');
            this.button = document.getElementById('button');
            this.pullConfig = document.getElementById('pull-config');
            this.bindEvents();
        },


        /**
         * Show the window
         * @param [Dom Object] modalWindow
         */
        show: function() {
            this.topbar.style.top = '0px';
            this.isShown = true;
        },

        hide: function() {
            this.topbar.style.top = '-453px';
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
                if(self.isShown === true) {

                self.hide();
                self.isShown=false;
                }else {
                    self.show();
                }
            });
        }
    };
   App.ModalWindow.init();
    // var ModalWindow = function() {

        // var modalCallerClass = 'elements-container',
        //     modalCallers = document.getElementsByClassName(modalCallerClass),
        //     modalWindowObj = document.getElementsByClassName('modal')[0],
        //     modalCurtain = document.getElementsByClassName('black-bgr')[0],
        //     modalClose = document.getElementsByClassName('close')[0];


        // for (var i = modalCallers.length - 1; i >= 0; i--) {

        //     modalCallers[i].addEventListener('mousedown', function(evnt) {

        //         modalWindowObj.style.display = 'block';
        //         modalCurtain.style.display = 'block';

        //     });
        // };

        // modalClose.addEventListener('mousedown', function() {
        //     modalWindowObj.style.display = 'none';
        //     modalCurtain.style.display = 'none';
        // });

    // };


    // var modalWindow = new ModalWindow();

      App.init = function() {
        var self = this;

        this.ratingBox = document.getElementsByClassName('rating')[0];
        this.stars = this.ratingBox.getElementsByClassName('star');

        Array.prototype.forEach.call(this.stars, function(element, index){

            element.addEventListener('click', function(evnt){

                var selected = self.ratingBox.getElementsByClassName('star-active');

                if(selected.length) {
                    selected[0].classList.remove('star-active');
                }

                this.classList.add('star-active');

            });

        });

    };

    App.init = App.init.bind(App);

    document.addEventListener('DOMContentLoaded', App.init);


    App.DropDownWindow = {

        /**
         * Init modal window module
         */
        init: function() {

            this.navChildren = document.getElementById('nav-fchild');
            this.subMenu = document.getElementById('sub-menu');
            this.bindEvents();

        },


        /**
         * Show the window
         * @param [Dom Object] modalWindow
         */
        show: function(element) {
            //hide the window
            element.style.display = 'block';
        },

        hide: function(element) {
            //close the current opened window
            element.style.display = 'none';
        },

        /**
         * Bind global events
         */
        bindEvents: function() {
            var self = this;


                this.navChildren.addEventListener('mouseover', function(evnt) {

                        self.show(self.subMenu);

                });

                this.navChildren.addEventListener('mouseleave', function(evnt) {

                        self.hide(self.subMenu);

                });

                this.subMenu.addEventListener('mouseleave', function(evnt) {

                        self.hide(self.subMenu);

                });

                this.subMenu.addEventListener('mouseover', function(evnt) {

                        self.show(self.subMenu);

                });

        }
    };

    App.DropDownWindow.init();

    App.ShowMoreDiv = {

        /**
         * Init modal window module
         */
        init: function() {

            this.showMoreLink = document.getElementsByClassName('show-more-link');
            this.showMoreDivs = document.getElementsByClassName('show-more-div');
            this.bindEvents();
        },


        /**
         * Show the window
         * @param [Dom Object] modalWindow
         */
        show: function(element) {
            //hide the window
            element.style.display = 'block';
        },

        hide: function(element) {
            //close the current opened window
            element.style.display = 'none';
        },

        /**
         * Bind global events
         */
        bindEvents: function() {
            var self = this;

            Array.prototype.forEach.call(this.showMoreLink, function(element, index) {

                element.addEventListener('mousedown', function(evnt) {

                    if(self.showMoreDivs[index].style.display == 'block') {

                        self.hide(self.showMoreDivs[index]);

                    }else {

                        self.show(self.showMoreDivs[index]);
                    }
                });

            });



        }
    };

    App.ShowMoreDiv.init();



    // var ModalWindow = function() {

        // var modalCallerClass = 'elements-container',
        //     modalCallers = document.getElementsByClassName(modalCallerClass),
        //     modalWindowObj = document.getElementsByClassName('modal')[0],
        //     modalCurtain = document.getElementsByClassName('black-bgr')[0],
        //     modalClose = document.getElementsByClassName('close')[0];


        // for (var i = modalCallers.length - 1; i >= 0; i--) {

        //     modalCallers[i].addEventListener('mousedown', function(evnt) {

        //         modalWindowObj.style.display = 'block';
        //         modalCurtain.style.display = 'block';

        //     });
        // };

        // modalClose.addEventListener('mousedown', function() {
        //     modalWindowObj.style.display = 'none';
        //     modalCurtain.style.display = 'none';
        // });

    // };


    // var modalWindow = new ModalWindow();

})(Env, App);
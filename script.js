/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
        function activateParentElement($el) {
            $el.addEventListener('click', function () {
                $el.parentElement.classList.toggle('is-active');
            });
        }

        activateParentElement($el, $disable) {
            $el.addEventListener('click', function () {
                $el.parentElement.classList.toggle('is-active');
                $disable.parentElement.classList.remove('is-active');
            });
        }
        function getAll(selector) {
            return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
        }
        function switchIcon(icon) {
            if (icon) {
                var oldClass = icon.classList.value
                icon.classList = icon.getAttribute('data-alternate');
                icon.setAttribute('data-alternate', oldClass)
            }
        }

        document.addEventListener('DOMContentLoaded', function () {
            // Navbars Mobile
            var $navbars = getAll(".navbar-item-accordion")
            if ($navbars.length > 0) {
                $navbars.forEach(function ($el) {
                    $el.addEventListener('click', function (event) {
                        $el.classList.toggle('is-active');
                    });
                });
            }

            // Compte desktop
            var $compteDesktop = document.getElementById('navbar-dropdown dropdown_button');
            if ($compteDesktop != null) {
                $compteDesktop.addEventListener('click', function () {
                    $compteDesktop.classList.toggle('is-active');
                });
            }

			var $search = document.getElementById('searchBtn');
			if ($search != null) {
				$search.addEventListener('click', function () {
					var searchInput = document.getElementById('searchInput').value;
					var url = "https://www.bouyguestelecom.fr/search?q=" + searchInput;
					location.replace(url);
				});
				var $searchEnter = document.getElementById('searchInput');
				$searchEnter.addEventListener('keypress', function (e) {
					if (e.key === 'Enter') {
						var searchUrl = "https://www.bouyguestelecom.fr/search?q=" + document.getElementById('searchInput').value;
						location.replace(searchUrl);
					}
				});
			}

            var megaParents = document.querySelectorAll('.navbar-icons>.navbar-item>.navbar-link');
            [].forEach.call(megaParents, function (megaParent) {
                megaParent.addEventListener('click', function () {
                    // Close all dropdown
                    var dropdownParents = document.querySelectorAll('.navbar-icons>.navbar-item');
                    var opened = this.parentNode.classList.contains('is-active');

                    [].forEach.call(dropdownParents, function (dropdownParent) {
                        if (dropdownParent.classList.contains('is-active')) {
                            switchIcon(dropdownParent.querySelector('[data-alternate]'));
                        }
                        dropdownParent.classList.remove('is-active');
                    })

                    if (!opened) {
                        this.parentNode.classList.add('is-active');
                        switchIcon(this.parentNode.querySelector('[data-alternate]'));
                    }
                })
            })
        });

function onclick(event) {
  window.open('https://radiototem.fr/player', 'TOTEM - LE DIRECT', 'height=600, width=400, top=100, left=100, toolbar=no, menubar=no, location=no, resizable=no, scrollbars=no, status=no');
  return false;
}
function onclick(event) {
  window.open('http://jazzradio.ice.infomaniak.ch/jazzradio-high.mp3', 'Jazz Radio LE DIRECT', 'height=600, width=400, top=100, left=100, toolbar=no, menubar=no, location=no, resizable=no, scrollbars=no, status=no');
  return false;
}
function onclick(event) {
  window.open('http://direct.francemusique.fr/live/francemusique-midfi.mp3', 'France Musique LE DIRECT', 'height=600, width=400, top=100, left=100, toolbar=no, menubar=no, location=no, resizable=no, scrollbars=no, status=no');
  return false;
}
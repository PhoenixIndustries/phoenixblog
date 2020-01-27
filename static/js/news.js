var qsRegex;
var $grid = $('#news-grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    filter: function() {
        return qsRegex ? $(this).text().match( qsRegex ) : true;
      },
    getSortData: {
        date: function (elem) {
            return Date.parse($(elem).find('.date').text());
        }
    },
    sortBy : 'date',
    sortAscending : false    
});

function saveLayout() {
    if ($("#news-grid").hasClass("classic-layout")) {
        type = "classic"
    } else {
        type = "modern"
    }
    document.cookie = `layout=${type}; expires=31536000`;
  }

function layoutChanged() {
    $("#news-grid").toggleClass("classic-layout");
    saveLayout();
    setTimeout(function(){ 
        $("#news-grid").isotope("reloadItems").isotope({ sortBy: 'original-order' }); 
     }, 250);
}

function template() {
    return `
    <article data-toggle="modal" data-target="#{{ id }}" onclick="$('.modal-body p:contains(Posts:)').hide();$('.modal-body p:contains(Participants:)').hide();"class='blog-post grid-item col-md-6 col-xl-4 ml-auto mr-auto {{ category }}'>
        <div class="card zoom">
            <div style="text-align:right;">
                {{ img }}
                <a>
                    <div class="mask rgba-white-slight"></div>
                </a>
                </div>
                <span>
                <h5 class="card-title">{{ title }}</h5>
                <div class="card-body" data-background-color="black"> 
                <div id="content" class="social-icons-top">    
                <div class="date">{{ pubDate }}</div>   
                <a onclick="$(this).attr('href');" data-toggle="tooltip" data-placement="top" title="Share" href="https://twitter.com/intent/tweet?via=ManjaroLinux&hashtags=Manjaro,Linux&text={title}&url={link}"  target="_blank" class="btn btn-icon btn-round twitter"> 
                  <i class="fab fa-twitter"></i>
                </a>
                <a onclick="" data-toggle="tooltip" data-placement="top" title="Share" href="https://www.facebook.com/sharer/sharer.php?u={link}"  target="_blank" class="btn btn-icon btn-round facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                </span>
                </div>             
                <div class="card-text">{{ excerpt }}</div>
            </div>
    </article>
    <!-- modal -->
            <div class="modal fade" id="{{ id }}" tabindex="-1" role="dialog" aria-labelledby="news" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">
                        &times;
                        </button>
                    </div>
                    <div class="modal-body">{{ description }}</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
            </div>
    <!-- end modal -->`
}

function cleanup(content) {
    let regex = /\||full edition:|minimal-edition:|Full ISO|Minimal ISO|direct | sig | sha1 |sha256|torrent/gi
        let excerpt = document.createElement('div'); 
        content.description.textContent = content.description.textContent.split(' wrote:')[1]       
        let fragment = document.createRange().createContextualFragment(content.description.textContent)
        lightbox = fragment.querySelectorAll(".lightbox-wrapper");
        displayImg = fragment.querySelector("img");
        if (displayImg) {
            displayImg = displayImg.getAttribute("src")
            content.img = `<img class="card-img-top" src="${displayImg}" alt="Post Image">`
        } else {content.img = ""}
        if (lightbox.length > 0) {
            lightbox.forEach(el => el.remove());
        }
        excerpt.innerHTML = fragment.textContent
        content.excerpt = excerpt
        content.excerpt.textContent = excerpt.textContent.replace(regex, "").slice(1, 200);
        content.title.textContent = content.title.textContent.replace(/\d{2,4}[\-|\/]\d{1,2}[\-]\d{1,2}|\[|\]|\(|\)|/g, "")
        content.pubDate.textContent = content.pubDate.textContent.replace(/\+0000|,/g, "").slice(0, -9).slice(4, 15)
        content.id = "id" + content.pubDate.textContent.replace(/\ /g, "") + content.title.textContent.replace(/[^a-zA-Z0-9]+/g, "")
}

function updateGrid(content) {
    $grid.isotope( 'addItems', content.id );
    $grid.isotope('reloadItems');
    setTimeout(function(){ $grid.isotope({sortBy:"date"}) }, 1200);     
}

function getFeeds() {
    let stable = new CorsFeedReader("#news-grid", {
        credentials: 'omit'
        }, {
        feedUrl: "https://forum.manjaro.org/c/announcements/stable-updates.rss",
        dev: true,
        template: template(),
        beforeTemplate: function(content) {
            cleanup(content)              
        },
        afterTemplate: function(content) {
            updateGrid(content)
        }
    });
    
    setTimeout(function(){ 
        $(".progress-bar").css("width", "20%");
     }, 1000);
    
    let testing = new CorsFeedReader("#news-grid", {
        credentials: 'omit'
        }, {
        feedUrl: "https://forum.manjaro.org/c/announcements/testing-updates.rss",
        dev: true,
        template: template(),
        beforeTemplate: function(content) {
            cleanup(content)              
        },
        afterTemplate: function(content) {
            updateGrid(content)
        }
    });
    
    setTimeout(function(){ 
        $(".progress-bar").css("width", "40%");
     }, 1200);
    
    let unstable = new CorsFeedReader("#news-grid", {
        credentials: 'omit'
        }, {
        feedUrl: "https://forum.manjaro.org/c/announcements/unstable-updates.rss",
        dev: true,
        template: template(),
        beforeTemplate: function(content) {
            cleanup(content)              
        },
        afterTemplate: function(content) {
            updateGrid(content)
        }
    });
    
    setTimeout(function(){ 
        $(".progress-bar").css("width", "60%");
     }, 1400);
    
    let arm = new CorsFeedReader("#news-grid", {
        credentials: 'omit'
        }, {
        feedUrl: "https://forum.manjaro.org/c/manjaro-arm/announcements.rss",
        items: 4,
        dev: true,
        template: template(),
        beforeTemplate: function(content) {
            cleanup(content)
        }, 
        afterTemplate: function(content) {
            updateGrid(content)
        }
    });
    
    setTimeout(function(){ 
        $(".progress-bar").css("width", "80%");
     }, 1600);
    
     let manjaro32 = new CorsFeedReader("#news-grid", {
        credentials: 'omit'
        }, {
        feedUrl: "https://forum.manjaro.org/c/announcements/manjaro32.rss",
        items: 1,
        dev: true,
        template: template(),
        beforeTemplate: function(content) {
            cleanup(content)
        }, 
        afterTemplate: function(content) {
            updateGrid(content)
        }
    });
    
    setTimeout(function(){ 
        $(".progress-bar").css("width", "80%");
     }, 1800);
}
 getFeeds(); 
function postTypeButtons() {
    var postTypeButtons = $(`
    <div class="container text-center">
    <span><input class="quicksearch" type="text" placeholder="Search..." aria-label="Search"></span>
        <button id="btn-sort" data-toggle="modal" data-target="#sortModal" onclick="selectPostType('.News');" class="btn-post-type btn-sm btn">Sort Post's</button>
        <button id="btn-layout">
          <i rel="tooltip" data-placement="top" data-toggle="tooltip" data-original-title="Set Classic Layout" class="fas fa-grip-lines"></i>
          <i rel="tooltip" data-placement="top" data-toggle="tooltip" data-original-title="Set Modern Layout" class="fas fa-grip-horizontal"></i>
        </button>

        <div id="updatesModal" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title">Chose a Branch.</h2>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </div>
                    <div class="modal-footer">
                        <div class="btn-group" role="group" aria-label="button group">
                            <button onclick="selectPostType('.Stable');" class="btn-post-type btn btn-sm" data-dismiss="modal">Stable</button>
                            <button onclick="selectPostType('.Testing');" class="btn-post-type btn-sm btn" data-dismiss="modal">Testing</button>
                            <button onclick="selectPostType('.Unstable');" class="btn-post-type btn-sm btn" data-dismiss="modal">Unstable</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="sortModal" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title">Chose a Category.</h2>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </div>
                    <div class="modal-footer">
                        <div class="btn-group" role="group" aria-label="button group">
                            <button data-dismiss="modal" id="btn-updates" onclick="selectPostType('.Updates');" class="btn-post-type btn btn-sm" data-toggle="modal" data-target="#updatesModal">Updates</button>
                            <button data-dismiss="modal" onclick="selectPostType('.Release');" class="btn-post-type btn-sm btn">Releases</button>
                            <button data-dismiss="modal" onclick="selectPostType('.News');" class="btn-post-type btn-sm btn">News</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>`
    )
    return postTypeButtons 
}

function stopModal(el) {
    $(el).on('click', function (e) {
        e.stopPropagation();  
        });
};

$(".section .container").prepend(postTypeButtons());
function selectPostType(category) { 
    $grid.isotope({ filter: category, sortBy: 'original-order' });
}

$(".fa-grip-lines").click(function(){ 
    layoutChanged();
    $(this).fadeOut().promise().done(function() {
        $(".fa-grip-horizontal").fadeIn();
    });
});

$(".fa-grip-horizontal").click(function(){ 
    layoutChanged();
    $(this).fadeOut().promise().done(function() {
        $(".fa-grip-lines").fadeIn();
    });
});

setTimeout(function(){ 
    $(".progress-bar").css("width", "100%");
    $(".logo-overlay-loader").fadeOut();
    $grid.imagesLoaded().progress( function() {
        $grid.isotope({sortBy:"date"})
      });
    }, 2000); 

if (document.cookie.split(';').filter(function(value) {
    console.log("cookie:" +value)
    if (value.includes("classic")) {
        $("#news-grid").addClass("classic-layout");
        $(".fa-grip-lines").hide()
        $(".fa-grip-horizontal").show()
    } else {
        $("#news-grid").addClass("modern-layout");
        $(".fa-grip-horizontal").hide()
        $(".fa-grip-lines").show()
    }
}));
// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
    qsRegex = new RegExp( $quicksearch.val(), 'gi' );
    $grid.isotope();
  }, 200 ) );
  
// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
var timeout;
threshold = threshold || 100;
return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
    fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
};
}
        
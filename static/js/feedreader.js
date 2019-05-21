function postTypeButtons() {
    var postTypeButtons = $(`
    <div class="container text-center">
    <button id="btn-layout"><i class="fas fa-bars"></i></button>
        <div class="btn-group" role="group" aria-label="button group">
            <button onclick="selectPostType(this, '.updates');" class="btn-post-type btn btn-sm" data-toggle="modal" data-target="#updatesModal">Updates</button>
            <button onclick="selectPostType(this, '.release');" class="btn-post-type btn-sm btn">Releases</button>
            <button onclick="selectPostType(this, '.post-news');" class="btn-post-type btn-sm btn">News</button>
        </div>
        <div id="updatesModal" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title">Showing All Updates, Chose a Branch to sort them.</h2>
                    </div>
                    <div class="modal-footer">
                        <div class="btn-group" role="group" aria-label="button group">
                            <button onclick="selectPostType(this, '.stable');" class="btn-post-type btn btn-sm" data-dismiss="modal">Stable</button>
                            <button onclick="selectPostType(this, '.testing');" class="btn-post-type btn-sm btn" data-dismiss="modal">Testing</button>
                            <button onclick="selectPostType(this, '.unstable');" class="btn-post-type btn-sm btn" data-dismiss="modal">Unstable</button>
                        </div>
                        <button type="button" class="btn btn-sm btn" data-dismiss="modal">Ignore</button>
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
}

$(".section .container").prepend(postTypeButtons());

$('#news-grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    getSortData: {
        date: function (elem) {
            return Date.parse($(elem).find('time').text());
        }
    },
    sortBy : 'date',
    sortAscending : true
});

function selectPostType(button, el) {
    $(".btn-post-type").removeClass("btn-success");
    $(button).addClass("btn-success");
    $("#news-grid").isotope({ filter: el });
}

var feeds = [
    "https://forum.manjaro.org/c/announcements.rss",
    "https://forum.manjaro.org/c/manjaro-arm/announcements.rss"
    ]

function feedreader(url) {
    $.ajax(url, {
        accepts:{
            xml:"application/rss+xml"
        },
        headers: {
            'Content-Type':'application/rss+xml'
        },
        cache: true,
        type: "GET",
        dataType: "xml",
        success: function(data) {
            var $XML = $(data);
            $XML.find("item").each(function(iter) {
                
                if (url == feeds[1] && iter > 0) {
                    // pass
                } else {
                
                var $this = $(this),
                    item = {
                        title:       $this.find("title").text().replace(/\d{2,4}[\-|\/]\d{1,2}[\-]\d{1,2}|\[|\]|\(|\)/g, ""),
                        category:    $this.find("category").text(),
                        description: $this.find("description").text().replace(/\]]>/g, "").replace("Read full topic", "Go to this topic in the forum."),
                        date:        $this.find("pubDate").text().replace(/\+0000|,/g, "").slice(0, -9).slice(4, 15),
                        link:        $this.find("link").text(),
                    };
                var el = "news" + item.date.replace(/\ |:|,/g, "") + iter.toString()
                var forumHtml = $($.parseHTML(item.description));
                var regex = /\||full edition:|minimal-edition:|Full ISO|Minimal ISO|direct | sig | sha1 |sha256|torrent/gi
                var img = forumHtml.find("img:first").attr("src");
                var shortText = forumHtml.find(".lightbox-wrapper").remove();
                shortText = forumHtml.text().trim().replace(regex, "").slice(1, 200).split(' wrote:')[1];

                function detectPostTypeByTitle(title) {

                    function titleHasString(string) {
                        return title.toLowerCase().includes(string)
                    }
                
                    if (titleHasString("unstable update")) {
                        return "unstable updates"
                        } else if (titleHasString("testing update")) {
                            return "testing updates"
                            } else if (titleHasString("stable update")) {
                                return "stable updates"
                                }else if (
                                    titleHasString("release") || 
                                    titleHasString("iso") ||
                                    titleHasString("preview") ||
                                    titleHasString("download")) {
                                        return "release"
                    } else {
                        return "post-news"
                    }
                }

                function filterImages(img) {

                    var imageTemplate = `<img class="card-img-top" src="` + img + `" alt="Post Image">`
        
                    if (typeof img === 'undefined') {
                        return ""
                    } else if (img.includes(".gif")) {
                        imageTemplate = `<img class="card-img-top" data-gifffer="` + img + `" src="` + img + `"alt="Post Image">`
                        return imageTemplate
                    } else if (img.includes("emoji")) {
                        return ""
                    } else if (img.includes(".ico")) {
                        return ""
                    } else if (img.includes("user_avatar")) {
                        return ""
                    } else {
                        return imageTemplate
                    }         
                }
                
                function buildArticleTemplate(el, img, date, title, shortText, link) {
                    
                    var $article = $(`
                        <article id='unique` + el + `' class='blog-post grid-item col-md-6 col-xl-4 ml-auto mr-auto ` + detectPostTypeByTitle(title) + `'>
                            <div class="card zoom">
                                <div data-toggle="modal" data-target='#` + el + `'>
                                    <div class="view overlay">` +
                                    filterImages(img) + `
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                    </div>
                                    <div id="date" class="text-right">
                                        <span class="date">` + date + `</date>
                                    </div>
                                    <span>
                                    <h5 class="card-title">` + title + `</h5>
                                    <div class="card-body " data-background-color="black"> 
                                    <div id="content" class="social-icons-top">       
                                    <a onclick="$(this).attr('href');" data-toggle="tooltip" data-placement="top" title="Share" href="https://twitter.com/intent/tweet?via=ManjaroLinux&hashtags=Manjaro,Linux&text=` + title + `&url=` + link + `"  target="_blank" class="btn btn-icon btn-round twitter"> 
                                      <i class="fab fa-twitter"></i>
                                    </a>
                                    <a onclick="" data-toggle="tooltip" data-placement="top" title="Share" href="https://www.facebook.com/sharer/sharer.php?u=` + link + `"  target="_blank" class="btn btn-icon btn-round facebook">
                                      <i class="fab fa-facebook-f"></i>
                                    </a>
                                    </span>
                                </div>             
                                        <p class="card-text">` + shortText + `</p>
                                    </div>
                                </div>
                        </article>`)
                    return $article
                }       
                
                function buildModalTemplate(el, title, description) {

                    var modal = `<div class="modal fade" id="` + el + `" tabindex="-1" role="dialog" aria-labelledby="` + title + `" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">` + title + `</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">
                                &times;
                                </button>
                            </div>
                            <div class="modal-body">
                            ` + description + `
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>`

                return modal
                }

                $("#news-grid").isotope( "insert", buildArticleTemplate(el, img, item.date, item.title, shortText, item.link) );//.isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
                $("#news-grid").append(buildModalTemplate(el, item.title, item.description));
                
                Gifffer();
                stopModal($('#unique' + el + ' .social-icons-top a'));
                $('#' + el + ' .modal-body').find(".meta").remove();
                $('#' + el + ' .modal-body').find(".poll").remove();
                $('#' + el + ' .modal-body').find("p:contains('Posts:')").remove();
                $('#' + el + ' .modal-body').find("p:contains('Participants:')").remove();

                $("#news-grid #unique" + el).imagesLoaded( function(){
                    $("#news-grid").isotope("reloadItems").isotope({ sortBy: 'original-order' });
                });
                
            }});
        }});
    };
feedreader(feeds[0]);
feedreader(feeds[1]);

$("#news-grid article").imagesLoaded( function(){
    $("#btn-layout").click(function(){ 
        $("#btn-layout").toggleClass("btn-rotate");
        $("#news-grid").toggleClass("horizontal");
        setTimeout(function(){ 
            $("#news-grid").isotope("reloadItems").isotope({ sortBy: 'original-order' }); 
         }, 400);
      });
});

setTimeout(function(){ 
    $(".progress-bar").css("width", "10%");
 }, 550);
 setTimeout(function(){ 
    $(".progress-bar").css("width", "20%");
 }, 1000);
 setTimeout(function(){ 
    $(".progress-bar").css("width", "30%");
 }, 1300);
 setTimeout(function(){ 
    $(".progress-bar").css("width", "40%");
 }, 1600);
 setTimeout(function(){ 
    $(".progress-bar").css("width", "50%");
 }, 1800);
setTimeout(function(){ 
    $(".progress-bar").css("width", "60%");
 }, 2000);
 setTimeout(function(){ 
    $(".progress-bar").css("width", "70%");
 }, 2200);
 setTimeout(function(){ 
    $(".progress-bar").css("width", "80%");
 }, 2400);
 setTimeout(function(){ 
    $(".progress-bar").css("width", "92%");
 }, 2600);
 setTimeout(function(){ 
    $(".progress-bar").css("width", "100%");
 }, 2800);

setTimeout(function(){ 
    $(".logo-overlay-loader").fadeOut();
    $("#news-grid").isotope("reloadItems").isotope({ sortBy: 'original-order' });
    }, 3000);   
        
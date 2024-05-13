const App = {
    darkMode: $('.dark_mode'),
    preLoadAnim: $('.pre_load_animation'),
    preLoadMessOne: $('.first_message'),
    preLoadMessTwo: $('.second_message'),
    preLoadCta: $('.pre_load_cta'),
    atfImage: $('.atf_image'),
    atfHead: $('.head'),
    atfSubHead: $('.sub_head'),
    atfCta: $('.atf_cta'),
    projects: $('.projects'),
    project: $('.project'),
    projectsCta: $('.projects_cta'),
    client: $('.client'),
    serviceCta: $('.service_cta'),
    mobMenu: $('.mobile_menu_btn'),
    mobMenuLink: $('.mobile_link'),
    contactCta: $('.contact_cta'),
}

$(document).ready(function(){
    // scroll to top
    // $('html,body').scrollTop(0)
    // $('body').css("overflow", "hidden",);
    // pre load cta
    (function showPreLoadAnimation(){
        App.preLoadAnim.addClass('show_preload_animation')
        setTimeout(() => {
            App.preLoadMessOne.addClass('visible', "slow")
        }, 1300);
        setTimeout(() => {
            App.preLoadMessTwo.addClass('visible')
        }, 2500);
        setTimeout(() => {
            App.preLoadCta.addClass('visible')
        }, 4000);
    })();
    // pre load cta click
    App.preLoadCta.click(function(){
        $('body').css('overflow', 'auto')
        App.preLoadAnim.addClass('hide_preload_animation')
        setTimeout(() => {
            showAtfElements()
        }, 1300);
    })
    App.contactCta.on('click', highlightContact)
    // mobile menu btn click
    App.mobMenu.on('click', function(){
        $('.mobile_menu_links').toggleClass('menu_closed')
    })
    App.mobMenuLink.on('click', function(){
        $('.mobile_menu_links').toggleClass('menu_closed')
    })
    // dark mode
    App.darkMode.click(function(){
        if(App.darkMode.hasClass('dark_mode_active')){
            App.darkMode.removeClass('dark_mode_active')
            $('body').removeClass('dark_styles_active')
        }
        else{
            App.darkMode.addClass('dark_mode_active')
            $('body').addClass('dark_styles_active')
        }
    })
    // show atf elements
    function showAtfElements(){
        App.atfImage.addClass('visible')
        setTimeout(() => {
            App.atfHead.addClass('visible')
        }, 1200);
        setTimeout(() => {
            App.atfSubHead.addClass('visible')
        }, 2000);
        setTimeout(() => {
            App.atfCta.addClass('visible')
        }, 2800);
    }
    // atf cta
    App.atfCta.on('click', function(){
        App.projects[0].scrollIntoView()
    })
    $(window).on('scroll', function(){
        ifElementInView('.projects', -300)
    });
    // check if element in view
    function ifElementInView(element, certainHeight){
        const $element = $(element)
        const viewPortTop = $(window).scrollTop()
        const viewPortBottom = viewPortTop + $(window).height()
        // console.log(viewPortTop, 'viewporttop');
        // console.log(viewPortBottom, 'viewportbottom');
        const elementTop = $element.offset().top
        const elementBottom = elementTop+$element.height()
        const checkVisibility = elementTop - viewPortBottom
        console.log(checkVisibility);
        // console.log(elementTop, 'element top');
        if(checkVisibility < certainHeight){
            App.project.addClass('scale visible')
            App.projectsCta.addClass('visible')
        }
        else{
            App.project.removeClass('scale visible')
            App.projectsCta.removeClass('visible')
        }
    }
    // projects cta click
    App.projectsCta.on('click', function(){
        $('.clients')[0].scrollIntoView()
        // console.log($('.client .client_review').eq(0));
        setTimeout(() => {
            $('.client_logo').eq(0).addClass('color_scale')
            $('.client .client_review').eq(0).addClass('show_review')
        }, 500);
    })
    // clients cta click
    $('.client_cta').on('click', function(){
        $('.services')[0].scrollIntoView()
    })
    // services cta
    App.serviceCta.on('click', function(){
        highlightContact()
    })
    
    function highlightContact(){
        $('.contact')[0].scrollIntoView()
        setTimeout(() => {
            $('.method').addClass('scale_method method_active')
            $('.method_info, .contact_icon').addClass('method_info_active')
        }, 1000);
        setTimeout(() => {
        $('.method').removeClass('scale_method method_active')
        $('.method_info, .contact_icon').removeClass('method_info_active')
        }, 2500);
    }
    // activate client card
    /* App.client.on('click', function(){
        $('.client_logo').removeClass('color_scale')
        $('.client_review').removeClass('show_review')
        $(this).find('.client_logo').toggleClass('color_scale')
        $(this).find('.client_review').toggleClass('show_review');
    }) */
})
const App = {
    darkMode: $('.dark_mode'),
    preLoadAnim: $('.pre_load_animation'),
    preLoadMessOne: $('.first_message'),
    preLoadMessTwo: $('.second_message'),
    preLoadCta: $('.pre_load_cta'),
}

$(document).ready(function(){
    showPreLoadAnimation()
    // dark mode button
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

    // show preload animation
    function showPreLoadAnimation(){
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
    }   

    // hide pre load animation
    App.preLoadCta.click(function(){
        App.preLoadAnim.addClass('hide_preload_animation')
    })
})
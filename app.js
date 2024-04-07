const App = {
    darkMode: $('.dark_mode')
}

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
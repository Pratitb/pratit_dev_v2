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
	projectLink: $('.project_link'),
	client: $('.client'),
	clientLink: $('.client_link'),
	serviceCta: $('.service_cta'),
	serviceLink: $('.service_link'),
	mobMenu: $('.mobile_menu_btn'),
	mobMenuLink: $('.mobile_link'),
	contactCta: $('.contact_cta'),
	homeLink: $('.desk_home_btn'),
	desktopLinks: $('.desk_nav_links'),
};

$(document).ready(function () {
	// scroll to top
	// $('html,body').scrollTop(0);
	// $('body').css('overflow', 'hidden');
	// pre load cta
	/* (function showPreLoadAnimation() {
		App.preLoadAnim.addClass('show_preload_animation');
		setTimeout(() => {
			App.preLoadMessOne.addClass('visible', 'slow');
		}, 1300);
		setTimeout(() => {
			App.preLoadMessTwo.addClass('visible');
		}, 2500);
		setTimeout(() => {
			App.preLoadCta.addClass('visible');
		}, 4000);
	})(); */
	// pre load cta click
	/* App.preLoadCta.click(function () {
		$('body').css('overflow', 'auto');
		App.preLoadAnim.addClass('hide_preload_animation');
		setTimeout(() => {
			showAtfElements();
		}, 1300);
	}); */

	// show atf elements
	/* function showAtfElements() {
		App.atfImage.addClass('visible');
		setTimeout(() => {
			App.atfHead.addClass('visible');
		}, 1200);
		setTimeout(() => {
			App.atfSubHead.addClass('visible');
		}, 2000);
		setTimeout(() => {
			App.atfCta.addClass('visible');
		}, 2800);
	} */

	// navigation
	App.mobMenu.on('click', function () {
		$('.mobile_menu_links').toggleClass('menu_closed');
	});
	App.mobMenuLink.on('click', function () {
		$('.mobile_menu_links').toggleClass('menu_closed');
	});
	App.desktopLinks.on('click', function () {
		App.desktopLinks.removeClass('desktop_nav_active');
		$(this).addClass('desktop_nav_active');
	});
	App.mobMenuLink.on('click', function () {
		App.mobMenuLink.removeClass('desktop_nav_active');
		$(this).addClass('desktop_nav_active');
	});
	App.homeLink.on('click', function () {
		$('html').scrollTop(0);
	});
	App.projectLink.on('click', function () {
		showProjects();
	});
	App.clientLink.on('click', function () {
		showClients();
	});
	App.serviceLink.on('click', function () {
		showServices();
	});
	App.contactCta.on('click', function () {
		highlightContact();
	});
	App.darkMode.click(function () {
		if (App.darkMode.hasClass('dark_mode_active')) {
			App.darkMode.removeClass('dark_mode_active');
			$('body').removeClass('dark_styles_active');
		} else {
			App.darkMode.addClass('dark_mode_active');
			$('body').addClass('dark_styles_active');
		}
	});

	// go to these sections
	function showProjects() {
		App.projects[0].scrollIntoView();
	}
	function showClients() {
		$('.clients')[0].scrollIntoView();
	}
	function showServices() {
		$('.services')[0].scrollIntoView();
	}
	function highlightContact() {
		$('.contact')[0].scrollIntoView();
		setTimeout(() => {
			$('.method_info').addClass('method_active');
			$('.method_info, .contact_icon').addClass('method_info_active');
		}, 1000);
		setTimeout(() => {
			$('.method_info').removeClass('method_active');
			$('.method_info, .contact_icon').removeClass('method_info_active');
		}, 2500);
	}

	// section ctas
	App.atfCta.on('click', function () {
		showProjects();
	});
	App.projectsCta.on('click', function () {
		showClients();
	});
	$('.client_cta').on('click', function () {
		showServices();
	});
	App.serviceCta.on('click', function () {
		highlightContact();
	});

	// check if element in view
	/* $(window).on('scroll', function () {
		ifElementInView('.projects', -300);
	}); */
	/* function ifElementInView(element, certainHeight) {
		const $element = $(element);
		const viewPortTop = $(window).scrollTop();
		const viewPortBottom = viewPortTop + $(window).height();
		// console.log(viewPortTop, 'viewporttop');
		// console.log(viewPortBottom, 'viewportbottom');
		const elementTop = $element.offset().top;
		const elementBottom = elementTop + $element.height();
		const checkVisibility = elementTop - viewPortBottom;
		console.log(checkVisibility);
		// console.log(elementTop, 'element top');
		if (checkVisibility < certainHeight) {
			App.project.addClass('scale visible');
			App.projectsCta.addClass('visible');
		} else {
			App.project.removeClass('scale visible');
			App.projectsCta.removeClass('visible');
		}
	} */
	$('a').attr('target', '_blank');
});

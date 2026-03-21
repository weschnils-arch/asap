<?php
/**
 * ASAP Studio — Theme Functions
 */

// Theme support
function asap_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo', array(
        'height'      => 36,
        'width'       => 393,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    register_nav_menus(array(
        'primary' => __('Primary Menu', 'asap-studio'),
        'mobile'  => __('Mobile Menu', 'asap-studio'),
    ));
}
add_action('after_setup_theme', 'asap_theme_setup');

// Enqueue styles and scripts
function asap_enqueue_assets() {
    // Google Fonts — Montserrat 300-900
    wp_enqueue_style(
        'asap-google-fonts',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap',
        array(),
        null
    );

    // Main stylesheet (style.css at theme root)
    wp_enqueue_style(
        'asap-style',
        get_stylesheet_uri(),
        array('asap-google-fonts'),
        '1.0.0'
    );

    // UnicornStudio (loaded in header)
    wp_enqueue_script(
        'unicornstudio',
        'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.3/dist/unicornStudio.umd.js',
        array(),
        null,
        false
    );

    // GSAP
    wp_enqueue_script(
        'gsap',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
        array(),
        '3.12.5',
        true
    );

    // GSAP ScrollTrigger
    wp_enqueue_script(
        'gsap-scrolltrigger',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
        array('gsap'),
        '3.12.5',
        true
    );

    // Theme main JS
    wp_enqueue_script(
        'asap-main',
        get_template_directory_uri() . '/js/main.js',
        array('gsap', 'gsap-scrolltrigger'),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'asap_enqueue_assets');

// Add inline script for UnicornStudio init
function asap_unicorn_init() {
    wp_add_inline_script('asap-main', 'if(window.UnicornStudio){UnicornStudio.init();}');
}
add_action('wp_enqueue_scripts', 'asap_unicorn_init');

// Custom image sizes
add_image_size('team-thumb', 400, 488, true);
add_image_size('service-card', 800, 500, true);

// Custom walker for header nav — outputs plain <a> tags with header__link class
class Asap_Header_Walker extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $url   = $item->url;
        $title = $item->title;
        $output .= '<a href="' . $url . '" class="header__link">' . $title . '</a>';
    }
    function end_el(&$output, $item, $depth = 0, $args = null) {
        // No closing tag needed for flat <a> list
    }
    function start_lvl(&$output, $depth = 0, $args = null) {}
    function end_lvl(&$output, $depth = 0, $args = null) {}
}

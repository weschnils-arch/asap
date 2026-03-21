<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="icon" type="image/webp" href="<?php echo get_template_directory_uri(); ?>/img/logo.webp">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  <!-- HEADER -->
  <header class="header" id="header">
    <div class="header__inner">
      <a href="<?php echo home_url('/'); ?>" class="header__logo">
        <?php if (has_custom_logo()) : ?>
          <?php the_custom_logo(); ?>
        <?php else : ?>
          <img src="<?php echo get_template_directory_uri(); ?>/img/logo.webp" alt="<?php bloginfo('name'); ?>" width="393" height="36">
        <?php endif; ?>
      </a>
      <nav class="header__nav" id="mainNav">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container'      => false,
            'items_wrap'     => '%3$s',
            'link_before'    => '',
            'link_after'     => '',
            'fallback_cb'    => false,
            'depth'          => 1,
            'walker'         => new Asap_Header_Walker(),
        ));
        ?>
        <?php if (!has_nav_menu('primary')) : ?>
          <a href="#service" class="header__link">Service</a>
          <a href="#workflow" class="header__link">Workflow</a>
          <a href="#projects" class="header__link">Projects</a>
          <a href="#clients" class="header__link">Clients</a>
          <a href="#contact" class="header__link">Contact</a>
        <?php endif; ?>
      </nav>
      <div class="header__actions">
        <a href="#voicebank" class="btn-glass-cta btn-glass-cta--nav">Voice Bank</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- MOBILE MENU -->
  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <nav class="mobile-menu__nav">
      <?php
      wp_nav_menu(array(
          'theme_location' => 'mobile',
          'container'      => false,
          'items_wrap'     => '%3$s',
          'fallback_cb'    => false,
          'depth'          => 1,
      ));
      ?>
      <?php if (!has_nav_menu('mobile')) : ?>
        <a href="#service">Service</a>
        <a href="#workflow">Workflow</a>
        <a href="#projects">Projects</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <a href="#voicebank">Voice Bank</a>
      <?php endif; ?>
    </nav>
    <div class="mobile-menu__offices">
      <div>
        <h5>EUROPE:</h5>
        <p>Josefst&auml;dter Stra&szlig;e 75-77<br>Vienna 1080, Austria</p>
        <a href="mailto:office@asap-studio.com">office@asap-studio.com</a>
      </div>
      <div>
        <h5>APAC:</h5>
        <p>68 Circular Road #02-01<br>Singapore 049422</p>
        <a href="mailto:production@asap-studio.com">production@asap-studio.com</a>
      </div>
    </div>
  </div>

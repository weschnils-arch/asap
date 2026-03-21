  <!-- FOOTER / CONTACT -->
  <footer class="footer" id="contact">
    <div class="container">
      <h2 class="footer__title">Headquarters</h2>
      <div class="footer__line"></div>

      <div class="footer__grid">
        <!-- EUROPE -->
        <div class="office-card">
          <div class="office-card__info">
            <h5>EUROPE:</h5>
            <address>
              Josefst&auml;dter Stra&szlig;e 75-77<br>
              Vienna 1080, AUSTRIA<br>
              VAT No. ATU66524567
            </address>
            <a href="mailto:office@asap-studio.com" class="office-card__email">office@asap-studio.com</a>
          </div>
          <div class="office-card__img">
            <img src="<?php echo get_template_directory_uri(); ?>/img/bg/austria-card.webp" alt="Austria" loading="lazy">
            <span>Austria</span>
          </div>
        </div>

        <!-- APAC -->
        <div class="office-card">
          <div class="office-card__info">
            <h5>APAC:</h5>
            <address>
              68 Circular Road #02-01<br>
              Singapore 049422<br>
              Reg# 201722836W
            </address>
            <a href="mailto:production@asap-studio.com" class="office-card__email">production@asap-studio.com</a>
          </div>
          <div class="office-card__img">
            <img src="<?php echo get_template_directory_uri(); ?>/img/bg/singapore-card.webp" alt="Singapore" loading="lazy">
            <span>Singapore</span>
          </div>
        </div>

        <!-- CONTACT FORM -->
        <div class="footer__form">
          <h5>SEND US A MESSAGE:</h5>
          <form id="contactForm" action="#" method="POST" novalidate>
            <input type="text" name="name" placeholder="NAME" required>
            <input type="email" name="email" placeholder="EMAIL" required>
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" class="btn-send">Send</button>
          </form>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; Copyright Asap Studio <?php echo date('Y'); ?>. All rights reserved</p>
      </div>
    </div>
  </footer>

  <?php wp_footer(); ?>
</body>
</html>

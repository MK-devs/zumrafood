<template>
  <div class="page_wrap login_page">
    <nav>
      <div class="nav__item">
        <div class="nav__logo">
          <div class="nav__logoShape"></div>
        </div>
      </div>
      <div class="nav__item">
        <div class="nav__link"></div>
        <Button bgOrangeTrasparent @clickFn="$router.push('/login')"
          >Login</Button
        >
      </div>
    </nav>

    <div class="content">
      <section class="main__text">
        <Title big orange>zumrafood</Title>
        <Title small
          >Founded in 2011 and ever since CRC has been the major Asian
          ingredient supplier to over 300 hotels and restaurants around Egypt.
          Our expertise in the hospitality industry dates back to 2004, giving
          us firsthand on-the-job experience in the field of food and beverage
          and qualifying us to identify the gaps in the market and utilize our
          resources to best fill up that gap.
        </Title>
      </section>
    </div>

    <section class="content__bottom">
      <div class="content__btm__item "></div>
      <div class="content__btm__item "></div>
      <div class="content__btm__item "></div>
      <div class="content__btm__item "></div>
      <div class="content__btm__item "></div>
    </section>
  </div>
</template>

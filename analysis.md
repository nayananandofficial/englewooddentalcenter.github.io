# Homepage Reverse-Engineering Notes

Source analyzed: `../download.htm`
Original site detected in file: `https://englewooddentalcenter.com/`

## 1. Visible Page Structure In Order

1. Header
   - Left: linked logo image
   - Right: address block with map-pin icon, city, and phone number
   - Right: "Book Now" button/image linking to NexHealth
2. Primary navigation
   - Desktop dropdown navigation
   - Mobile dropdown navigation generated separately
3. Hero / slider
   - Four rotating slides
   - Each slide has a heading and one CTA button
   - Previous/next arrows and pagination dots
4. Main content section
   - Intro heading
   - One descriptive paragraph
   - One large office image
5. Promotional card row
   - Three linked promo banner images
6. Footer
   - Hours column
   - Location/contact column
   - Embedded Google Map column
   - Bottom copyright/credit bar

## 2. Extracted Actual Content

### Header

- Logo link: `/`
- Logo image:
  - `https://englewooddentalcenter.com/wp-content/uploads/2019/12/englewood-dental-center_logo.svg`
- Address link:
  - `https://www.google.com/maps/place/Englewood+Dental+Center/@39.6546989,-104.9882193,15z/data=!4m5!3m4!1s0x0:0xe537accaedae0a5c!8m2!3d39.6546989!4d-104.9882193`
- Header text:
  - `3401 S. Broadway`
  - `Englewood, CO`
  - `303-444-2884`
- Visible icon:
  - Font Awesome `fas fa-map-marker-alt`
- Booking button link:
  - `https://app.nexhealth.com/appt/boulder-dental-services?lid=340343`
- Booking button image:
  - `https://storage.googleapis.com/nexassets/embed-button/button-secondary.svg`

### Navigation

- About Us
  - `https://englewooddentalcenter.com/about-us/`
  - Submenu:
    - Our Team: `/our-team`
    - Our Facility: `https://englewooddentalcenter.com/our-facility/`
    - Our Technology: `https://englewooddentalcenter.com/our-technology/`
    - Contact Us: `https://englewooddentalcenter.com/contact-us/`
- Our Services
  - `https://englewooddentalcenter.com/our-services/`
  - Submenu:
    - In-House Services: `https://englewooddentalcenter.com/our-services/house-services/`
    - Oral Health: `https://englewooddentalcenter.com/oral-health/`
    - Dental Emergency: `https://englewooddentalcenter.com/dental-emergency/`
    - Before-After: `https://englewooddentalcenter.com/before-after/`
    - FAQ: `https://englewooddentalcenter.com/faq/`
- Office Plan
  - `https://englewooddentalcenter.com/office-plan/`
- Insurance & Specials
  - `https://englewooddentalcenter.com/insurance-specials/`
  - Submenu:
    - Dental Insurances: `https://englewooddentalcenter.com/dental-insurances/`
    - Payment Solutions: `https://englewooddentalcenter.com/payment-solutions/`
    - Specials: `https://englewooddentalcenter.com/specials/`
- Forms & Instructions
  - Parent link in source: `#`
  - Submenu:
    - New Patient Forms: `https://englewooddentalcenter.com/new-patient-form/`
    - Post-Op Instructions: `https://englewooddentalcenter.com/post-op-instructions/`
- Reviews
  - `https://englewooddentalcenter.com/reviews/`
- Dental Implants
  - `https://englewooddentalcenter.com/dental-implants/`

### Hero / Slider

The file exposes slide text, button text, and slide image filenames through `aria-label`, but not direct background-image URLs inline.

1. Slide
   - Heading: `We Make Dentistry Affordable!`
   - Button: `CLICK HERE TO CHECK OUT OUR OFFICE PLAN`
   - Link: `/office-plan`
   - Background image filename: `homeBANNER_affordable2-1024x320.jpg`
2. Slide
   - Heading: `We Make Dentistry Enjoyable!`
   - Button: `CLICK HERE TO READ SOME OF OUR REVIEWS`
   - Link: `/reviews`
   - Background image filename: `homeBANNER_enjoyable2-1024x320.jpg`
3. Slide
   - Heading: `Personalized Care For All Your Dental Needs`
   - Button: `CLICK HERE FOR THE FULL LIST OF SERVICES WE HAVE TO OFFER`
   - Link: `/our-services/house-services`
   - Background image filename: `homeBANNER_personalizedcare2-1024x320.jpg`
4. Slide
   - Heading: `New Patients Welcome!`
   - Button: `CLICK HERE TO FIND OUT ABOUT OUR NEW PATIENT SPECIALS AND OFFERS`
   - Link: `/specials`
   - Background image filename: `homeBANNER_newpatients2-1024x320.jpg`

Visible slider controls/icons:

- Previous arrow: Elementor `eicon-chevron-left`
- Next arrow: Elementor `eicon-chevron-right`
- Pagination dots

### Main Content Section

- Heading:
  - `Welcome to Englewood Dental Center`
- Paragraph:
  - `At Englewood Dental Center, located in Englewood, CO, we are a group of general dentists and specialists (Endodontics, Pedodontics, Periodontics, and Oral Surgery). We provide comprehensive dental care and orthodontics to all of our patients and care for you as we would a member of our own family. We help you understand your oral health condition so you can make informed, knowledgeable decisions. And together, as a team, we will create a dental treatment plan that is best for you.`
- Image:
  - `https://englewooddentalcenter.com/wp-content/uploads/2020/09/Englewood-e1601328075366.jpg`

### Promotional Card / Banner Row

These are image-only linked promo banners in the source. Their visible text is baked into the images, not present as separate HTML text.

1. Promo banner
   - Link: `/specials`
   - Image: `https://englewooddentalcenter.com/wp-content/uploads/2022/01/HomeAd_New-Patient.png`
2. Promo banner
   - Link: `/specials`
   - Image: `https://englewooddentalcenter.com/wp-content/uploads/2019/12/homeBANNER_implantconsult.jpg`
3. Promo banner
   - Link: `/office-plan`
   - Image: `https://englewooddentalcenter.com/wp-content/uploads/2019/12/homeBANNER_ourofficeplan.jpg`

### Footer

- Section heading: `HOURS`
- Hours text:
  - `Monday: 7:00am - 7:00pm`
  - `Tuesday: 7:00am - 7:00pm`
  - `Wednesday: 7:00am - 7:00pm`
  - `Thursday: 7:00am - 7:00pm`
  - `Friday: 7:00am -6:00pm`
  - `Sat - Sun: Closed`
- Social link:
  - Facebook: `https://www.facebook.com/EnglewoodDentalCenter`
- Social icon:
  - Font Awesome `fab fa-facebook-f`
- Section heading: `LOCATION`
- Location/contact text:
  - `Englewood Dental Center`
  - `3401 S Broadway`
  - `Englewood, CO 80110`
  - `Phone 303-444-2884`
  - `Fax 303-904-9419`
- Embedded map iframe:
  - `https://maps.google.com/maps?q=3401%20S%20Broadway%20Unit%20160%2C%20Englewood%2C%20CO%2080110&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near`
- Copyright:
  - `Copyright (c) 2026 Englewood Dental Center`
- Site credit:
  - `Website Design & Hosting by Stealth Industries`
  - `https://stealth.industries`

### Hidden / Non-Visible Items In Source

These are present in `download.htm` but marked hidden or are framework UI rather than homepage content:

- Skip link: `Skip to content`
- Mobile search form
- Scroll-to-top button with `fa-angle-up`
- Two hidden header image links:
  - Patient registration image/link
  - Schedule appointment image/link

## 3. Actual Content vs WordPress / Elementor / Plugin Markup

### Actual website content to keep

- Logo
- Address, city, phone, fax
- Booking CTA
- Navigation labels and links
- Hero headings, CTA texts, and slide image filenames
- Welcome heading and paragraph
- Office photo
- Three promo banners and their links
- Hours
- Facebook link
- Map embed
- Copyright and site-credit text

### Framework / plugin-generated markup to strip away in a standalone rebuild

- WordPress shell:
  - `#outer-wrap`, `#wrap`
  - `body` classes such as `wp-*`, `page-*`, `oceanwp-*`, `elementor-*`
  - RSS/oEmbed/REST/shortlink metadata
  - emoji loader and global block styles
- OceanWP theme wrappers:
  - `#site-header-inner`, `#footer-inner`, `#footer-widgets`, `container`, `clr`
  - mobile dropdown/search wrappers
  - scroll-top control
- Elementor layout wrappers:
  - `elementor-section`
  - `elementor-container`
  - `elementor-column`
  - `elementor-widget-wrap`
  - `elementor-widget-container`
  - `data-elementor-*`
  - generated IDs such as `elementor-element-44c8bc6a`
- Plugin widget scaffolding:
  - Swiper wrapper markup for the slide widget
  - social icon widget wrappers
  - Google Maps widget wrappers
  - ECS mobile-menu/color-scheme/container-layout wrappers
- Analytics/SEO snippets:
  - Yoast SEO metadata and schema
  - Google tag manager snippet

## 4. External CSS and JS Dependencies

### Framework / theme / plugin CSS

- OceanWP theme
  - `oceanwp-style-css`
- OceanWP child theme
  - `child-style-css`
- Elementor core
  - `elementor-frontend-css`
  - `elementor-icons-css`
  - `widget-heading-css`
  - `widget-image-css`
  - `widget-icon-box-css`
  - `widget-social-icons-css`
  - `widget-google_maps-css`
  - `e-animation-fadeInUp-css`
  - `e-apple-webkit-css`
- Elementor Pro
  - `widget-slides-css`
  - `widget-nav-menu-css`
- Swiper slider library
  - `swiper-css`
  - `e-swiper-css`
- Ele Custom Skin plugin
  - `ecs-color-scheme-css`
  - `ecs-container-layout-css`
  - `ecs-mobile-menu-css`
  - `ecs-editorial-text-css`
  - `ecs-styles-css`
- Essential Addons for Elementor
  - `eael-general-css`
- Ocean Extra
  - `oe-widgets-style-css`
- Icon/font libraries
  - `font-awesome-css`
  - `simple-line-icons-css`
  - `elementor-icons-shared-0-css`
  - `elementor-icons-fa-solid-css`
  - `elementor-icons-fa-brands-css`

### Page / template / site-specific CSS

- Elementor generated template/page styles
  - `elementor-post-95-css` for header template
  - `elementor-post-98-css` for footer template
  - `elementor-post-2-css` for the homepage itself
  - `elementor-post-746-css` for the Elementor kit/global settings
  - `elementor-post-8946-css` additional generated template/style asset
- Site-specific custom CSS
  - inline `wp-custom-css`
  - inline OceanWP style settings block
- Locally hosted font CSS
  - `elementor-gf-local-roboto-css`
  - `elementor-gf-local-sourcesanspro-css`

### Framework / theme / plugin JS

- WordPress core libraries
  - `jquery-core-js`
  - `jquery-migrate-js`
  - `jquery-ui-core-js`
  - `imagesloaded-js`
  - `wp-hooks-js`
  - `wp-i18n-js`
  - emoji settings/loader
- OceanWP theme JS
  - `oceanwp-main-js`
  - `oceanwp-drop-down-mobile-menu-js`
  - `oceanwp-drop-down-search-js`
  - `ow-magnific-popup-js`
  - `oceanwp-lightbox-js`
  - `ow-flickity-js`
  - `oceanwp-slider-js`
  - `oceanwp-scroll-effect-js`
  - `oceanwp-scroll-top-js`
  - `oceanwp-select-js`
- Elementor core / Pro JS
  - `swiper-js`
  - `elementor-webpack-runtime-js`
  - `elementor-frontend-modules-js`
  - `elementor-frontend-js`
  - `smartmenus-js`
  - `elementor-pro-webpack-runtime-js`
  - `elementor-pro-frontend-js`
  - `pro-elements-handlers-js`
- Ele Custom Skin JS
  - `ecs-mobile-menu-js`
  - `ecs_ajax_load-js`
  - `ecs-script-js`
  - `ecs-color-switcher-js`
  - `ecs-slider-js`
- Essential Addons JS
  - `eael-general-js`

### Page / service-specific JS and non-framework external services

- Google Analytics / Google tag
  - `https://www.googletagmanager.com/gtag/js?id=G-MY8PQ533RH`
- NexHealth booking service
  - external booking URL
  - external button image hosted on Google Cloud Storage
- Google Maps
  - direct Google Maps link in header
  - embedded map iframe in footer

### What is likely unnecessary in a standalone rebuild

- Most WordPress, OceanWP, Elementor, ECS, and Essential Addons assets
- RSS/oEmbed/REST metadata
- schema and analytics snippets unless you intentionally re-add them
- mobile search and scroll-top scripts if you are not recreating those behaviors

### What you may want to replace manually later

- Dropdown navigation behavior
- Hero slider behavior
- Icon system
- Typography loading
- Map embed styling

## 5. Proposed Clean File Structure

```text
englewood-homepage-standalone/
├── analysis.md
├── index.html
├── style.css
├── script.js
└── assets/
    └── .gitkeep
```

Notes:

- `index.html` contains a clean semantic skeleton of the current homepage only.
- `style.css` is intentionally minimal and does not redesign the page.
- `script.js` is intentionally minimal and does not reimplement the slider yet.
- `assets/` is ready for locally downloaded copies of images/fonts later.

## 6. Clean HTML Skeleton Rules Used

- Preserved actual text and links from the downloaded file
- Preserved image URLs where the file explicitly contained them
- Preserved slider image filenames where the file exposed filenames but not direct URLs
- Removed WordPress, OceanWP, Elementor, and plugin wrapper markup
- Did not redesign, rewrite, or invent new content

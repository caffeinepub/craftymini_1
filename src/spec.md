# Specification

## Summary
**Goal:** Build a responsive single-page CraftyMini landing page that showcases crochet product categories and provides a clear Order Now/contact flow via email and Instagram.

**Planned changes:**
- Create a single-page layout with sections: Hero/intro, Browse Our Collection (5-category grid), Why Choose CraftyMini, Order Now (form), Contact Us, Footer.
- Implement a prominent “Order Now” button that scrolls/focuses to the order form.
- Build the order form with fields: Name, Phone Number, Address, Item Name/Design, Category (Baby Booties, Hair Crochet Clip, Crochet Bow, Crochet Purse, Custom), Size, Color, Quantity, Notes (optional), plus basic validation (required fields; quantity >= 1).
- On submit, generate a mailto to minicrafty63@gmail.com with a prefilled subject/body including all entered details; also show the email + generated message for manual copy/paste if mailto can’t open.
- Add a visible Instagram DM option/link displaying the handle exactly as provided: @minicrafty.co�.
- Apply a cohesive handmade/craft visual theme (consistent typography, spacing, buttons, cards) using a primary palette that is not blue/purple (except minor accents).
- Add and reference required static image assets from `frontend/public/assets/generated` with accessible alt text (logo, hero background, and 5 category placeholders).

**User-visible outcome:** Visitors can browse CraftyMini’s main crochet categories, read why to choose the brand, and place an order by filling a form that opens an email draft (or allows copy/paste), with an option to contact via Instagram DM.

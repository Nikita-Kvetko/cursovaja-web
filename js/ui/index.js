import { i18nInit } from "../lib/i18n.js";
import { themeInit } from "../lib/theme.js";
import { accessInit } from "../lib/accessibility.js";

import { renderHeader } from "./header.js";
import { renderFooter } from "./footer.js";
import { renderBenefits } from "./benefits.js";
import { renderCatalog } from "./catalog.js";
import { renderPopular } from "./popular.js";
import { renderCategories } from "./categories.js";
import { renderSales } from "./sales.js";
import { renderWorks } from "./works.js";
import { renderContacs } from "./contacs.js";
import { renderInsta } from "./insta.js";

i18nInit();
themeInit();
accessInit();

renderHeader(document.getElementById("site-header"));
renderFooter(document.getElementById("site-footer"));

renderBenefits(document.getElementById("site-benefits"));
renderCatalog(document.getElementById("site-catalog"));
renderPopular(document.getElementById("site-popular"));
renderCategories(document.getElementById("site-categories"));
renderSales(document.getElementById("site-sales"));
renderWorks(document.getElementById("site-works"));
renderContacs(document.getElementById("site-contacs"));
renderInsta(document.getElementById("site-insta"));

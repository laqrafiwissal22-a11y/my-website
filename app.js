"use strict";

const translations = {
  fr: {
    announcement: "Une sélection beauté, choisie avec attention au Maroc", askUs: "Une question ? Écrivez-nous", searchLabel: "Rechercher un produit", searchPlaceholder: "Rechercher un soin, un parfum…", search: "Rechercher", favorites: "Favoris", cart: "Panier", floatingCartHint: "Cliquez ou faites glisser pour déplacer le panier", navAll: "Tout le catalogue", catHair: "Cheveux", catSkin: "Visage & soins", catPerfume: "Parfums", catMakeup: "Maquillage", catAccessories: "Accessoires", help: "Aide & contact", heroEyebrow: "L’univers Enassime", heroTitle: "La beauté, dans chaque détail.", heroText: "Une sélection de soins et d’accessoires, choisie avec attention au Maroc.", explore: "Découvrir la sélection", whatsappHelp: "Parler sur WhatsApp", heroNote: "Prix et disponibilité confirmés avant votre commande", heroStickerTop: "Une sélection", heroStickerBottom: "pour vous", heroCaption: "Soins & beauté · Maroc", trustSelection: "Photos réelles des produits", trustPrices: "Prix affichés après vérification", trustSupport: "Conseil sur WhatsApp", trustDelivery: "Livraison au Maroc à confirmer", categoryEyebrow: "À votre rythme", categoryTitle: "Explorez nos univers", viewAll: "Voir tout le catalogue", catalogEyebrow: "La sélection Enassime", catalogTitle: "Les essentiels, pour vous", catalogLead: "Parcourez les produits photographiés dans notre collection.", filterCategory: "Catégorie", allCategories: "Toutes les catégories", filterMax: "Prix max.", sortBy: "Trier par", sortFeatured: "Notre sélection", sortPriceLow: "Prix croissant", sortPriceHigh: "Prix décroissant", sortName: "Nom A–Z", emptyTitle: "Aucun produit trouvé", emptyText: "Essayez une autre recherche ou catégorie.", clearFilters: "Effacer les filtres", priceNote: "Les prix, stocks et frais de livraison ne sont publiés qu’après confirmation. Contactez-nous pour connaître la disponibilité.", storyEyebrow: "النسيم · Enassime", storyTitle: "أناقتك في كل تفاصيلك", storyText: "Une boutique marocaine qui prend le temps de sélectionner, de répondre et de vous accompagner. Chaque photo de cette collection vient des produits reçus.", contactAdvisor: "Échanger avec notre équipe", faqEyebrow: "En toute confiance", faqTitle: "Vos questions, nos réponses", faqPriceQ: "Comment connaître le prix d’un produit ?", faqPriceA: "Nos prix sont en cours de vérification. Demandez-nous le prix et la disponibilité sur WhatsApp avant de commander.", faqDeliveryQ: "Quels sont les frais et délais de livraison ?", faqDeliveryA: "Les frais et délais dépendent de votre ville et du transporteur. Nous vous les confirmons avant toute validation de commande.", faqPaymentQ: "Quels moyens de paiement acceptez-vous ?", faqPaymentA: "Le paiement à la livraison sera proposé uniquement après confirmation des conditions du transporteur. Contactez-nous pour vérifier les options disponibles.", faqReturnQ: "Comment faire un retour ?", faqReturnA: "Contactez-nous avant tout retour afin de confirmer les modalités applicables à votre article et votre commande.", footerSlogan: "أناقتك في كل تفاصيلك", footerAbout: "Beauté, soins et petites attentions — sélectionnés au Maroc.", footerShop: "La boutique", footerFAQ: "Questions fréquentes", footerHelp: "Besoin d’aide ?", footerWhatsApp: "WhatsApp · réponse directe", footerPolicies: "Informations", footerDelivery: "Livraison & paiement", footerReturns: "Retours", footerPrivacy: "Confidentialité", footerAdmin: "Espace administrateur", footerCurrency: "Prix en dirhams marocains (DH), à confirmer avant achat.", policyDelivery: "Livraison disponible au Maroc, sous réserve de confirmation de votre ville, des frais, des délais et des conditions du transporteur. Le paiement à la livraison n’est proposé que si le transporteur le permet.", policyReturns: "Les conditions de retour et d’échange sont communiquées par notre service client avant la confirmation de votre commande. Contactez-nous à Enassimeshop@gmail.com ou au +212 707-256090.", policyPrivacy: "Les coordonnées fournies lors d’une demande de commande sont utilisées pour la traiter et vous contacter à son sujet. Elles sont conservées dans la base de données du commerçant. Pour une demande de suppression, écrivez à Enassimeshop@gmail.com.", yourSelection: "Votre sélection", cartPriceNotice: "Les prix sont à confirmer par notre équipe avant la commande.", requestOrder: "Demander une commande", askPrice: "Demander le prix", addToCart: "Ajouter au panier", guestCheckout: "Commande sans compte", checkoutTitle: "Où vous livrer ?", checkoutIntro: "Nous vous contacterons pour confirmer la disponibilité, les frais et le délai avant expédition.", formName: "Nom complet", formPhone: "Téléphone marocain", formCity: "Ville", formAddress: "Adresse de livraison", formNote: "Instructions (facultatif)", checkoutCOD: "Le paiement et la livraison seront confirmés avec vous avant validation.", confirmOrder: "Envoyer la demande de commande", adminEyebrow: "Gestion sécurisée", adminTitle: "Espace administrateur", adminIntro: "Connectez-vous avec le mot de passe configuré au lancement du serveur.", adminPassword: "Mot de passe administrateur", adminLogin: "Se connecter", adminLogout: "Déconnexion", adminProducts: "Produits", adminOrders: "Commandes", adminSettings: "Boutique", adminAddProduct: "Ajouter un produit", adminEdit: "Modifier", adminDelete: "Archiver", adminNewProduct: "Nouveau produit", adminSave: "Enregistrer le produit", adminCancel: "Annuler", adminProduct: "Produit", adminCategory: "Catégorie", adminPrice: "Prix de vente (DH)", adminReference: "Prix de référence vérifié (DH)", adminCost: "Coût d’achat (DH)", adminStock: "Stock", adminDescription: "Description", adminNameFr: "Nom en français", adminNameAr: "Nom en arabe", adminPhoto: "Photo", adminUpload: "Importer une photo", adminUploadNote: "JPEG, PNG ou WebP · 2 Mo maximum", adminActive: "Produit visible en boutique", adminMargin: "Marge brute indicative", adminNoPrice: "Prix à renseigner", adminMarginNote: "Calcul indicatif : prix de vente moins coût d’achat; hors transport, commissions et taxes.", adminNoOrders: "Aucune commande pour le moment.", adminNoProducts: "Aucun produit.", adminRevenue: "Chiffre livré", adminOrderCount: "Commandes livrées", adminActiveCount: "Produits actifs", adminLowStock: "Stocks bas", adminOrderStatus: "Statut", adminCustomer: "Client", adminSaveSettings: "Enregistrer les paramètres", adminShipping: "Frais de livraison (DH)", adminCod: "Activer le paiement à la livraison", adminHeroFr: "Titre d’accueil français", adminHeroAr: "Titre d’accueil arabe", adminHeroTextFr: "Texte d’accueil français", adminHeroTextAr: "Texte d’accueil arabe", adminSettingsNote: "Les frais et options de paiement ne sont affichés que lorsqu’ils sont configurés et confirmés avec le transporteur.", adminOrder: "Commande", adminStatusPending: "En attente", adminStatusConfirmed: "Confirmée", adminStatusShipped: "Expédiée", adminStatusDelivered: "Livrée", adminStatusCancelled: "Annulée", adminNoReference: "Sans prix de référence vérifié", loading: "Chargement…", pricePending: "Prix à confirmer", stockPending: "Disponibilité à confirmer", itemAdded: "Ajouté au panier", removedFavorite: "Retiré des favoris", addedFavorite: "Ajouté aux favoris", emptyCart: "Votre panier est encore vide.", emptyFavorites: "Vos favoris apparaîtront ici.", nothingToShow: "Aucun produit à afficher.", loginError: "Connexion impossible.", saveError: "Enregistrement impossible.", uploadError: "Import de photo impossible.", orderError: "Commande non enregistrée.", orderSuccess: "Demande enregistrée. Nous vous contacterons pour confirmer les détails.", orderUnavailable: "La commande en ligne n’est pas encore activée. Demandez-nous les détails sur WhatsApp.", copyLink: "Partager le produit", linkCopied: "Lien copié.", noStock: "Indisponible", stock: "En stock", deleteConfirm: "Archiver ce produit de la boutique ?", statusError: "Impossible de modifier le statut.", saved: "Modifications enregistrées.", whatsappProduct: "Bonjour, je souhaite connaître le prix et la disponibilité de : ", whatsappOrder: "Bonjour, je souhaite confirmer ma commande Enassime numéro ", detailCategory: "Catégorie", deliveryFees: "Livraison", noChargeShown: "À confirmer", currency: "DH", productDescFallback: "Photo réelle du produit fournie pour le catalogue. Le nom, le format et la composition sont à vérifier auprès de notre équipe.", priceMarketWarning: "Aucun prix de marché ni prix de référence n’est présumé.", clickForDetails: "Voir le produit", selectPhoto: "Sélectionner une photo du catalogue", noShippingConfigured: "Les frais de livraison ne sont pas encore configurés."
  },
  ar: {
    announcement: "اختيارات من الجمال والعناية بعناية في المغرب", askUs: "لديك سؤال؟ راسلنا", searchLabel: "ابحث عن منتج", searchPlaceholder: "ابحث عن العناية أو العطور…", search: "بحث", favorites: "المفضلة", cart: "السلة", floatingCartHint: "اضغط واسحب لتحريك السلة", navAll: "كل المنتجات", catHair: "الشعر", catSkin: "الوجه والعناية", catPerfume: "العطور", catMakeup: "المكياج", catAccessories: "الإكسسوارات", help: "المساعدة والتواصل", heroEyebrow: "عالم النسيم", heroTitle: "الجمال في كل التفاصيل", heroText: "اختيارات من العناية والجمال والإكسسوارات، بعناية في المغرب.", explore: "اكتشفوا التشكيلة", whatsappHelp: "تواصل عبر واتساب", heroNote: "يتم تأكيد السعر والتوفر قبل الطلب", heroStickerTop: "اختيارات", heroStickerBottom: "من أجلك", heroCaption: "العناية والجمال · المغرب", trustSelection: "صور حقيقية للمنتجات", trustPrices: "الأسعار بعد التحقق", trustSupport: "استشارة عبر واتساب", trustDelivery: "التوصيل بالمغرب بعد التأكيد", categoryEyebrow: "على راحتك", categoryTitle: "اكتشفوا أقسامنا", viewAll: "عرض كل المنتجات", catalogEyebrow: "اختيارات النسيم", catalogTitle: "اختيارات تناسبكم", catalogLead: "تصفحوا المنتجات المصورة في مجموعتنا.", filterCategory: "الفئة", allCategories: "كل الفئات", filterMax: "أقصى سعر", sortBy: "الترتيب", sortFeatured: "اختياراتنا", sortPriceLow: "السعر: من الأقل", sortPriceHigh: "السعر: من الأعلى", sortName: "الاسم أ–ي", emptyTitle: "لم يتم العثور على منتجات", emptyText: "جربوا بحثاً أو فئة أخرى.", clearFilters: "مسح عوامل التصفية", priceNote: "لا يتم نشر الأسعار والمخزون ورسوم التوصيل إلا بعد التأكد. تواصلوا معنا لمعرفة التوفر.", storyEyebrow: "النسيم · Enassime", storyTitle: "أناقتك في كل تفاصيلك", storyText: "متجر مغربي يخصص الوقت للاختيار والإجابة ومرافقتكم. الصور في هذه المجموعة للمنتجات التي توصلنا بها.", contactAdvisor: "تواصلوا مع فريقنا", faqEyebrow: "بكل ثقة", faqTitle: "أسئلتكم وإجاباتنا", faqPriceQ: "كيف أعرف سعر المنتج؟", faqPriceA: "أسعارنا قيد التحقق. اسألونا عن السعر والتوفر عبر واتساب قبل الطلب.", faqDeliveryQ: "ما هي رسوم ومدة التوصيل؟", faqDeliveryA: "تعتمد الرسوم والمدة على مدينتكم وشركة التوصيل. نؤكدها قبل تثبيت أي طلب.", faqPaymentQ: "ما هي طرق الدفع المتاحة؟", faqPaymentA: "يتاح الدفع عند الاستلام فقط بعد تأكيد شروط شركة التوصيل. تواصلوا معنا للتحقق من الخيارات.", faqReturnQ: "كيف يمكنني إرجاع المنتج؟", faqReturnA: "يرجى التواصل معنا قبل الإرجاع لتأكيد الشروط المتعلقة بمنتجكم وطلبكم.", footerSlogan: "أناقتك في كل تفاصيلك", footerAbout: "الجمال والعناية والاهتمام — اختيارات من المغرب.", footerShop: "المتجر", footerFAQ: "الأسئلة الشائعة", footerHelp: "هل تحتاجون إلى مساعدة؟", footerWhatsApp: "واتساب · تواصل مباشر", footerPolicies: "معلومات", footerDelivery: "التوصيل والدفع", footerReturns: "الإرجاع", footerPrivacy: "الخصوصية", footerAdmin: "إدارة المتجر", footerCurrency: "الأسعار بالدرهم المغربي (DH)، وتؤكد قبل الشراء.", policyDelivery: "التوصيل متاح في المغرب بعد تأكيد المدينة والرسوم والمدة وشروط شركة التوصيل. لا يتاح الدفع عند الاستلام إلا إذا سمحت به الشركة.", policyReturns: "يبلغكم فريق خدمة العملاء بشروط الإرجاع والاستبدال قبل تأكيد طلبكم. تواصلوا معنا على Enassimeshop@gmail.com أو +212 707-256090.", policyPrivacy: "تستخدم بيانات التواصل المقدمة عند طلب الشراء لمعالجة الطلب والتواصل بشأنه، وتحفظ في قاعدة بيانات التاجر. لطلب الحذف، راسلوا Enassimeshop@gmail.com.", yourSelection: "اختياراتكم", cartPriceNotice: "يؤكد فريقنا الأسعار قبل الطلب.", requestOrder: "طلب الشراء", askPrice: "اسأل عن السعر", addToCart: "أضف إلى السلة", guestCheckout: "الطلب دون حساب", checkoutTitle: "أين نوصّل طلبكم؟", checkoutIntro: "سنتواصل معكم لتأكيد التوفر والرسوم والمدة قبل الشحن.", formName: "الاسم الكامل", formPhone: "رقم هاتف مغربي", formCity: "المدينة", formAddress: "عنوان التوصيل", formNote: "تعليمات (اختياري)", checkoutCOD: "سيتم تأكيد الدفع والتوصيل معكم قبل اعتماد الطلب.", confirmOrder: "إرسال طلب الشراء", adminEyebrow: "إدارة آمنة", adminTitle: "إدارة المتجر", adminIntro: "سجلوا الدخول بكلمة المرور التي تم إعدادها عند تشغيل الخادم.", adminPassword: "كلمة مرور الإدارة", adminLogin: "تسجيل الدخول", adminLogout: "تسجيل الخروج", adminProducts: "المنتجات", adminOrders: "الطلبات", adminSettings: "المتجر", adminAddProduct: "إضافة منتج", adminEdit: "تعديل", adminDelete: "أرشفة", adminNewProduct: "منتج جديد", adminSave: "حفظ المنتج", adminCancel: "إلغاء", adminProduct: "المنتج", adminCategory: "الفئة", adminPrice: "سعر البيع (درهم)", adminReference: "السعر المرجعي المؤكد (درهم)", adminCost: "تكلفة الشراء (درهم)", adminStock: "المخزون", adminDescription: "الوصف", adminNameFr: "الاسم بالفرنسية", adminNameAr: "الاسم بالعربية", adminPhoto: "الصورة", adminUpload: "رفع صورة", adminUploadNote: "JPEG أو PNG أو WebP · 2 ميغابايت كحد أقصى", adminActive: "عرض المنتج في المتجر", adminMargin: "هامش إجمالي تقريبي", adminNoPrice: "يلزم إدخال السعر", adminMarginNote: "حساب تقريبي: سعر البيع ناقص تكلفة الشراء؛ دون التوصيل والعمولات والضرائب.", adminNoOrders: "لا توجد طلبات حالياً.", adminNoProducts: "لا توجد منتجات.", adminRevenue: "إيرادات الطلبات المسلمة", adminOrderCount: "الطلبات المسلمة", adminActiveCount: "المنتجات النشطة", adminLowStock: "مخزون منخفض", adminOrderStatus: "الحالة", adminCustomer: "العميل", adminSaveSettings: "حفظ الإعدادات", adminShipping: "رسوم التوصيل (درهم)", adminCod: "تفعيل الدفع عند الاستلام", adminHeroFr: "عنوان الصفحة بالفرنسية", adminHeroAr: "عنوان الصفحة بالعربية", adminHeroTextFr: "نص الصفحة بالفرنسية", adminHeroTextAr: "نص الصفحة بالعربية", adminSettingsNote: "لا تظهر رسوم التوصيل وطرق الدفع إلا بعد إعدادها وتأكيدها مع شركة التوصيل.", adminOrder: "الطلب", adminStatusPending: "قيد الانتظار", adminStatusConfirmed: "مؤكد", adminStatusShipped: "تم الشحن", adminStatusDelivered: "تم التسليم", adminStatusCancelled: "ملغى", adminNoReference: "لا يوجد سعر مرجعي موثق", loading: "جار التحميل…", pricePending: "السعر قيد التأكيد", stockPending: "التوفر قيد التأكيد", itemAdded: "أضيف إلى السلة", removedFavorite: "أزيل من المفضلة", addedFavorite: "أضيف إلى المفضلة", emptyCart: "سلتكم فارغة حالياً.", emptyFavorites: "ستظهر المنتجات المفضلة هنا.", nothingToShow: "لا توجد منتجات للعرض.", loginError: "تعذر تسجيل الدخول.", saveError: "تعذر الحفظ.", uploadError: "تعذر رفع الصورة.", orderError: "لم يتم تسجيل الطلب.", orderSuccess: "تم تسجيل الطلب. سنتواصل معكم لتأكيد التفاصيل.", orderUnavailable: "الطلب عبر الموقع غير مفعل حالياً. اسألونا عن التفاصيل عبر واتساب.", copyLink: "مشاركة المنتج", linkCopied: "تم نسخ الرابط.", noStock: "غير متوفر", stock: "متوفر", deleteConfirm: "أرشفة هذا المنتج من المتجر؟", statusError: "تعذر تحديث الحالة.", saved: "تم حفظ التغييرات.", whatsappProduct: "السلام عليكم، أود معرفة السعر والتوفر للمنتج: ", whatsappOrder: "السلام عليكم، أود تأكيد طلب النسيم رقم ", detailCategory: "الفئة", deliveryFees: "التوصيل", noChargeShown: "بعد التأكيد", currency: "درهم", productDescFallback: "صورة حقيقية للمنتج أضيفت إلى الكتالوج. يرجى تأكيد الاسم والحجم والمكونات مع فريقنا.", priceMarketWarning: "لا نفترض أي سعر للسوق أو سعر مرجعي.", clickForDetails: "عرض المنتج", selectPhoto: "اختيار صورة من الكتالوج", noShippingConfigured: "لم يتم إعداد رسوم التوصيل بعد."
  }
};
Object.assign(translations.fr, {
  footerTerms: "Conditions de vente",
  policyTerms: "Les prix et la disponibilité sont confirmés avant toute validation. La commande en ligne est disponible uniquement lorsque les frais de livraison et le paiement à la livraison ont été convenus avec le transporteur. Les modalités de livraison et de retour sont confirmées par notre service client avant expédition. Ces informations doivent être complétées et vérifiées par le commerçant avant l’ouverture des ventes.",
  announcement: "جمالك يبدأ من التفاصيل ... اختيارات النسيم بانتظارك",
  heroEyebrow: "النسيم · أناقة مغربية",
  heroTitle: "النسيم ... أناقتك في كل تفاصيلك",
  heroText: "اكتشفوا عطوراً ومنتجات للعناية والجمال، اختيرت لكم بعناية في المغرب.",
  explore: "تسوقوا الآن",
  whatsappHelp: "تواصلوا معنا",
  heroNote: "السعر والتوفر يؤكدان قبل الطلب",
  heroStickerTop: "اختيارات النسيم",
  heroStickerBottom: "لكِ",
  heroCaption: "أناقة في كل التفاصيل",
  trustSelection: "صور المنتجات المتوفرة",
  trustPrices: "تأكيد السعر قبل الطلب",
  trustSupport: "خدمة العملاء عبر واتساب",
  trustDelivery: "التوصيل حسب المدينة",
  categoryEyebrow: "اختاروا ما يناسبكم",
  categoryTitle: "تسوقوا حسب الفئة",
  viewAll: "جميع الفئات",
  catalogEyebrow: "مختارة لكم",
  catalogTitle: "اختيارات النسيم",
  catalogLead: "اكتشفوا منتجات الجمال والعناية والإكسسوارات.",
  footerAbout: "عطور وجمال وإكسسوارات ... اختياراتكم بلمسة من الأناقة المغربية.",
  storyText: "في النسيم، نهتم بالتفاصيل. اكتشفوا اختيارات من العطور والجمال والإكسسوارات، وتواصلوا معنا قبل تأكيد طلبكم."
});
Object.assign(translations.ar, {
  announcement: "جمالك يبدأ من التفاصيل ... اختيارات النسيم بانتظارك",
  heroEyebrow: "النسيم · أناقة مغربية",
  heroTitle: "النسيم ... أناقتك في كل تفاصيلك",
  heroText: "اكتشفوا عطوراً ومنتجات للعناية والجمال، اختيرت لكم بعناية في المغرب.",
  explore: "تسوقوا الآن",
  whatsappHelp: "تواصلوا معنا",
  heroNote: "السعر والتوفر يؤكدان قبل الطلب",
  heroStickerTop: "اختيارات النسيم",
  heroStickerBottom: "لكِ",
  heroCaption: "أناقة في كل التفاصيل",
  trustSelection: "صور المنتجات المتوفرة",
  trustPrices: "تأكيد السعر قبل الطلب",
  trustSupport: "خدمة العملاء عبر واتساب",
  trustDelivery: "التوصيل حسب المدينة",
  categoryEyebrow: "اختاروا ما يناسبكم",
  categoryTitle: "تسوقوا حسب الفئة",
  viewAll: "جميع الفئات",
  catalogEyebrow: "مختارة لكم",
  catalogTitle: "اختيارات النسيم",
  catalogLead: "اكتشفوا منتجات الجمال والعناية والإكسسوارات.",
  footerAbout: "عطور وجمال وإكسسوارات ... اختياراتكم بلمسة من الأناقة المغربية.",
  storyText: "في النسيم، نهتم بالتفاصيل. اكتشفوا اختيارات من العطور والجمال والإكسسوارات، وتواصلوا معنا قبل تأكيد طلبكم."
});
Object.assign(translations.ar, {
  footerTerms: "شروط البيع",
  policyTerms: "يتم تأكيد الأسعار والتوفر قبل اعتماد الطلب. لا يتاح الطلب عبر الموقع إلا بعد الاتفاق مع شركة التوصيل على الرسوم والدفع عند الاستلام. يؤكد فريق خدمة العملاء شروط التوصيل والإرجاع قبل الشحن. على التاجر استكمال هذه المعلومات والتحقق منها قبل بدء البيع."
});

const categoryLabels = {
  "Soin du visage": { fr: "Soin du visage", ar: "العناية بالوجه" },
  "Soin du corps": { fr: "Soin du corps", ar: "العناية بالجسم" },
  "Cheveux": { fr: "Cheveux", ar: "الشعر" },
  "Parfums": { fr: "Parfums", ar: "العطور" },
  "Maquillage": { fr: "Maquillage", ar: "المكياج" },
  "Accessoires beauté": { fr: "Accessoires beauté", ar: "إكسسوارات الجمال" },
  "Accessoires": { fr: "Accessoires", ar: "الإكسسوارات" }
};
const categoryIcons = {
  "Soin du visage": '<path d="M7 6h10l-1 14H8L7 6Z"/><path d="M10 6V4a2 2 0 0 1 4 0v2M10 11h4M10 14h4"/>',
  "Soin du corps": '<path d="M9 5h6v3l3 2v10H6V10l3-2V5Z"/><path d="M10 5V3h4v2M9 13h6"/>',
  "Cheveux": '<path d="M7 5c2-2 8-2 10 0M6 9c3-2 9-2 12 0M6 13c3-2 9-2 12 0M7 17c2-2 8-2 10 0M9 21c1-1 5-1 6 0"/>',
  "Parfums": '<path d="M10 4h4v3h-4zM8 7h8l2 3v10H6V10l2-3Z"/><path d="M10 13h4M11 16h2"/>',
  "Maquillage": '<path d="m8 4 8 3-5 13-4-1L8 4Z"/><path d="m9 8 6 2M17 7l2-3"/>',
  "Accessoires beauté": '<path d="m12 3 3 6 7 1-5 5 1 6-6-3-6 3 1-6-5-5 7-1 3-6Z"/>',
  "Accessoires": '<path d="M8 12a4 4 0 1 1 8 0c0 3-4 7-4 7s-4-4-4-7Z"/><circle cx="12" cy="12" r="1.5"/>'
};
const storePhone = "212707256090";
const sumLabels = { fr: { subtotal: "Sous-total produits", shipping: "Livraison", total: "Total estimé" }, ar: { subtotal: "المجموع الفرعي", shipping: "التوصيل", total: "المجموع التقديري" } };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
let language = localStorage.getItem("enassime-language") === "fr" ? "fr" : "ar";
let products = [];
let store = { shipping_fee: "", cod_enabled: "false" };
let cart = readStorage("enassime-cart", []);
let favorites = readStorage("enassime-favorites", []);
let adminCsrf = "";
let toastTimer;

function readStorage(key, fallback) {
  try { const result = JSON.parse(localStorage.getItem(key) || "null"); return result ?? fallback; }
  catch { return fallback; }
}
function t(key) { return translations[language][key] || translations.fr[key] || key; }
function localizedName(product) { return language === "ar" ? (product.name_ar || product.name_fr) : product.name_fr; }
function localizedCategory(category) { return categoryLabels[category]?.[language] || category; }
function money(amount) {
  if (amount === null || amount === undefined || amount === "") return "";
  return new Intl.NumberFormat(language === "ar" ? "ar-MA" : "fr-MA", { maximumFractionDigits: 2 }).format(Number(amount)) + " " + t("currency");
}
function saveStorage(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function waLink(message) { return "https://wa.me/" + storePhone + "?text=" + encodeURIComponent(message); }
function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.remove("hidden");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.add("hidden"), 3200);
}
async function api(url, options = {}) {
  const headers = new Headers(options.headers || {});
  if (options.body && !(options.body instanceof FormData)) headers.set("Content-Type", "application/json");
  if (adminCsrf && ["POST", "PUT", "DELETE"].includes((options.method || "GET").toUpperCase()) && url.startsWith("/api/admin/")) headers.set("X-CSRF-Token", adminCsrf);
  const response = await fetch(url, { ...options, headers, credentials: "same-origin" });
  const contentType = response.headers.get("content-type") || "";
  const result = contentType.includes("application/json") ? await response.json() : null;
  if (!response.ok) throw new Error(result?.error || `HTTP ${response.status}`);
  return result;
}
function setLanguage(next) {
  language = next;
  localStorage.setItem("enassime-language", language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(node => { const key = node.dataset.i18n; if (translations[language][key]) node.textContent = t(key); });
  $$("[data-i18n-placeholder]").forEach(node => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  $("#language-toggle").textContent = language === "fr" ? "العربية" : "Français";
  $("#search-form button").setAttribute("aria-label", t("search"));
  $("#floating-cart").setAttribute("aria-label", t("cart"));
  $("#floating-cart").title = t("floatingCartHint");
  $("#floating-cart-hint").textContent = t("floatingCartHint");
  $("#current-year").textContent = new Date().getFullYear();
  renderCategories(); renderProducts(); renderCart(); renderFavorites();
  updateHero();
  if (location.pathname.startsWith("/product/") && products.length) renderProductPage();
  if ($("#admin-panel").classList.contains("hidden") === false) renderAdmin();
}
function updateHero() {
  const title = store["hero_title_" + language];
  const text = store["hero_text_" + language];
  if (title) $("#hero-title").textContent = title;
  if (text) $("#hero-text").textContent = text;
}
async function loadStore() {
  try { store = { ...store, ...await api("/api/store") }; }
  catch (error) { console.error("Could not load store settings:", error); }
  updateHero();
}
async function loadProducts() {
  try {
    products = await api("/api/products");
    renderCategories(); renderProducts();
  } catch (error) {
    console.error("Could not load products:", error);
    $("#product-grid").innerHTML = `<p class="empty-state">${escapeHTML(t("nothingToShow"))}</p>`;
  }
}
function renderCategories() {
  const present = [...new Set(products.map(product => product.category))];
  const select = $("#category-filter");
  const selected = select.value;
  select.innerHTML = `<option value="">${escapeHTML(t("allCategories"))}</option>` + present.map(category => `<option value="${escapeHTML(category)}">${escapeHTML(localizedCategory(category))}</option>`).join("");
  select.value = present.includes(selected) ? selected : "";
  const featured = ["Soin du visage", "Cheveux", "Parfums", "Maquillage", "Accessoires beauté", "Soin du corps", "Accessoires"].filter(category => present.includes(category));
  $("#category-list").innerHTML = featured.map((category, index) => {
    const icon = categoryIcons[category] || categoryIcons.Accessoires;
    return `<button class="category-card" type="button" data-category="${escapeHTML(category)}"><span class="category-photo"><svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg></span><span>${escapeHTML(localizedCategory(category))}<i aria-hidden="true">↗</i></span></button>`;
  }).join("");
  $$("#category-list .category-card").forEach(button => button.addEventListener("click", () => {
    $("#category-filter").value = button.dataset.category; renderProducts(); $("#catalogue").scrollIntoView({ behavior: "smooth" });
  }));
  $("#product-count").textContent = language === "ar" ? `${products.length} منتج` : `${products.length} produits`;
}
function visibleProducts() {
  const query = $("#search-input").value.trim().toLocaleLowerCase(language === "ar" ? "ar" : "fr");
  const category = $("#category-filter").value;
  const max = Number($("#price-filter").value);
  let list = products.filter(product => {
    const searchable = [product.name_fr, product.name_ar, product.category, product.description].join(" ").toLocaleLowerCase();
    return (!query || searchable.includes(query)) && (!category || product.category === category) && (!max || (product.price !== null && Number(product.price) <= max));
  });
  const sort = $("#sort-select").value;
  if (sort === "name") list.sort((a, b) => localizedName(a).localeCompare(localizedName(b), language));
  if (sort === "price-low") list.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  if (sort === "price-high") list.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
  return list;
}
function productPrice(product) {
  if (product.price === null || product.price === undefined) return `<span>${escapeHTML(t("pricePending"))}</span>`;
  const original = product.reference_price !== null && product.reference_price > product.price
    ? ` <span class="old-price">${escapeHTML(money(product.reference_price))}</span> <span class="discount-badge">−${Math.round((1 - product.price / product.reference_price) * 100)}%</span>` : "";
  return `<span class="price-value">${escapeHTML(money(product.price))}</span>${original}`;
}
function isPurchasable(product) { return product.price !== null && Number(product.price) > 0 && Number(product.stock) > 0; }
function renderProducts() {
  const list = visibleProducts();
  $("#product-grid").innerHTML = list.map(product => {
    const favorite = favorites.includes(product.id);
    const available = isPurchasable(product);
    return `<article class="product-card">
      <a class="product-photo" href="/product/${encodeURIComponent(product.slug)}" aria-label="${escapeHTML(t("clickForDetails"))}: ${escapeHTML(localizedName(product))}">
        <img src="${escapeHTML(product.image)}" alt="${escapeHTML(localizedName(product))}" loading="lazy">
        <span class="product-category">${escapeHTML(localizedCategory(product.category))}</span>
      </a>
      <button class="favorite-toggle ${favorite ? "active" : ""}" type="button" data-favorite="${product.id}" aria-label="${escapeHTML(t("favorites"))}" aria-pressed="${favorite}">${favorite ? "♥" : "♡"}</button>
      <div class="product-info"><span class="product-category-label">${escapeHTML(localizedCategory(product.category))}</span><h3>${escapeHTML(localizedName(product))}</h3>
        <p class="price-state">${productPrice(product)}</p>
        <button class="product-buy ${available ? "available" : ""}" type="button" data-buy="${product.id}">${escapeHTML(available ? t("addToCart") : t("askPrice"))}</button>
      </div>
    </article>`;
  }).join("");
  $("#product-count").textContent = language === "ar" ? `${list.length} منتج` : `${list.length} produit${list.length === 1 ? "" : "s"}`;
  $("#empty-state").classList.toggle("hidden", list.length > 0);
  $("#product-grid").classList.toggle("hidden", list.length === 0);
  $$("#product-grid [data-favorite]").forEach(button => button.addEventListener("click", () => toggleFavorite(Number(button.dataset.favorite))));
  $$("#product-grid [data-buy]").forEach(button => button.addEventListener("click", () => buyProduct(Number(button.dataset.buy))));
}
function toggleFavorite(id) {
  if (favorites.includes(id)) { favorites = favorites.filter(item => item !== id); showToast(t("removedFavorite")); }
  else { favorites = [...favorites, id]; showToast(t("addedFavorite")); }
  saveStorage("enassime-favorites", favorites); renderProducts(); renderFavorites();
}
function findProduct(id) { return products.find(product => product.id === id); }
function buyProduct(id) {
  const product = findProduct(id);
  if (!product) return;
  if (!isPurchasable(product)) {
    window.open(waLink(t("whatsappProduct") + localizedName(product)), "_blank", "noopener,noreferrer");
    return;
  }
  const current = cart.find(item => item.id === id);
  if (current) current.quantity = Math.min(Number(product.stock), current.quantity + 1);
  else cart.push({ id, quantity: 1 });
  saveStorage("enassime-cart", cart); renderCart(); renderProducts(); showToast(t("itemAdded"));
}
function priceOrPending(product) { return product.price === null ? t("pricePending") : money(product.price); }
function openProduct(id) {
  const product = findProduct(id);
  if (!product) return;
  const description = product.description?.trim() || t("productDescFallback");
  $("#product-detail").innerHTML = `<div class="product-detail-layout">
    <div class="product-detail-image"><img src="${escapeHTML(product.image)}" alt="${escapeHTML(localizedName(product))}"></div>
    <div class="product-detail-copy"><span class="eyebrow">${escapeHTML(localizedCategory(product.category))}</span><h2>${escapeHTML(localizedName(product))}</h2>
      <p>${escapeHTML(description)}</p><p class="detail-price">${escapeHTML(productPrice(product))}</p>
      <p>${escapeHTML(t("stockPending"))}</p>
      <button class="button button-dark" data-detail-buy="${product.id}">${escapeHTML(isPurchasable(product) ? t("addToCart") : t("askPrice"))}</button>
      <button class="button button-outline" id="share-product">${escapeHTML(t("copyLink"))}</button>
    </div></div>`;
  $("#product-modal").showModal();
  $("#product-detail [data-detail-buy]").addEventListener("click", () => { buyProduct(id); if (isPurchasable(product)) $("#product-modal").close(); });
  $("#share-product").addEventListener("click", async () => {
    const url = new URL(location.href); url.hash = "produit-" + encodeURIComponent(product.slug);
    try { await navigator.clipboard.writeText(url.toString()); showToast(t("linkCopied")); }
    catch { window.prompt(t("copyLink"), url.toString()); }
  });
}
function renderProductPage() {
  const slug = decodeURIComponent(location.pathname.replace(/^\/product\//, ""));
  const product = products.find(item => item.slug === slug);
  if (!product) return false;
  document.body.classList.add("product-mode");
  const page = $("#product-page");
  page.classList.remove("hidden");
  const similar = products.filter(item => item.id !== product.id && item.category === product.category).slice(0, 4);
  const description = product.description?.trim() || t("productDescFallback");
  const gallery = product.images?.length ? product.images : [product.image];
  page.innerHTML = `<div class="section-wrap">
    <nav class="breadcrumbs" aria-label="${language === "ar" ? "مسار التنقل" : "Fil d’Ariane"}"><a href="/">${escapeHTML(language === "ar" ? "الرئيسية" : "Accueil")}</a><span>›</span><a href="/#catalogue">${escapeHTML(localizedCategory(product.category))}</a><span>›</span><span>${escapeHTML(localizedName(product))}</span></nav>
    <div class="product-page-main">
      <div><div class="product-page-image"><img id="product-gallery-main" src="${escapeHTML(product.image)}" alt="${escapeHTML(localizedName(product))}"></div>${gallery.length > 1 ? `<div class="product-gallery-thumbs">${gallery.map((image, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-gallery-image="${escapeHTML(image)}" aria-label="${escapeHTML(language === "ar" ? `الصورة ${index + 1}` : `Photo ${index + 1}`)}"><img src="${escapeHTML(image)}" alt="" loading="lazy"></button>`).join("")}</div>` : ""}</div>
      <div class="product-page-copy"><span class="eyebrow">${escapeHTML(localizedCategory(product.category))}</span><h1>${escapeHTML(localizedName(product))}</h1>
        <p class="product-page-description">${escapeHTML(description)}</p>
        <p class="product-page-price">${escapeHTML(productPrice(product))}</p>
        <p class="product-page-note">${escapeHTML(t("priceMarketWarning"))}</p>
        <div class="product-page-actions"><button class="button button-dark" id="product-page-buy">${escapeHTML(isPurchasable(product) ? t("addToCart") : t("askPrice"))}</button><button class="button button-outline" id="product-page-favorite">${favorites.includes(product.id) ? "♥" : "♡"} ${escapeHTML(t("favorites"))}</button></div>
        <div class="product-page-reassurance"><span>◇</span>${escapeHTML(t("priceNote"))}</div>
        <a class="text-link product-whatsapp" href="${escapeHTML(waLink(t("whatsappProduct") + localizedName(product)))}" target="_blank" rel="noopener">${escapeHTML(t("whatsappHelp"))} ↗</a>
      </div>
    </div>
    ${similar.length ? `<section class="similar-products"><div class="section-heading"><div><span class="eyebrow">${escapeHTML(localizedCategory(product.category))}</span><h2>${escapeHTML(language === "ar" ? "منتجات مشابهة" : "Dans le même univers")}</h2></div></div><div class="product-grid">${similar.map(item => `<article class="product-card"><a class="product-photo" href="/product/${encodeURIComponent(item.slug)}"><img src="${escapeHTML(item.image)}" alt="${escapeHTML(localizedName(item))}" loading="lazy"></a><div class="product-info"><h3>${escapeHTML(localizedName(item))}</h3><p class="price-state">${productPrice(item)}</p><a class="product-buy" href="/product/${encodeURIComponent(item.slug)}">${escapeHTML(t("clickForDetails"))}</a></div></article>`).join("")}</div></section>` : ""}
  </div>`;
  const title = `${localizedName(product)} | Enassime Shop`;
  document.title = title;
  $('meta[name="description"]').content = `${localizedName(product)} — ${localizedCategory(product.category)}. ${description}`;
  $('meta[property="og:title"]').content = title;
  $('meta[property="og:description"]').content = description;
  $('meta[property="og:image"]').content = new URL(product.image, location.origin).href;
  $('meta[property="og:type"]').content = "product";
  $('link[rel="canonical"]').href = location.href.split("#")[0];
  if (product.price !== null && Number(product.stock) > 0) {
    let structured = $("#product-jsonld");
    if (!structured) { structured = document.createElement("script"); structured.id = "product-jsonld"; structured.type = "application/ld+json"; document.head.append(structured); }
    structured.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: localizedName(product), description, category: localizedCategory(product.category), image: gallery.map(image => new URL(image, location.origin).href), offers: { "@type": "Offer", priceCurrency: "MAD", price: Number(product.price).toFixed(2), availability: "https://schema.org/InStock", url: location.href } });
  }
  $$("[data-gallery-image]", page).forEach(button => button.addEventListener("click", () => {
    $("#product-gallery-main").src = button.dataset.galleryImage;
    $$("[data-gallery-image]", page).forEach(thumb => thumb.classList.toggle("active", thumb === button));
  }));
  $("#product-page-buy").addEventListener("click", () => {
    if (!isPurchasable(product)) { window.open(waLink(t("whatsappProduct") + localizedName(product)), "_blank", "noopener,noreferrer"); return; }
    buyProduct(product.id); openDrawer("cart-drawer");
  });
  $("#product-page-favorite").addEventListener("click", () => { toggleFavorite(product.id); renderProductPage(); });
  return true;
}
function renderCart() {
  cart = cart.filter(item => findProduct(item.id));
  const count = cart.reduce((total, item) => total + Number(item.quantity || 0), 0);
  $("#cart-count").textContent = count;
  $("#floating-cart-count").textContent = count > 99 ? "99+" : count;
  if (!cart.length) {
    $("#cart-content").innerHTML = `<div class="drawer-empty"><div><span>◇</span><p>${escapeHTML(t("emptyCart"))}</p></div></div>`;
    $("#cart-foot").classList.add("hidden");
    return;
  }
  $("#cart-content").innerHTML = cart.map(item => {
    const product = findProduct(item.id);
    return `<div class="cart-item"><img src="${escapeHTML(product.image)}" alt=""><div><h3>${escapeHTML(localizedName(product))}</h3><p>${escapeHTML(priceOrPending(product))}</p><div class="cart-qty"><button data-qty="${product.id}" data-change="-1" aria-label="−">−</button><span>${item.quantity}</span><button data-qty="${product.id}" data-change="1" aria-label="+">+</button></div></div><button data-remove="${product.id}" aria-label="×">×</button></div>`;
  }).join("");
  $("#cart-foot").classList.remove("hidden");
  const ready = cart.every(item => isPurchasable(findProduct(item.id)));
  const subtotal = cart.reduce((total, item) => total + Number(findProduct(item.id).price || 0) * item.quantity, 0);
  $("#cart-totals").innerHTML = ready && store.cod_enabled === "true"
    ? `<div class="checkout-row"><span>${escapeHTML(sumLabels[language].subtotal)}</span><strong>${escapeHTML(money(subtotal))}</strong></div><div class="checkout-row"><span>${escapeHTML(sumLabels[language].shipping)}</span><strong>${escapeHTML(money(store.shipping_fee))}</strong></div><div class="checkout-row checkout-row-total"><span>${escapeHTML(sumLabels[language].total)}</span><strong>${escapeHTML(money(subtotal + Number(store.shipping_fee)))}</strong></div>`
    : "";
  $("#checkout-open").textContent = ready ? t("requestOrder") : t("cartPriceNotice");
  $("#checkout-open").disabled = !ready;
  $("#checkout-open").classList.toggle("button-dark", ready);
  $("#checkout-open").classList.toggle("button-outline", !ready);
  $$("#cart-content [data-qty]").forEach(button => button.addEventListener("click", () => {
    const item = cart.find(row => row.id === Number(button.dataset.qty));
    const product = findProduct(item.id);
    item.quantity = Math.min(Number(product.stock) || 20, item.quantity + Number(button.dataset.change));
    if (item.quantity < 1) cart = cart.filter(row => row.id !== item.id);
    saveStorage("enassime-cart", cart); renderCart();
  }));
  $$("#cart-content [data-remove]").forEach(button => button.addEventListener("click", () => {
    cart = cart.filter(item => item.id !== Number(button.dataset.remove)); saveStorage("enassime-cart", cart); renderCart();
  }));
  saveStorage("enassime-cart", cart);
}
function setFloatingCartPosition(left, top, persist = false) {
  const button = $("#floating-cart");
  const margin = 8;
  const maxLeft = Math.max(margin, window.innerWidth - button.offsetWidth - margin);
  const maxTop = Math.max(margin, window.innerHeight - button.offsetHeight - margin);
  const position = {
    left: Math.min(Math.max(margin, left), maxLeft),
    top: Math.min(Math.max(margin, top), maxTop)
  };
  button.style.left = `${position.left}px`;
  button.style.top = `${position.top}px`;
  button.style.right = "auto";
  button.style.bottom = "auto";
  if (persist) saveStorage("enassime-floating-cart-position", position);
}
function initFloatingCart() {
  const button = $("#floating-cart");
  const savedPosition = readStorage("enassime-floating-cart-position", null);
  if (savedPosition && Number.isFinite(savedPosition.left) && Number.isFinite(savedPosition.top)) {
    setFloatingCartPosition(savedPosition.left, savedPosition.top);
  }
  let pointer = null;
  let suppressClickUntil = 0;
  button.addEventListener("pointerdown", event => {
    if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
    const rect = button.getBoundingClientRect();
    pointer = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top,
      dragging: false
    };
    button.setPointerCapture(event.pointerId);
  });
  button.addEventListener("pointermove", event => {
    if (!pointer || event.pointerId !== pointer.id) return;
    const deltaX = event.clientX - pointer.startX;
    const deltaY = event.clientY - pointer.startY;
    if (!pointer.dragging && Math.hypot(deltaX, deltaY) > 5) {
      pointer.dragging = true;
      button.classList.add("is-dragging");
    }
    if (pointer.dragging) {
      event.preventDefault();
      setFloatingCartPosition(pointer.left + deltaX, pointer.top + deltaY);
    }
  });
  const finishPointer = event => {
    if (!pointer || event.pointerId !== pointer.id) return;
    if (pointer.dragging) {
      const rect = button.getBoundingClientRect();
      setFloatingCartPosition(rect.left, rect.top, true);
      suppressClickUntil = Date.now() + 250;
    }
    button.classList.remove("is-dragging");
    pointer = null;
  };
  button.addEventListener("pointerup", finishPointer);
  button.addEventListener("pointercancel", finishPointer);
  button.addEventListener("click", event => {
    if (Date.now() < suppressClickUntil) {
      event.preventDefault();
      return;
    }
    openDrawer("cart-drawer");
  });
  window.addEventListener("resize", () => {
    if (button.style.left) {
      const rect = button.getBoundingClientRect();
      setFloatingCartPosition(rect.left, rect.top, true);
    }
  });
}
function renderFavorites() {
  favorites = favorites.filter(id => findProduct(id));
  $("#favorites-count").textContent = favorites.length;
  const list = favorites.map(findProduct);
  $("#favorites-content").innerHTML = list.length ? list.map(product => `<div class="cart-item"><img src="${escapeHTML(product.image)}" alt=""><div><h3>${escapeHTML(localizedName(product))}</h3><p>${escapeHTML(priceOrPending(product))}</p><button class="text-link" type="button" data-fav-buy="${product.id}">${escapeHTML(t(isPurchasable(product) ? "addToCart" : "askPrice"))}</button></div><button data-fav-remove="${product.id}" aria-label="×">×</button></div>`).join("") : `<div class="drawer-empty"><div><span>♡</span><p>${escapeHTML(t("emptyFavorites"))}</p></div></div>`;
  saveStorage("enassime-favorites", favorites);
  $$("[data-fav-buy]", $("#favorites-content")).forEach(button => button.addEventListener("click", () => buyProduct(Number(button.dataset.favBuy))));
  $$("[data-fav-remove]", $("#favorites-content")).forEach(button => button.addEventListener("click", () => toggleFavorite(Number(button.dataset.favRemove))));
}
function openDrawer(id) {
  $$(".drawer").forEach(drawer => drawer.classList.add("hidden"));
  $("#" + id).classList.remove("hidden"); $("#overlay").classList.remove("hidden"); document.body.classList.add("modal-open");
}
function closeDrawers() {
  $$(".drawer").forEach(drawer => drawer.classList.add("hidden"));
  $("#overlay").classList.add("hidden"); document.body.classList.remove("modal-open");
}
function openCheckout() {
  closeDrawers();
  if (store.cod_enabled !== "true" || store.shipping_fee === "") {
    showToast(t("orderUnavailable"));
    window.open(waLink(translations[language].whatsappProduct), "_blank", "noopener,noreferrer");
    return;
  }
  const notice = $("#checkoutCOD");
  if (notice) notice.textContent = `${t("checkoutCOD")} ${t("deliveryFees")}: ${money(store.shipping_fee)}.`;
  const subtotal = cart.reduce((total, item) => total + Number(findProduct(item.id)?.price || 0) * item.quantity, 0);
  $("#checkout-summary").innerHTML = `<div class="checkout-row"><span>${escapeHTML(sumLabels[language].subtotal)}</span><strong>${escapeHTML(money(subtotal))}</strong></div><div class="checkout-row"><span>${escapeHTML(sumLabels[language].shipping)}</span><strong>${escapeHTML(money(store.shipping_fee))}</strong></div><div class="checkout-row checkout-row-total"><span>${escapeHTML(sumLabels[language].total)}</span><strong>${escapeHTML(money(subtotal + Number(store.shipping_fee)))}</strong></div>`;
  $("#checkout-modal").showModal();
}
async function submitOrder(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = $("button[type=submit]", form);
  const feedback = $("#checkout-feedback");
  button.disabled = true; feedback.textContent = t("loading"); feedback.classList.remove("error");
  const payload = Object.fromEntries(new FormData(form));
  payload.items = cart.map(item => ({ id: item.id, quantity: item.quantity }));
  try {
    const result = await api("/api/orders", { method: "POST", body: JSON.stringify(payload) });
    cart = []; saveStorage("enassime-cart", cart); renderCart(); renderProducts(); renderAdmin();
    feedback.textContent = `${t("orderSuccess")} ${t("adminOrder")} #${result.id}.`;
    form.reset();
    const link = document.createElement("a");
    link.href = waLink(t("whatsappOrder") + result.id); link.target = "_blank"; link.rel = "noopener"; link.textContent = t("whatsappHelp"); link.className = "text-link";
    feedback.append(document.createElement("br"), link);
  } catch (error) {
    feedback.textContent = error.message || t("orderError"); feedback.classList.add("error");
  } finally { button.disabled = false; }
}

function openAdmin() {
  $("#admin-modal").showModal(); checkAdminSession();
}
async function checkAdminSession() {
  try {
    const result = await api("/api/admin/session");
    adminCsrf = result.csrf || "";
    $("#admin-login").classList.toggle("hidden", result.authenticated);
    $("#admin-panel").classList.toggle("hidden", !result.authenticated);
    if (result.authenticated) await renderAdmin();
  } catch (error) { console.error("Could not check admin session:", error); }
}
async function adminLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const feedback = $("#login-feedback");
  const button = $("button[type=submit]", form);
  button.disabled = true; feedback.textContent = t("loading"); feedback.classList.remove("error");
  try {
    const result = await api("/api/admin/login", { method: "POST", body: JSON.stringify({ password: new FormData(form).get("password") }) });
    adminCsrf = result.csrf; form.reset(); $("#admin-login").classList.add("hidden"); $("#admin-panel").classList.remove("hidden"); await renderAdmin();
  } catch (error) { feedback.textContent = error.message || t("loginError"); feedback.classList.add("error"); }
  finally { button.disabled = false; }
}
async function adminLogout() {
  try {
    await api("/api/admin/logout", { method: "POST", body: "{}" }); adminCsrf = "";
    $("#admin-panel").classList.add("hidden"); $("#admin-login").classList.remove("hidden");
  } catch (error) { showToast(error.message || t("saveError")); }
}
async function renderAdmin() {
  if (!adminCsrf) return;
  try {
    const [allProducts, orders, settings, summary] = await Promise.all([
      api("/api/admin/products"), api("/api/admin/orders"), api("/api/admin/settings"), api("/api/admin/summary")
    ]);
    products = allProducts.filter(product => product.active);
    store = { ...store, ...settings };
    const activeTab = $(".admin-tabs button.active")?.dataset.adminTab || "products";
    renderAdminProducts(allProducts, summary);
    renderAdminOrders(orders);
    renderAdminSettings(settings);
    selectAdminTab(activeTab);
    renderCategories(); renderProducts(); updateHero();
  } catch (error) {
    if (error.message.includes("Connexion")) { adminCsrf = ""; $("#admin-panel").classList.add("hidden"); $("#admin-login").classList.remove("hidden"); }
    else showToast(error.message || t("saveError"));
  }
}
function renderAdminProducts(allProducts, summary) {
  const grid = `<div class="admin-summary">
    <div class="admin-stat"><span>${escapeHTML(t("adminRevenue"))}</span><strong>${escapeHTML(money(summary.delivered_revenue))}</strong></div>
    <div class="admin-stat"><span>${escapeHTML(t("adminOrderCount"))}</span><strong>${summary.orders}</strong></div>
    <div class="admin-stat"><span>${escapeHTML(t("adminActiveCount"))}</span><strong>${summary.products}</strong></div>
    <div class="admin-stat"><span>${escapeHTML(t("adminLowStock"))}</span><strong>${summary.low_stock}</strong></div>
    <div class="admin-stat"><span>${escapeHTML(t("adminMargin"))}</span><strong>${escapeHTML(money(summary.gross_margin))}</strong></div></div>`;
  const rows = allProducts.map(product => `<div class="admin-row" data-admin-product="${product.id}">
    <img src="${escapeHTML(product.image)}" alt="">
    <div><strong>${escapeHTML(localizedName(product))}</strong><small>${escapeHTML(localizedCategory(product.category))}${product.active ? "" : " · " + (language === "ar" ? "مؤرشف" : "Archivé")}</small></div>
    <span>${escapeHTML(product.price === null ? t("adminNoPrice") : money(product.price))}</span>
    <span>${language === "ar" ? "المخزون: " : "Stock : "}${product.stock}</span>
    <span>${product.cost_price !== null && product.price !== null ? escapeHTML(money(Number(product.price) - Number(product.cost_price))) : "—"}</span>
    <div class="admin-controls"><button data-edit="${product.id}">${escapeHTML(t("adminEdit"))}</button>${product.active ? `<button data-delete="${product.id}">${escapeHTML(t("adminDelete"))}</button>` : ""}</div></div>`).join("");
  $("#admin-products").innerHTML = `${grid}<div class="admin-toolbar"><h3>${escapeHTML(t("adminProducts"))}</h3><button class="button button-outline" id="admin-new-product">+ ${escapeHTML(t("adminAddProduct"))}</button></div><div id="product-editor"></div><div class="admin-list">${rows || `<p class="modal-intro">${escapeHTML(t("adminNoProducts"))}</p>`}</div><p class="admin-disclaimer">${escapeHTML(t("adminMarginNote"))}</p>`;
  $("#admin-new-product").addEventListener("click", () => renderProductEditor(null));
  $$("[data-edit]", $("#admin-products")).forEach(button => button.addEventListener("click", () => renderProductEditor(allProducts.find(product => product.id === Number(button.dataset.edit)))));
  $$("[data-delete]", $("#admin-products")).forEach(button => button.addEventListener("click", async () => {
    if (!window.confirm(t("deleteConfirm"))) return;
    try { await api(`/api/admin/products/${button.dataset.delete}`, { method: "DELETE" }); await renderAdmin(); showToast(t("saved")); }
    catch (error) { showToast(error.message || t("saveError")); }
  }));
}
function renderProductEditor(product) {
  const editor = $("#product-editor");
  const imageNames = new Map();
  products.forEach(item => (item.images || [item.image]).forEach(image => imageNames.set(image, item.name_fr)));
  const imageOptions = [...imageNames].map(([image, name]) => `<option value="${escapeHTML(image)}" ${product?.image === image ? "selected" : ""}>${escapeHTML(image.split("/").pop())} — ${escapeHTML(name)}</option>`).join("");
  const galleryOptions = [...imageNames].map(([image, name]) => `<option value="${escapeHTML(image)}" ${product?.images?.includes(image) && product.image !== image ? "selected" : ""}>${escapeHTML(image.split("/").pop())} — ${escapeHTML(name)}</option>`).join("");
  editor.innerHTML = `<form class="admin-product-form" id="admin-product-form">
    <h3>${escapeHTML(t(product ? "adminEdit" : "adminNewProduct"))}</h3>
    <div class="admin-form-grid">
      <label>${escapeHTML(t("adminNameFr"))}<input class="admin-field" name="name_fr" required maxlength="160" value="${escapeHTML(product?.name_fr || "")}"></label>
      <label>${escapeHTML(t("adminNameAr"))}<input class="admin-field" name="name_ar" required maxlength="160" value="${escapeHTML(product?.name_ar || "")}" dir="rtl"></label>
      <label>${escapeHTML(t("adminCategory"))}<input class="admin-field" name="category" required maxlength="80" list="category-suggestions" value="${escapeHTML(product?.category || "")}"><datalist id="category-suggestions">${Object.keys(categoryLabels).map(category => `<option value="${escapeHTML(category)}">`).join("")}</datalist></label>
      <label>${escapeHTML(t("adminPhoto"))}<select class="admin-field" name="image" required><option value="">${escapeHTML(t("selectPhoto"))}</option>${imageOptions}</select></label>
      <label>${escapeHTML(t("adminPhoto"))}<select class="admin-field" name="gallery" multiple size="3">${galleryOptions}</select><small class="admin-upload-note">${escapeHTML(t("selectPhoto"))}</small></label>
      <label>${escapeHTML(t("adminPrice"))}<input class="admin-field" name="price" type="number" min="0" step="0.01" value="${product?.price ?? ""}"></label>
      <label>${escapeHTML(t("adminReference"))}<input class="admin-field" name="reference_price" type="number" min="0" step="0.01" value="${product?.reference_price ?? ""}"></label>
      <label>${escapeHTML(t("adminCost"))}<input class="admin-field" name="cost_price" type="number" min="0" step="0.01" value="${product?.cost_price ?? ""}"></label>
      <label>${escapeHTML(t("adminStock"))}<input class="admin-field" name="stock" type="number" min="0" step="1" value="${product?.stock ?? 0}"></label>
      <label>${escapeHTML(t("adminDescription"))}<textarea class="admin-field" name="description" rows="3" maxlength="1200">${escapeHTML(product?.description || "")}</textarea></label>
      <label>${escapeHTML(t("adminUpload"))}<input class="admin-field" type="file" id="product-upload" accept="image/jpeg,image/png,image/webp" multiple><small class="admin-upload-note">${escapeHTML(t("adminUploadNote"))}</small></label>
    </div>
    <label><span><input name="active" type="checkbox" ${product?.active === false ? "" : "checked"}> ${escapeHTML(t("adminActive"))}</span></label>
    <p class="admin-disclaimer">${escapeHTML(t("adminMarginNote"))}</p>
    <div class="form-actions"><button class="button button-dark" type="submit">${escapeHTML(t("adminSave"))}</button><button class="button button-outline" type="button" id="cancel-product-edit">${escapeHTML(t("adminCancel"))}</button></div><p class="form-feedback" id="product-form-feedback"></p>
  </form>`;
  $("#cancel-product-edit").addEventListener("click", () => { editor.innerHTML = ""; });
  $("#product-upload").addEventListener("change", uploadProductImage);
  $("#admin-product-form").addEventListener("submit", event => saveProductForm(event, product));
}
async function uploadProductImage(event) {
  const files = [...(event.currentTarget.files || [])];
  if (!files.length) return;
  for (const file of files) {
    if (file.size > 2 * 1024 * 1024 || !["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      showToast(t("uploadError") + " " + t("adminUploadNote")); event.currentTarget.value = ""; return;
    }
  }
  try {
    for (const file of files) {
      const data = await new Promise((resolve, reject) => {
        const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = () => reject(new Error(t("uploadError"))); reader.readAsDataURL(file);
      });
      const result = await api("/api/admin/upload", { method: "POST", body: JSON.stringify({ filename: file.name, data }) });
      const primary = $("select[name=image]", $("#admin-product-form"));
      const gallery = $("select[name=gallery]", $("#admin-product-form"));
      const option = new Option(file.name, result.image);
      primary.add(option.cloneNode(true)); gallery.add(option.cloneNode(true), 0);
      if (!primary.value) primary.value = result.image;
      if (primary.value !== result.image) gallery.options[0].selected = true;
    }
    event.currentTarget.value = "";
  } catch (error) { showToast(error.message || t("uploadError")); }
}
async function saveProductForm(event, product) {
  event.preventDefault();
  const form = event.currentTarget;
  const feedback = $("#product-form-feedback");
  const payload = Object.fromEntries(new FormData(form));
  payload.active = form.elements.active.checked;
  payload.gallery = [...form.elements.gallery.selectedOptions].map(option => option.value);
  const clean = key => { if (payload[key] === "") payload[key] = null; };
  ["price", "reference_price", "cost_price"].forEach(clean);
  const button = $("button[type=submit]", form); button.disabled = true; feedback.textContent = t("loading");
  try {
    await api(product ? `/api/admin/products/${product.id}` : "/api/admin/products", { method: product ? "PUT" : "POST", body: JSON.stringify(payload) });
    await renderAdmin(); showToast(t("saved"));
  } catch (error) { feedback.textContent = error.message || t("saveError"); feedback.classList.add("error"); }
  finally { button.disabled = false; }
}
const statusNames = { pending: "adminStatusPending", confirmed: "adminStatusConfirmed", shipped: "adminStatusShipped", delivered: "adminStatusDelivered", cancelled: "adminStatusCancelled" };
const allowedOrderStatuses = { pending: ["pending", "confirmed", "cancelled"], confirmed: ["confirmed", "shipped", "cancelled"], shipped: ["shipped", "delivered", "cancelled"], delivered: ["delivered"], cancelled: ["cancelled"] };
function renderAdminOrders(orders) {
  const content = orders.length ? orders.map(order => {
    const items = order.items.map(item => `${escapeHTML(item.name_fr)} × ${item.quantity}`).join(" · ");
    const options = (allowedOrderStatuses[order.status] || [order.status]).map(status => `<option value="${status}" ${status === order.status ? "selected" : ""}>${escapeHTML(t(statusNames[status] || status))}</option>`).join("");
    const phone = order.phone.replace(/[^\d+]/g, "");
    const date = new Date(order.created_at).toLocaleString(language === "ar" ? "ar-MA" : "fr-MA", { dateStyle: "medium", timeStyle: "short" });
    return `<div class="admin-order"><div><strong>${escapeHTML(t("adminOrder"))} #${order.id} · ${escapeHTML(date)}</strong><small>${escapeHTML(order.customer_name)} · ${escapeHTML(order.city)}</small></div><div><strong>${escapeHTML(money(order.total))} (${escapeHTML(t("adminShipping"))}: ${escapeHTML(money(order.shipping))})</strong><small>${items}</small><small>${escapeHTML(order.address)}</small></div><div><a href="tel:${escapeHTML(phone)}">${escapeHTML(order.phone)}</a></div><select data-order-status="${order.id}" aria-label="${escapeHTML(t("adminOrderStatus"))}">${options}</select></div>`;
  }).join("") : `<p class="modal-intro">${escapeHTML(t("adminNoOrders"))}</p>`;
  $("#admin-orders").innerHTML = `<div class="admin-toolbar"><h3>${escapeHTML(t("adminOrders"))}</h3></div><div class="admin-list">${content}</div>`;
  $$("[data-order-status]", $("#admin-orders")).forEach(select => select.addEventListener("change", async () => {
    try { await api(`/api/admin/orders/${select.dataset.orderStatus}`, { method: "PUT", body: JSON.stringify({ status: select.value }) }); await renderAdmin(); showToast(t("saved")); }
    catch (error) { showToast(error.message || t("statusError")); await renderAdmin(); }
  }));
}
function renderAdminSettings(settings) {
  $("#admin-settings").innerHTML = `<form class="admin-settings-form" id="admin-settings-form">
    <h3>${escapeHTML(t("adminSettings"))}</h3>
    <p class="admin-disclaimer">${escapeHTML(t("adminSettingsNote"))}</p>
    <label>${escapeHTML(t("adminShipping"))}<input class="admin-field" name="shipping_fee" type="number" min="0" step="0.01" value="${escapeHTML(settings.shipping_fee || "")}"></label>
    <label><span><input type="checkbox" name="cod_enabled" ${settings.cod_enabled === "true" ? "checked" : ""}> ${escapeHTML(t("adminCod"))}</span></label>
    <h3>${escapeHTML(t("storyEyebrow"))}</h3>
    <label>${escapeHTML(t("adminHeroFr"))}<input class="admin-field" name="hero_title_fr" maxlength="160" value="${escapeHTML(settings.hero_title_fr || "")}"></label>
    <label>${escapeHTML(t("adminHeroAr"))}<input class="admin-field" name="hero_title_ar" maxlength="160" dir="rtl" value="${escapeHTML(settings.hero_title_ar || "")}"></label>
    <label>${escapeHTML(t("adminHeroTextFr"))}<textarea class="admin-field" name="hero_text_fr" maxlength="500" rows="2">${escapeHTML(settings.hero_text_fr || "")}</textarea></label>
    <label>${escapeHTML(t("adminHeroTextAr"))}<textarea class="admin-field" name="hero_text_ar" maxlength="500" rows="2" dir="rtl">${escapeHTML(settings.hero_text_ar || "")}</textarea></label>
    <button class="button button-dark" type="submit">${escapeHTML(t("adminSaveSettings"))}</button><p class="form-feedback" id="settings-feedback"></p>
  </form>`;
  $("#admin-settings-form").addEventListener("submit", async event => {
    event.preventDefault();
    const form = event.currentTarget; const feedback = $("#settings-feedback");
    const payload = Object.fromEntries(new FormData(form)); payload.cod_enabled = form.elements.cod_enabled.checked ? "true" : "false";
    const button = $("button[type=submit]", form); button.disabled = true; feedback.textContent = t("loading");
    try { await api("/api/admin/settings", { method: "PUT", body: JSON.stringify(payload) }); await loadStore(); feedback.textContent = t("saved"); }
    catch (error) { feedback.textContent = error.message || t("saveError"); feedback.classList.add("error"); }
    finally { button.disabled = false; }
  });
}
function selectAdminTab(tab) {
  $$(".admin-tabs button").forEach(button => button.classList.toggle("active", button.dataset.adminTab === tab));
  $$(".admin-view").forEach(section => section.classList.toggle("hidden", section.id !== "admin-" + tab));
}
function bindEvents() {
  initFloatingCart();
  $("#language-toggle").addEventListener("click", () => setLanguage(language === "fr" ? "ar" : "fr"));
  $("#search-form").addEventListener("submit", event => { event.preventDefault(); $("#catalogue").scrollIntoView({ behavior: "smooth" }); renderProducts(); });
  $("#search-input").addEventListener("input", renderProducts);
  $("#category-filter").addEventListener("change", renderProducts);
  $("#price-filter").addEventListener("input", renderProducts);
  $("#sort-select").addEventListener("change", renderProducts);
  $("#clear-filters").addEventListener("click", () => { $("#search-input").value = ""; $("#category-filter").value = ""; $("#price-filter").value = ""; renderProducts(); });
  $$("[data-filter-link]").forEach(link => link.addEventListener("click", () => { $("#category-filter").value = link.dataset.filterLink; renderProducts(); }));
  $("#cart-open").addEventListener("click", () => openDrawer("cart-drawer"));
  $("#favorites-open").addEventListener("click", () => openDrawer("favorites-drawer"));
  $("#overlay").addEventListener("click", closeDrawers);
  $$("[data-close]").forEach(button => button.addEventListener("click", () => {
    const dialog = button.closest("dialog");
    if (dialog) dialog.close(); else closeDrawers();
  }));
  $("#checkout-open").addEventListener("click", openCheckout);
  $("#checkout-form").addEventListener("submit", submitOrder);
  $("#admin-open").addEventListener("click", openAdmin);
  $("#login-form").addEventListener("submit", adminLogin);
  $("#admin-logout").addEventListener("click", adminLogout);
  $$(".admin-tabs button").forEach(button => button.addEventListener("click", () => selectAdminTab(button.dataset.adminTab)));
  ["product-modal", "checkout-modal", "admin-modal"].forEach(id => {
    $("#" + id).addEventListener("click", event => { if (event.target === event.currentTarget) event.currentTarget.close(); });
    $("#" + id).addEventListener("close", () => { if (!$("#cart-drawer").classList.contains("hidden") || !$("#favorites-drawer").classList.contains("hidden")) return; document.body.classList.remove("modal-open"); });
    $("#" + id).addEventListener("cancel", () => document.body.classList.remove("modal-open"));
  });
}

async function start() {
  bindEvents(); setLanguage(language); await Promise.all([loadStore(), loadProducts()]);
  if (location.pathname === "/") {
    $('link[rel="canonical"]').href = location.origin + "/";
    $('meta[property="og:image"]').content = new URL("/enassime-logo.png", location.origin).href;
  }
  if (location.pathname.startsWith("/product/")) { renderProductPage(); return; }
  if (location.hash.startsWith("#produit-")) {
    const slug = decodeURIComponent(location.hash.slice("#produit-".length));
    const product = products.find(item => item.slug === slug);
    if (product) openProduct(product.id);
  }
}
start().catch(error => { console.error("Shop startup failed:", error); showToast(error.message || t("nothingToShow")); });

'use client'

import { Drupal, Shopify, Webflow, Wix, Wordpress } from "asset1/cms_svg";

import { useGlobalContext } from "../../components/common/store";


// const check=()=>{
//   const { showSidebar, setShowSidebar, theme, setTheme } = useGlobalContext();
//   console.log(theme,"theme")
//   return theme
// }

// const color={
//  check()?fill:"red":"black"
// }

// const ourProcessDataBlack = [
//   {
//     id: 1,
//     btnName: "Wordpress",
//     img: <Wordpress fill={color.fill}  />,
//     content:
//       "WordPress is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use responsive designs to enhance your user engagement and accessibility across various devices",
//   },
//   {
//     id: 2,
//     btnName: "Drupal",
//     img: <Drupal />,
//     content:
//       " Drupal is a robust and highly flexible content management system (CMS) known for its extensive customization options and scalability. At Devriser, we use Drupal website development services and create exceptional websites with their flexible architecture, extensive module library, and intuitive administration interface. This allows us to tailor websites precisely to our client's needs, ensuring optimal performance, scalability, and an exceptional user experience",
//   },
//   {
//     id: 3,
//     btnName: "Wix",
//     img: <Wix />,
//     content:
//       "Wix is a powerful and user-friendly website builder with professional templates, customizable elements, and an app market for added functionalities. We at Devriser utilize its intuitive tools, reliable hosting, mobile optimization, and SEO capabilities to provide you with a unique website that delivers an outstanding online experience",
//   },
//   {
//     id: 4,
//     btnName: "Webflow",
//     img: <Webflow />,
//     content:
//       " Webflow is one of the best platforms for CMS website development. It is known for its intuitive visual editor and robust features. At Devriser, we leverage its seamless design capabilities, responsive layouts, built-in SEO tools, and extensive template library to create visually stunning websites which align with your goals and objectives",
//   },
//   {
//     id: 5,
//     btnName: "Shopify",
//     img: <Shopify />,
//     content:
//       "Shopify is a powerful e-commerce platform with diverse features to construct and oversee online stores. Devriser experts harness the extensive capabilities to craft excellent websites tailored to your specific business requirements. We ensure seamless integration, intuitive navigation, and optimized performance, resulting in an elevated shopping experience",
//   },
// ];

// // const ourProcessDataWhite = [
// //   {
// //     id: 1,
// //     btnName: "Wordpress",
// //     img: wordpress_white,
// //     content:
// //       "WordPress is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use responsive designs to enhance your user engagement and accessibility across various devices",
// //   },
// //   {
// //     id: 2,
// //     btnName: "Drupal",
// //     img: drupal_white,
// //     content:
// //       " Drupal is a robust and highly flexible content management system (CMS) known for its extensive customization options and scalability. At Devriser, we use Drupal website development services and create exceptional websites with their flexible architecture, extensive module library, and intuitive administration interface. This allows us to tailor websites precisely to our client's needs, ensuring optimal performance, scalability, and an exceptional user experience",
// //   },
// //   {
// //     id: 3,
// //     btnName: "Wix",
// //     img: wix_white,
// //     content:
// //       "Wix is a powerful and user-friendly website builder with professional templates, customizable elements, and an app market for added functionalities. We at Devriser utilize its intuitive tools, reliable hosting, mobile optimization, and SEO capabilities to provide you with a unique website that delivers an outstanding online experience",
// //   },
// //   {
// //     id: 4,
// //     btnName: "Webflow",
// //     img: webflow_white,
// //     content:
// //       " Webflow is one of the best platforms for CMS website development. It is known for its intuitive visual editor and robust features. At Devriser, we leverage its seamless design capabilities, responsive layouts, built-in SEO tools, and extensive template library to create visually stunning websites which align with your goals and objectives",
// //   },
// //   {
// //     id: 5,
// //     btnName: "Shopify",
// //     img: shopify_white,
// //     content:
// //       "Shopify is a powerful e-commerce platform with diverse features to construct and oversee online stores. Devriser experts harness the extensive capabilities to craft excellent websites tailored to your specific business requirements. We ensure seamless integration, intuitive navigation, and optimized performance, resulting in an elevated shopping experience",
// //   },
// // ];

// export { ourProcessDataBlack };

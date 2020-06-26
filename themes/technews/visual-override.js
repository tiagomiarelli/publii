/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
    let output = ''; 
    
    if (
        params.mainWidth !== '50rem' || 
        params.sidebarWidth !== '18rem' || 
        params.navbarHeight !== '3.4rem' || 
        params.cardSmallHeight !== '14rem' ||
        params.cardLargeHeight !== '24rem' ||
        params.roundedLayout !== '4' ||
        params.lineHeight !== '1.6' ||
        params.fontNormalWeight !== '400' || 
        params.fontBoldWeight !== '600' ||
        params.fontHeadignsWeight !== '600' || 
        params.fontHeadingsTransform !== 'none' ||       
        params.primaryColor !== '#448AFF' || 
        params.textColor !== '#2C2E35' || 
        params.headingColor !== '#2C2E35') {
        output += `
        :root {
           --main-col-width:           ${params.mainWidth}; 
           --sidebar-width:            ${params.sidebarWidth}; 
           --navbar-height:            ${params.navbarHeight};
           --card-small-height:        ${params.cardSmallHeight};
           --card-large-height:        ${params.cardLargeHeight};
           --border-radius:            ${params.roundedLayout}px; 
           --line-height:              ${params.lineHeight};
           --font-weight-normal:       ${params.fontNormalWeight}; 
           --font-weight-bold:         ${params.fontBoldWeight}; 
           --headings-weight:          ${params.fontHeadignsWeight};
           --headings-transform:       ${params.fontHeadingsTransform};
           --white:                    #FFFFFF;
           --black:                    #000000;
           --dark:                     #2C2E35;
           --gray-1:                   #84888E;
           --gray-2:                   #B4B9C1;
           --light:                    #EEF2F8;
           --lighter:                  #F7F7F8;
           --color:                    ${params.primaryColor};  
           --color-rgb:                68,138,255; 
           --text-color:               ${params.textColor}; 
           --headings-color:           ${params.headingColor}; 
           --link-color:               #2C2E35; 
           --link-hover-color:         ${params.primaryColor}; 
           --border-color-light:       #E1E2E3;
        }`;
    }       

    if(params.minFontSize !== '1.1' || params.maxFontSize !== '1.2') {
        output += `
        html {
          font-size: ${params.minFontSize}rem;
        }

        @media screen and (min-width: 20rem) {
          html {
               font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 55));
          }
        }

        @media screen and (min-width: 75rem) {
          html {
               font-size: ${params.maxFontSize}rem;
            }
        }`;
    }
	

	if(params.primaryColor !== '#448AFF') {
        output += `       
       input[type=checkbox]:checked + label:before,
       input[type=radio]:checked + label:before {
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8'%3e%3cpolygon points='9.53 0 4.4 5.09 1.47 2.18 0 3.64 2.93 6.54 4.4 8 5.87 6.54 11 1.46 9.53 0' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");

        input[type=radio]:checked + label:before {
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3ccircle cx='4' cy='4' r='4' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");         
        
        }`;
    }   

     if (params.submenu === 'custom') {
        output += `
        .navbar .navbar__submenu {
               width: ${params.submenuWidth}px;     
        }

        .navbar .has-submenu .has-submenu:active > .navbar__submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu {
               left: ${params.submenuWidth}px;  
        }
        .navbar .has-submenu .has-submenu:active > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu.is-right-submenu {
               left: -${params.submenuWidth}px; 
        }`;
    }       
    
    
    if(params.galleryItemGap !== '0.24286rem') {
        output += `   
       .gallery__item {
               padding: ${params.galleryItemGap}; 
    } 
       .gallery {   
               margin: calc(1.45714rem + 1vw) -${params.galleryItemGap}; 
       }`;    	 
    }	
	
  
    if(params.lazyLoadEffect === 'fadein') {
        output += ` 
         img[loading] {
               opacity: 0;
         }

         img.is-loaded {
               opacity: 1;
               transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
         }`;    	 
    } 
   
    return output;
}

module.exports = generateOverride;

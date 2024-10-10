// Import createLogo logic
import { createFoot } from './_components/components.js';

// Gets foot component
const footer = document.getElementById('footer');
const footerContent = createFoot();

document.addEventListener('DOMContentLoaded', function() {
    // Reusable components(Logo Headlines)
    footer.appendChild(footerContent);
    handleFootResize();
});

// Function to handle the resize event
function handleFootResize() {
// Get the current width and height
const width = window.innerWidth;
const socialContainer = document.getElementById('socialContainer'); 

if(width <= 992) {
    socialContainer.classList.remove('justify-content-end');
    socialContainer.classList.add('justify-content-center'); 
} else if(width > 992) {
    socialContainer.classList.add('justify-content-end');
    socialContainer.classList.remove('justify-content-center');
}

}

// Add event listener for resize
window.addEventListener('resize', handleFootResize);

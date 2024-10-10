const sessionProd = sessionStorage.getItem('selectedProduct');
const prodName = document.getElementById('productName');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

// Default image URL
const defaultImage = 'https://placehold.co/600x400.webp?text=Default+Image';

const productImages = {
    // ***Food Packaging***
    // Paper Cups
    'Paper Cups 4oz': [
        'https://placehold.co/600x400.webp?text=Paper+Cups+4oz+_Pic1',
        'https://placehold.co/600x400.webp?text=Paper+Cups+4oz+_Pic2',
        'https://placehold.co/600x400.webp?text=Paper+Cups+4oz+_Pic3'
    ],
    'Paper Cups 6oz': [
        'https://placehold.co/600x400.webp?text=Paper+Cups+6oz+_Pic1',
        'https://placehold.co/600x400.webp?text=Paper+Cups+6oz+_Pic2',
        'https://placehold.co/600x400.webp?text=Paper+Cups+6oz+_Pic3'
    ],
    'Paper Cups 8oz': [
        'https://placehold.co/600x400.webp?text=Paper+Cups+8oz+_Pic1',
        'https://placehold.co/600x400.webp?text=Paper+Cups+8oz+_Pic2',
        'https://placehold.co/600x400.webp?text=Paper+Cups+8oz+_Pic3'
    ],
    'Paper Cups 16oz': [
        'https://placehold.co/600x400.webp?text=Paper+Cups+16oz+_Pic1',
        'https://placehold.co/600x400.webp?text=Paper+Cups+16oz+_Pic2',
        'https://placehold.co/600x400.webp?text=Paper+Cups+16oz+_Pic3'
    ],
    'Paper Cups 22oz': [
        'https://placehold.co/600x400.webp?text=Paper+Cups+22oz+_Pic1',
        'https://placehold.co/600x400.webp?text=Paper+Cups+22oz+_Pic2',
        'https://placehold.co/600x400.webp?text=Paper+Cups+22oz+_Pic3'
    ],
    'Paper Cups 12oz 80D': [
        'https://placehold.co/600x400.webp?text=Paper+Cups+12oz+80D+_Pic1',
        'https://placehold.co/600x400.webp?text=Paper+Cups+12oz+80D+_Pic2',
        'https://placehold.co/600x400.webp?text=Paper+Cups+12oz+80D+_Pic3'
    ],
    'Paper Cups 12oz 90D': [
        'https://placehold.co/600x400.webp?text=Paper+Cups+12oz+90D+_Pic1',
        'https://placehold.co/600x400.webp?text=Paper+Cups+12oz+90D+_Pic2',
        'https://placehold.co/600x400.webp?text=Paper+Cups+12oz+90D+_Pic3'
    ],

    // ***Industrial Packaging***
    'Colored Boxes': [
        'https://placehold.co/600x400.webp?text=Colored+Boxes+_Pic1',
        'https://placehold.co/600x400.webp?text=Colored+Boxes+_Pic2',
        'https://placehold.co/600x400.webp?text=Colored+Boxes+_Pic3'
    ],
    'Corrugated Colored Boxes': [
        'https://placehold.co/600x400.webp?text=Corrugated+Colored+Boxes+_Pic1',
        'https://placehold.co/600x400.webp?text=Corrugated+Colored+Boxes+_Pic2',
        'https://placehold.co/600x400.webp?text=Corrugated+Colored+Boxes+_Pic3'
    ],
    'Tray': [
        'https://placehold.co/600x400.webp?text=Tray_Pic1',
        'https://placehold.co/600x400.webp?text=Tray_Pic2',
        'https://placehold.co/600x400.webp?text=Tray_Pic3'
    ],
    'Display Box': [
        'https://placehold.co/600x400.webp?text=Display+Box_Pic1',
        'https://placehold.co/600x400.webp?text=Display+Box_Pic2',
        'https://placehold.co/600x400.webp?text=Display+Box_Pic3'
    ],
    'Master Box': [
        'https://placehold.co/600x400.webp?text=Master+Box_Pic1',
        'https://placehold.co/600x400.webp?text=Master+Box_Pic2',
        'https://placehold.co/600x400.webp?text=Master+Box_Pic3'
    ],
    'Manuals': [
        'https://placehold.co/600x400.webp?text=Manuals_Pic1',
        'https://placehold.co/600x400.webp?text=Manuals_Pic2',
        'https://placehold.co/600x400.webp?text=Manuals_Pic3'
    ],
    'Brochures': [
        'https://placehold.co/600x400.webp?text=Brochures_Pic1',
        'https://placehold.co/600x400.webp?text=Brochures_Pic2',
        'https://placehold.co/600x400.webp?text=Brochures_Pic3'
    ],
    'Leaflets': [
        'https://placehold.co/600x400.webp?text=Leaflets_Pic1',
        'https://placehold.co/600x400.webp?text=Leaflets_Pic2',
        'https://placehold.co/600x400.webp?text=Leaflets_Pic3'
    ],
    'Flyers': [
        'https://placehold.co/600x400.webp?text=Flyers_Pic1',
        'https://placehold.co/600x400.webp?text=Flyers_Pic2',
        'https://placehold.co/600x400.webp?text=Flyers_Pic3',
    ],
    'Posters': [
        'https://placehold.co/600x400.webp?text=Posters_Pic1',
        'https://placehold.co/600x400.webp?text=Posters_Pic2',
        'https://placehold.co/600x400.webp?text=Posters_Pic3',
    ],
    'Stickers': [
        'https://placehold.co/600x400.webp?text=Stickers_Pic1',
        'https://placehold.co/600x400.webp?text=Stickers_Pic2',
        'https://placehold.co/600x400.webp?text=Stickers_Pic3',
    ],

    
}

$(document).ready(function() {
    // Checks session storage if there is selected product
    if (!sessionProd) {
        sessionStorage.clear();
        img1.src = defaultImage;
        img2.src = defaultImage;
        img3.src = defaultImage;
    } else {
        prodName.textContent = sessionProd;

        const images = productImages[sessionProd];
        console.log(images);

        if (images) {
            img1.src = images[0];
            img2.src = images[1];
            img3.src = images[2];
        } else {
            console.error('Error, no images found for this product, proceeding to default placeholder');
            img1.src = defaultImage;
            img2.src = defaultImage;
            img3.src = defaultImage;
        }
    }
});

// p.js
const filterButtons = document.querySelectorAll('.filter-buttons button');
const imageGrid = document.getElementById('imageGrid');

// Sample image data (replace with your actual image URLs and categories)
const images = [
    { src: 'p2.jpg', category: 'pattern', name: 'Geometric Harmony' },
    { src: 'p1.jpg', category: 'pattern', name: 'Abstract Lines' },
    { src: 'p3.jpg', category: 'pattern', name: 'Symmetrical Design' },
    { src: 'p4.jpg', category: 'pattern', name: 'Repeating Tiles' },
    { src: 'p5.jpg', category: 'pattern', name: 'Whimsical Shapes' },
    { src: 'p6.jpg', category: 'pattern', name: 'Interwoven Forms' },
    { src: 'p7.jpg', category: 'pattern', name: 'Dynamic Flow' },
    { src: 'p8.jpg', category: 'pattern', name: 'Organic Texture' },
    { src: 'p9.jpg', category: 'pattern', name: 'Vibrant Colors' },
    { src: 'p10.jpg', category: 'pattern', name: 'Subtle Hues' },
    { src: 'p11.jpg', category: 'pattern', name: 'Detailed Motifs' },
    { src: 'p12.jpg', category: 'pattern', name: 'Simple Elegance' },
    { src: 'p13.jpg', category: 'pattern', name: 'Modern Twist' },

    { src: 'c1.jpg', category: 'cartoon', name: 'Silly Symphony' },
    { src: 'c2.jpg', category: 'cartoon', name: 'Looney Tune' },
    { src: 'c3.jpg', category: 'cartoon', name: 'Merry Melodies' },
    { src: 'c4.jpg', category: 'cartoon', name: 'Happy Go Lucky' },
    { src: 'c5.jpg', category: 'cartoon', name: 'Wacky Adventures' },
    { src: 'c6.jpg', category: 'cartoon', name: 'Animated Antics' },
    { src: 'c7.jpg', category: 'cartoon', name: 'Funny Business' },
    { src: 'c8.jpg', category: 'cartoon', name: 'Cartoon Capers' },
    { src: 'c9.jpg', category: 'cartoon', name: 'Silly Shenanigans' },
    { src: 'c10.jpg', category: 'cartoon', name: 'Laugh Out Loud' },
    { src: 'c11.jpg', category: 'cartoon', name: 'Animated Fun' },
    { src: 'c12.jpg', category: 'cartoon', name: 'Cartoon Mania' },
    { src: 'c13.jpg', category: 'cartoon', name: 'Classic Cartoons' },

    { src: 'f1.jpg', category: 'flower', name: 'Crimson Rose' },
    { src: 'f2.jpg', category: 'flower', name: 'Sunlit Daisy' },
    { src: 'f3.jpg', category: 'flower', name: 'Azure Bloom' },
    { src: 'f4.jpg', category: 'flower', name: 'Golden Petals' },
    { src: 'f5.jpg', category: 'flower', name: 'Velvet Touch' },
    { src: 'f6.jpg', category: 'flower', name: 'Fragrant Blossom' },
    { src: 'f7.jpg', category: 'flower', name: 'Delicate Beauty' },
    { src: 'f8.jpg', category: 'flower', name: 'Radiant Bloom' },
    { src: 'f9.jpg', category: 'flower', name: 'Wildflower Meadow' },
    { src: 'f10.jpg', category: 'flower', name: 'Tropical Paradise' },
    { src: 'f11.jpg', category: 'flower', name: 'Springtime Bloom' },
    { src: 'f12.jpg', category: 'flower', name: 'Summer Garden' },
    { src: 'f13.jpg', category: 'flower', name: 'Autumn Bouquet' },

    { src: 's1.jpg', category: 'scenery', name: 'Mountain Majesty' },
    { src: 's2.jpg', category: 'scenery', name: 'Ocean Vista' },
    { src: 's3.jpg', category: 'scenery', name: 'Forest Path' },
    { src: 's4.avif', category: 'scenery', name: 'Desert Dunes' },
    { src: 's5.jpg', category: 'scenery', name: 'Green Valley' },
    { src: 's6.jpg', category: 'scenery', name: 'City Skyline' },
    { src: 's7.jpg', category: 'scenery', name: 'Starry Night' },
    { src: 's8.jpg', category: 'scenery', name: 'Rolling Hills' },
    { src: 's9.jpg', category: 'scenery', name: 'Frozen Lake' },
    { src: 's10.jpg', category: 'scenery', name: 'Tropical Beach' },
    { src: 's11.avif', category: 'scenery', name: 'Autumn Colors' },
    { src: 's11.jpg', category: 'scenery', name: 'Winter Wonderland' },
    { src: 's12.avif', category: 'scenery', name: 'Peaceful Meadow' },
];

// Function to load and display images
function displayImages(category) {
    imageGrid.innerHTML = ''; // Clear previous images

    images.forEach(image => {
        if (category === 'all' || image.category === category) {
            const imgContainer = document.createElement('div'); // Container for image and name
            imgContainer.classList.add('image-container'); // Add a class for styling

            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.category;
            imgElement.classList.add('show');
            imgContainer.appendChild(imgElement);

            const nameElement = document.createElement('h4'); // Create the h4 element
            nameElement.textContent = image.name; // Set the image name
            imgContainer.appendChild(nameElement); // Add the name to the container

            imageGrid.appendChild(imgContainer); // Add the container to the grid
        }
    });
}


// Initial display of all images
displayImages('all');

// Event listeners for filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        displayImages(category);
    });
});
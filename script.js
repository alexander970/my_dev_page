// Create a scene
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
const canvasContainer = document.getElementById('canvas-container'); // Get the container element
canvasContainer.appendChild(renderer.domElement);


const containerWidth = canvasContainer.clientWidth;
const containerHeight = canvasContainer.clientHeight;
renderer.setSize(containerWidth, 500);




const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 808080 });
 const cubeSize = 1;
const cube = new THREE.Mesh(geometry, material);
cube.scale.set(cubeSize, 2, cubeSize); // Set the scale to adjust the size
cube.position.set(0, 0, 0); // Set the position to center it
scene.add(cube);



// Animation function
const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};

// Handle window resize
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
});

// Start the animation
animate();

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    header.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});

const sections = document.querySelectorAll('.section');

function checkScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);
window.addEventListener('load', checkScroll);

particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0, sync: false } },
        size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0, sync: false } },
        line_linked: { enable: false },
        move: { enable: true, speed: 1, direction: "none", random: true, straight: false, out_mode: "out", bounce: false },
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 } },
    },
});

const profileImage = document.getElementById('profile-image');
        let mouseX = 0;
        let mouseY = 0;

        // Track mouse movement and apply 3D rotation
        profileImage.addEventListener('mousemove', (e) => {
            const rect = profileImage.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate the rotation angles based on mouse position
            const rotationX = (e.clientY - centerY) / 1; // Adjust the sensitivity as needed
            const rotationY = (e.clientX - centerX) / 1;

            // Apply 3D rotation using CSS transform
            profileImage.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        });

        // Reset the rotation when the mouse leaves the element
        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });


        const skills = document.querySelectorAll('.skill');



skills.forEach((skill) => {
    const tooltipText = skill.getAttribute('data-tooltip'); // Get the data-tooltip attribute
    
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = tooltipText; // Use the data-tooltip attribute content
    
    skill.appendChild(tooltip);
});

window.addEventListener('resize', () => {
    const newWidth = canvasContainer.clientWidth;
    const newHeight = canvasContainer.clientHeight;
    renderer.setSize(newWidth, 300);
});

// JavaScript for toggling the mobile menu
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Close the mobile menu when a menu item is clicked
const mobileMenuItems = document.querySelectorAll('.mobile-menu a');
mobileMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});
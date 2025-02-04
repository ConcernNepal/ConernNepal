// Select elements
const meanToggle = document.querySelector(".mean-toggle");
const navMenu = document.querySelector("nav");
const overlay = document.createElement("div");

// Create an overlay element
overlay.className = "overlay";
document.body.appendChild(overlay);

// Toggle navigation menu
const toggleMenu = () => {
    navMenu.classList.toggle("active");
    meanToggle.classList.toggle("active");
    overlay.classList.toggle("active");
};

// Add event listeners
if (meanToggle) {
    meanToggle.addEventListener("click", toggleMenu);
}

// Close menu when overlay is clicked
overlay.addEventListener("click", toggleMenu);




// Slider auto-scroll functionality
let currentSlide = 0;

function showSlide(index) {
  const slider = document.querySelector(".slider");
  const totalSlides = slider.children.length;

  currentSlide = index;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-scroll every 5 seconds
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);
// Service data array
let currentService = 0;

// Show popup for a specific service
function showPopup(index) {
  currentService = index; // Set the current service
  updatePopup(); // Update the popup content
  document.querySelector('.popup').style.display = 'flex'; // Show the popup
}

// Close the popup
function closePopup() {
  document.querySelector('.popup').style.display = 'none'; // Hide the popup
}

// Navigate between services
function navigatePopup(direction) {
  const services = document.querySelectorAll('.service-item');
  currentService = (currentService + direction + services.length) % services.length; // Wrap around the index
  updatePopup(); // Update the popup content
}

// Update popup content dynamically
function updatePopup() {
  const services = [
    {
      title: 'Advocacy',
      description:
        'An effective advocacy campaign serves as a powerful platform for amplifying your message and gathering valuable insights. We are here to help you craft and execute it seamlessly. Whether you are refining your strategy to influence key decision-makers or building a grassroots coalition from the ground up, we provide the tools and expertise to engage and manage field teams, enhance your advocacy efforts, and ensure your movement leaves a lasting impact. Stand out from the crowd or rally support for your cause with a campaign that truly resonates.',
      image: './picture/Services/advocacy-copy@15x.png'
    },
    {
      title: 'Creative',
      description:
        'To build a strong and lasting connection with your current and potential voters, it’s not enough to share a compelling story—you need to place them at the heart of it. Our team of skilled copywriters and graphic designers does precisely that. We craft messages that embody your voice and genuinely resonate with your audience. Through innovative and impactful creative strategies, we spark emotional engagement, fostering a personal connection that inspires voters to invest in your cause.',
      image: './picture/Services/creative-@15x.png'
    },
    {
      title: 'Consulting',
      description:
        'Whether you’re advocating for a local cause, influencing provincial assemblies, or securing national election victories, we simplify your campaign strategy. With extensive experience executing impactful campaigns across Nepal, we’ve partnered with leaders, political parties, and advocacy groups to achieve meaningful results. From grassroots movements to national initiatives, we understand how to create cohesive, innovative plans that mobilize both current and potential supporters. From structuring your campaign to building a data-driven field program, we provide hands-on guidance every step of the way. Our goal is to help your team operate seamlessly, ensuring success in Nepal’s dynamic political landscape.',
      image: './picture/Services/General-consulting@15x.png'
    },
    {
      title: 'Data & Analytics',
      description:
        'To maximize your campaigns impact, we leverage advanced technology to analyze the most relevant data and uncover actionable insights. Using tools like SiSense™ for business intelligence, along with Recency, Frequency, and Monetary (RFM) analysis, we gain a deep understanding of the motivations, behaviors, and potential of both your current and prospective voters. This data drives strategies that provide your campaign with a powerful boost. We go beyond just analysis—we continuously pre-test creative materials to measure ad effectiveness and use cutting-edge eye-tracking software to ensure your key messages are placed in the most impactful locations, driving engagement and results.',
      image: './picture/Services/Data-analytics-8-copy@15x.png'
    },
    {
      title: 'Digital Advertising',
      description:
        'Using advanced targeting techniques, demand-side platforms, and compelling calls-to-action, we ensure your message reaches the right audience, on the right platform, at the right moment, to drive immediate results. Whether you require a powerful digital strategy through OTT (Over-the-Top) platforms, engaging email campaigns, or impactful social media ads, we collaborate with you to create a digital presence that amplifies your message. By harnessing the extensive reach of local platforms and tailoring campaigns to the specific needs of Nepali voters, we synchronize your messaging across all channels, maximizing engagement and support.',
      image: './picture/Services/Digital-9-copy@15x.png'
    },
    {
      title: 'Mobile Engagement',
      description:
       "In a world of distractions, we help you become the impactful 'ping' that captures voters' attention. With mobile devices as the main info source for Nepali voters, we create mobile-first strategies—personalized SMS, targeted ads, and interactive messaging—to drive engagement, mobilize support, and connect you with voters effectively and personally.",
      image: './picture/Services/mobile-engagement-@15x.png'
    },
    {
      title: 'Web Development',
      description:
       "When it comes to building your unique online presence, our team knows exactly how to make it resonate with Nepali voters. We collaborate with you to create landing pages that offer a seamless and intuitive user experience, ensuring that your message is accessible and easy to navigate. Through captivating lightboxes, we boost your click-through rates, driving more interactions with your campaign. We incorporate compelling visuals, data-driven content, and seamless multichannel integration to bring your cause to life, motivating your target audience to take meaningful action. By understanding the preferences and behaviors of voters in Nepal, we craft digital experiences that engage and empower, ultimately advancing your campaign’s success.",
      image: './picture/Services/i-43@15x-1.png'
    },
    {
      title: 'Video',
      description:
        'Sometimes, the most impactful way to share your story is through video, and we’re here to make that happen. Video engages and emotionally connects with voters like no other format. Whether it’s a campaign ad, a heartfelt candidate message, or a video highlighting your cause, we handle concept development, scriptwriting, filming, and editing to create high-quality content that amplifies your campaign and inspires action. Your story deserves to be unforgettable, and we make it happen through video.',
      image: './picture/Services/Video-DRTV-copy@15x.png'
    },
    {
      title: 'Web Development',
      description:
        'We build responsive and modern websites tailored to your specific needs and goals.',
      image: 'https://via.placeholder.com/400x200?text=Web+Development'
    }
  ];

  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');
  const popupImage = document.getElementById('popup-image');

  const service = services[currentService];
  popupTitle.innerText = service.title;
  popupDescription.innerText = service.description;
  popupImage.src = service.image;
}

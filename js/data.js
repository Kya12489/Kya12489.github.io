const dataCategories = {
  "fr": [
    {
      "title": "À-propos",
      "Button": [
        {
          "title": "Présentation",
          "content": `
          <p>Je suis actuellement en 1ère année de BTS SIO option SLAM (Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers), spécialisé dans le développement d'applications lourdes et web.</p>
           
            <p>La satisfaction de transformer une idée abstraite en une application fonctionnelle et performante et les défis techniques me motive a apprendre de nouvelles technologies et façons de développer.</p>

            <p><b>Si vous souhaitez en apprendre plus sur moi, ou me contacter, n'hésitez plus, vous pouvez explorer ce site !</b></p>
          `
        },
        {
          "title": "Objectif",
          "content": `Mon objectif principal est de devenir un développeur backend, capable de travailler aussi bien sur des applications desktop complexes que sur des solutions web modernes.`
        },
        {
          "title": "Passions",
          "content": `
            <p><b>Pêcher</b> : je trouve la pêche très agréable et elle me permet de me détendre</p>

            <p><b>Echecs</b> : Jouer aux échecs me permettent de passer du temps tout en réfléchissant pour gagner</p>
          `
        }
      ],
      "script": "js/apropos.js"
    },
    {
      "title": "Competences",
      "Cards": [
        {
          "title": "Web",
          "content": `
            <ul>
              <li>HTML/CSS/JS</li>
              <li>PHP</li>
              <li>WordPress</li>
            </ul>
          `
        },
        {
          "title": "Programmation",
          "content": `
            <ul>
              <li>Python</li>
              <li>C#</li>
              <li>POO</li>
            </ul>
          `
        },
        {
          "title": "Base de données",
          "content": `
            <ul>
              <li>MySQL</li>
              <li>SQL</li>
              <li>MERISE</li>
            </ul>
          `
        },
        {
          "title": "Autre",
          "content": `
            <ul>
              <li>RGPD</li>
              <li>Git</li>
              <li>Docker</li>
            </ul>
          `
        },
      ]
    },
    {
      "title": "Formations",
      "Cards": [
        {
          "title": "BTS SIO option SLAM",
          "debut": "09/2024",
          "fin": "07/2026",
          
          "content": `
          <p><b>Diplôme : en cours</b></p>
          <p>Actuellement étudiant en fin de première année de BTS SIO, option SLAM (Solutions Logicielles et Applications Métiers).
          <p>Dans ce BTS, nous apprenons à développer des applications lourdes, des applications web, à mettre en place des serveurs web, ainsi qu'à appliquer les principes de la <b>cybersécurité</b>.</p> 
          `
        },
        {
          "title": "STI2D option SIN",
          "debut": "09/2022",
          "fin": "07/2024",
          "content": `
            <p><b>Diplôme : BAC STI2D-SIN mention BIEN</b></p>
            <p>
              J'ai passé ma Première et ma Terminale en STI2D-SIN (Sciences et Technologies de l'Industrie et du Développement Durable – Systèmes d'Information et Numérique).
              Dans cette formation, j'ai appris à utiliser des cartes Arduino, divers composants (capteurs, détecteurs, moteurs, LED, etc.), à convertir l'intensité d'un signal en valeur réelle 
              (par exemple : signal d’un thermomètre → température) ainsi qu'à appliquer les lois de l'électricité (loi d'Ohm, etc.). 
            </p>
          `
        }
      ]
    },
    {
      "title": "Projets",
      "Cards": [
        {
          "title": "Pierres Feuilles Ciseaux",
          "debut": "18/05/2025",
          "fin": "27/06/2025",
          "content": `
            <p>Projet du stage de premiere année en BTS SIO. Site web e-commerce créé avec WordPress et WooCommerce pour la micro entreprise Pierres Feuilles Ciseaux.</p>
            <p>Le site e-commerce permet a l'entreprise de vendre leurs produits dans toute la métropole.</p>
          `,
          "tags": ["WordPress","CSS","JS","HTML","PHP","RGPD"],
          "more": "projets/pfc.html",
          "view": { 
            "title": "Visiter le site",
            "src": "https://pierres-feuilles-ciseaux.fr/"
          }
        }
      ]
    },
    {
      "title": "Me contacter",
      "content": `
      <p class="contact-subtitle">N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question</p>
    
    <div class="success-message" id="successMessage">
      ✅ Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
    </div>
    
    <div class="error-message" id="errorMessage">
      ❌ Une erreur s'est produite. Veuillez réessayer ou me contacter directement.
    </div>

    <form id="contactForm" action="https://formspree.io/f/mvgrlgow" method="post">

      <div class="form-group">
        <label for="email">Email *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          class="form-input" 
          placeholder="votre email@exemple.com"
          required
        >
      </div>

      <div class="form-group">
        <label for="subject">Sujet *</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          class="form-input" 
          placeholder="Sujet de votre message"
          required
        >
      </div>

      <div class="form-group">
        <label for="message">Message *</label>
        <textarea 
          id="message" 
          name="message" 
          class="form-textarea" 
          placeholder="Décrivez votre projet, vos besoins ou posez votre question..."
          required
        ></textarea>
      </div>

      <button type="submit" class="submit-btn" id="submitBtn">
        <span id="btnText">Envoyer le message</span>
        <span id="btnLoading" class="loading" style="display: none;"></span>
      </button>
    </form>

    <div class="contact-info">
      <h3>Information sur les données renseigner</h3>
      <p>Conformément au RGPD, les données collectées par ce formulaire servent uniquement afin d'entrer en contact, par mail. Je pourrais être amené à conserver notre prochain échange de mail et les données personnelles afférentes. L'unique finalité de ces données est bien d'entrer en contact et d'échanger. Jamais les données reçues par le biais de ce formulaire ou de nos futurs échanges ne seront utilisées hors de ce contexte, sans votre consentement. Vous bénéficiez d'un droit de suppression de ces mails et de leurs données à tous moments. Il suffit pour cela de me contacter afin que je supprime tous nos échanges. </p>
    </div>
     </section>
      `,
      "script": "js/contact.js"
    }
  ],
  "eng": [
    {
      "title": "About me",
      "Button": [
        {
          "title": "Introduction",
          "content": `
          <p>I am currently in my first year of a BTS SIO (IT Services for Organizations) degree, SLAM option (Software Solutions and Business Applications), specialized in desktop and web application development.</p>
           
          <p>The satisfaction of transforming an abstract idea into a functional and efficient application, along with technical challenges, motivates me to learn new technologies and development approaches.</p>

          <p><b>If you would like to know more about me or get in touch, feel free to explore this website!</b></p>
          `
        },
        {
          "title": "Goal",
          "content": `My main goal is to become a backend developer, able to work both on complex desktop applications and modern web solutions.`
        },
        {
          "title": "Passions",
          "content": `
            <p><b>Fishing</b>: I find fishing very relaxing and it helps me unwind.</p>

            <p><b>Chess</b>: Playing chess allows me to spend time while challenging my mind to win.</p>
          `
        }
      ],
      "script": "js/apropos.js"
    },
    {
      "title": "Skills",
      "Cards": [
        {
          "title": "Web",
          "content": `
            <ul>
              <li>HTML/CSS/JS</li>
              <li>PHP</li>
              <li>WordPress</li>
            </ul>
          `
        },
        {
          "title": "Programming",
          "content": `
            <ul>
              <li>Python</li>
              <li>C#</li>
              <li>OOP</li>
            </ul>
          `
        },
        {
          "title": "Databases",
          "content": `
            <ul>
              <li>MySQL</li>
              <li>SQL</li>
              <li>MERISE</li>
            </ul>
          `
        },
        {
          "title": "Other",
          "content": `
            <ul>
              <li>GDPR</li>
              <li>Git</li>
              <li>Docker</li>
            </ul>
          `
        },
      ]
    },
    {
      "title": "Education",
      "Cards": [
        {
          "title": "BTS SIO SLAM option",
          "debut": "09/2024",
          "fin": "07/2026",
          "content": `
          <p><b>Degree: In progress</b></p>
          <p>Currently a first-year student in BTS SIO, SLAM option (Software Solutions and Business Applications).</p>
          <p>In this course, we learn to develop desktop and web applications, set up web servers, and apply <b>cybersecurity</b> principles.</p> 
          `
        },
        {
          "title": "STI2D SIN option",
          "debut": "09/2022",
          "fin": "07/2024",
          "content": `
            <p><b>Degree: STI2D-SIN High School Diploma with Merit</b></p>
            <p>
              I completed my junior and senior years in STI2D-SIN (Science and Technology of Industry and Sustainable Development – Information and Digital Systems).
              In this program, I learned how to use Arduino boards, various components (sensors, detectors, motors, LEDs, etc.), convert signal intensity into real values 
              (e.g., thermometer signal → temperature), and apply electricity laws (Ohm’s law, etc.). 
            </p>
          `
        }
      ]
    },
    {
      "title": "Projects",
      "Cards": [
        {
          "title": "Pierres Feuilles Ciseaux",
          "debut": "18/05/2025",
          "fin": "27/06/2025",
          "content": `
            <p>First-year BTS SIO internship project. An e-commerce website built with WordPress and WooCommerce for the small business "Pierres Feuilles Ciseaux".</p>
            <p>The e-commerce site allows the company to sell its products throughout the country.</p>
          `,
          "tags": ["WordPress","CSS","JS","HTML","PHP","GDPR"],
          "more": "projets/pfc.html",
          "view": { 
            "title": "Visit website",
            "src": "https://pierres-feuilles-ciseaux.fr/"
          }
        }
      ]
    },
    {
      "title": "Contact me",
      "content": `
      <p class="contact-subtitle">Feel free to contact me to discuss your projects or for any questions</p>
    
      <div class="success-message" id="successMessage">
        ✅ Your message has been sent successfully! I will get back to you shortly.
      </div>
    
      <div class="error-message" id="errorMessage">
        ❌ An error occurred. Please try again or contact me directly.
      </div>

      <form id="contactForm" action="https://formspree.io/f/mvgrlgow" method="post">

        <div class="form-group">
          <label for="email">Email *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            class="form-input" 
            placeholder="your email@example.com"
            required
          >
        </div>

        <div class="form-group">
          <label for="subject">Subject *</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            class="form-input" 
            placeholder="Subject of your message"
            required
          >
        </div>

        <div class="form-group">
          <label for="message">Message *</label>
          <textarea 
            id="message" 
            name="message" 
            class="form-textarea" 
            placeholder="Describe your project, your needs, or ask your question..."
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" id="submitBtn">
          <span id="btnText">Send message</span>
          <span id="btnLoading" class="loading" style="display: none;"></span>
        </button>
      </form>

      <div class="contact-info">
        <h3>Information about submitted data</h3>
        <p>In compliance with GDPR, the data collected through this form is only used to establish contact by email. I may keep our future email exchanges and related personal data. The sole purpose of this data is to communicate. At no time will the data received through this form or our email exchanges be used outside this context without your consent. You have the right to request the deletion of these emails and their data at any time. Simply contact me to request the deletion of all our exchanges.</p>
      </div>
      `,
      "script": "js/contact.js"
    }
  ]
};

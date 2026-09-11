// =========================
// LOCAL BUSINESS AUDIT TOOL
// =========================


// GET FORM ELEMENTS

const auditForm = document.getElementById("auditForm");

const businessNameInput =
  document.getElementById("businessName");

const websiteInput =
  document.getElementById("website");

const locationInput =
  document.getElementById("location");

const categoryInput =
  document.getElementById("category");


// RESULTS ELEMENTS

const resultsSection =
  document.getElementById("results");

const resultBusinessName =
  document.getElementById("resultBusinessName");

const overallScore =
  document.getElementById("overallScore");


// HIDE RESULTS INITIALLY

resultsSection.style.display = "none";


// FORM SUBMIT

auditForm.addEventListener("submit", function (event) {

  event.preventDefault();


  // GET USER DATA

  const businessName =
    businessNameInput.value.trim();

  const website =
    websiteInput.value.trim();

  const location =
    locationInput.value.trim();

  const category =
    categoryInput.value;


  // VALIDATION

  if (!businessName) {

    alert("Please enter your business name.");

    return;

  }


  if (!location) {

    alert("Please enter your business location.");

    return;

  }


  // =========================
  // CALCULATE AUDIT SCORE
  // =========================


  let websiteScore = 50;
  let seoScore = 45;
  let localSeoScore = 50;
  let socialScore = 40;


  // WEBSITE PROVIDED

  if (website) {

    websiteScore += 25;

    seoScore += 10;

  }


  // LOCATION PROVIDED

  if (location) {

    localSeoScore += 20;

  }


  // CATEGORY PROVIDED

  if (category) {

    seoScore += 10;

    localSeoScore += 10;

  }


  // LIMIT SCORES

  websiteScore =
    Math.min(websiteScore, 95);

  seoScore =
    Math.min(seoScore, 95);

  localSeoScore =
    Math.min(localSeoScore, 95);

  socialScore =
    Math.min(socialScore, 90);


  // OVERALL SCORE

  const totalScore =
    Math.round(
      (
        websiteScore +
        seoScore +
        localSeoScore +
        socialScore
      ) / 4
    );


  // =========================
  // UPDATE RESULTS
  // =========================


  resultBusinessName.textContent =
    businessName + " Audit Report";


  overallScore.textContent =
    totalScore;


  // UPDATE SCORE CARDS

  const scores =
    document.querySelectorAll(
      ".score-card .score"
    );


  scores[0].textContent =
    websiteScore;

  scores[1].textContent =
    seoScore;

  scores[2].textContent =
    localSeoScore;

  scores[3].textContent =
    socialScore;


  // =========================
  // UPDATE RECOMMENDATIONS
  // =========================


  const recommendations =
    document.querySelector(
      ".recommendations"
    );


  recommendations.innerHTML = `
  
    <h2>
      Recommended Next Steps
    </h2>


    <div class="recommendation-item">

      <div class="number">
        01
      </div>

      <div>

        <h3>
          Improve Your Website
        </h3>

        <p>
          ${
            website
              ? "Review your website speed, mobile experience and service pages to improve conversions."
              : "Create a professional, mobile-friendly website so customers can learn about your business and contact you easily."
          }
        </p>

      </div>

    </div>


    <div class="recommendation-item">

      <div class="number">
        02
      </div>

      <div>

        <h3>
          Strengthen Local SEO
        </h3>

        <p>
          Optimize your Google Business Profile for ${location}.
          Add accurate business information, photos, services and customer reviews.
        </p>

      </div>

    </div>


    <div class="recommendation-item">

      <div class="number">
        03
      </div>

      <div>

        <h3>
          Improve Organic Visibility
        </h3>

        <p>
          ${
            category
              ? `Create useful ${category} content targeting customers searching for services in ${location}.`
              : `Research local keywords and create content focused on customers in ${location}.`
          }
        </p>

      </div>

    </div>


    <div class="recommendation-item">

      <div class="number">
        04
      </div>

      <div>

        <h3>
          Build Social Proof
        </h3>

        <p>
          Collect genuine customer reviews and showcase testimonials across your website and online profiles.
        </p>

      </div>

    </div>

  `;


  // SHOW RESULTS

  resultsSection.style.display =
    "block";


  // SCROLL TO RESULTS

  setTimeout(function () {

    resultsSection.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  }, 200);


});


// =========================
// SMOOTH NAVIGATION
// =========================


document.querySelectorAll(
  'a[href^="#"]'
).forEach(function (link) {

  link.addEventListener(
    "click",

    function (event) {

      const target =
        document.querySelector(
          this.getAttribute("href")
        );


      if (target) {

        event.preventDefault();


        target.scrollIntoView({

          behavior: "smooth"

        });

      }

    }

  );

});

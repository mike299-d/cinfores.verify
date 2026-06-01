document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const checkItems = document.querySelectorAll(".check-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      // 1. Remove active tracking class from previous active selector button
      document.querySelector(".filter-btn.active").classList.remove("active");

      // 2. Add active tracking style class to current selector target button
      this.classList.add("active");

      // 3. Extract target filter state string parameter
      const filterValue = this.getAttribute("data-filter");

      // 4. Evaluate each dataset element state and toggle item row visibility flags
      checkItems.forEach(item => {
        const itemStatus = item.getAttribute("data-status");

        if (filterValue === "all" || itemStatus === filterValue) {
          // Show items matching the selection
          item.classList.remove("d-none");
        } else {
          // Hide mismatched items
          item.classList.add("d-none");
        }
      });
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
    const totalSteps = 4;
    let currentStepIndex = 1;

    function proceedToNextVerificationStep() {
        if (currentStepIndex <= totalSteps) {
            const currentRow = document.getElementById(`step-${currentStepIndex}`);
            
            // 1. Mark current row as fully verified (done)
            if (currentRow) {
                currentRow.classList.remove('active');
                currentRow.classList.add('done');
            }

            // 2. Move index forward
            currentStepIndex++;

            // 3. Set the next row to active status
            const nextRow = document.getElementById(`step-${currentStepIndex}`);
            if (nextRow) {
                nextRow.classList.add('active');
                // Call again after 1.8 seconds delay
                setTimeout(proceedToNextVerificationStep, 1800);
            } else {
                // If no nextRow exists, the entire verification sequence is complete
                handleVerificationComplete();
            }
        }
    }

    function handleVerificationComplete() {
        console.log("All database verification checks passed!");
        // Here you would typically route the user or change the view:
        // window.location.href = "/results?id=A1-1234";
    }

    // Trigger the sequence initial delay shortly after page load
    setTimeout(proceedToNextVerificationStep, 2000);
});



document.querySelector('form').addEventListener('submit', function(event) {

  event.preventDefault();
  this.classList.add('was-validated');

  if (this.checkValidity()) {
    let container = document.querySelector('.js-container');

   
    let page2 = ` <div class="container">
    <div class="row ">
        <div class="col-12 col-md-12 mt-4 d-flex justify-content-center w-100">
            <div class="card border-0 shadow-sm rounded-5 d-flex text-nowrap align-items-center" style="width:500px; height:380px;">
                <div class="card-body w-100 ">
                    <div class="w-100 d-flex justify-content-center">
                        <div class="progress-ring mt-3">

                        </div>
                         
                        
                    </div>

                    <div class="w-100 d-flex flex-column align-items-center justify-content-center mt-3">
                        <h5 style="color: #1a3a2a;">A1 - 1234</h5>
                         
                    </div>
                    <div class="d-flex w-100 justify-content-center align-items-center">
                      <p class="text-muted">Querying NAFDAC registration database</p>

                    </div>      
                    <div class="w-100 d-flex justify-content-center align-items-center mt-3">
                        <div class="">
             
                         <div class="d-flex">
                               <div class="indicator-box"><div class="parent" style="width: 20px; height: 20px; border: 2px solid #1a5c2e; border-radius: 50%;">
                                
                               </div></div>
                               <span class="text-muted ms-2 js-text">Validating number format</span>
                         </div>
                          <div class="d-flex mt-3 text-muted">
                            <div class="indicator-box">
                                <div class="parent" style="width: 20px; height: 20px; border: 2px solid #1a5c2e; border-radius: 50%;">
                                
                                </div>
                            </div>
                               <span class="text-muted ms-2 js-text"> Searching product registry  format</span>
                         </div>
                          <div class="d-flex mt-3">
                               <div class="indicator-box">
                                <div class="parent" style="width: 20px; height: 20px; border: 2px solid #1a5c2e; border-radius: 50%;">                               
                               </div>
                               </div>
                               <span class="text-muted ms-2 js-text">Verifying company records</span>
                         </div>
                          <div class="d-flex mt-3">
                                <div class="indicator-box">
                                    <div class="parent" style="width: 20px; height: 20px; border: 2px solid #1a5c2e; border-radius: 50%;">
                                
                               </div>
                                </div>
                               <span class="text-muted ms-2 js-text"> Checking expiry and status</span>
                         </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>`;

   let page3=`
   <div>
   <div class="w-100 d-flex row-gap-4">
   <div class="container mt-4" style="padding-left:1%; ">
          <div class="row g-5 w-100">
            <div class="col-md-6 ">

              
             <div class="card border-1  shadow-sm justify-content-start align-items-center rounded-5" style="width: 486px; height: 1000px; ">
             
          <div class="card border-0 rounded-5 shadow-sm  d-flex justify-content-start align-items-center mt-4" style="background-color: #edf4f0; width: 460px;">
          <div class="card-body p-4 d-flex align-items-center">
        
        <div class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-4 ms-1" style="width: 64px; height: 64px; background-color: #14532d;">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 16 16" style="stroke: white; stroke-width: 0.5px;">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"></path>
          </svg>
        </div>

        <div class="flex-grow-1">
        <span class="d-block fw-bold tracking-wide text-uppercase mb-1" style="color: #14532d; font-size: 0.78rem; letter-spacing: 0.05em;">
          Product Verified and Authentic
        </span>
        
        <h4 class="fw-bold text-dark mb-1.5 text-nowrap" style="font-size: 1.3rem; letter-spacing: -0.01em;  ">
          Emzor Paracetamol 500g
        </h4>
        
        <p class="text-muted mb-0 fw-medium " style="font-size: 0.7rem; color: #556b5c !important;">
          Verified 19 May 2024, 11:43 WAT <span class="mx-0 text-muted opacity-50">•</span> Ref: #NG-2024-00847
        </p>
      </div>

    </div>
  </div>
  
  
  <div class=" container d-flex justify-content-between align-items-center border-bottom  border-1 border-color-secondary mt-4 " style="height: 60px; width: 460px;">
    <span class="text-muted text-color-secondary">NAFDAC number</span>
     <span class="" style="color: #1a5c2e;">A1-1234</span>
  </div>




    <div class=" container d-flex justify-content-between align-items-center border-bottom  border-1 border-color-secondary mt-4 " style="height: 60px; width: 460px;">
    <span class="text-muted text-color-secondary">Product/brand name</span>
     <span class="fw-bold" style="font-size:15px;">Emzor Paracetamol 500mg</span>
  </div>


    <div class=" container d-flex justify-content-between align-items-center border-bottom  border-1 border-color-secondary mt-4 " style="height: 60px; width: 460px;">
    <span class="text-muted text-color-secondary">Product category</span>
     <span class=" fw-bold" style="font-size: 15px;">Drug · Over the Counter </span>
  </div>


    <div class=" container d-flex justify-content-between align-items-center border-bottom  border-1 border-color-secondary mt-4 " style="height: 60px; width: 460px;">
    <span class="text-muted text-color-secondary">Manufacturing company</span>
     <span class="fw-bold " style="font-size: 15px;">Emzor Pharmaceutical Ind.Ltd.</span>
  </div>

    <div class=" container d-flex justify-content-between align-items-center border-bottom  border-1 border-color-secondary mt-4 " style="height: 60px; width: 460px;">
    <span class="text-muted text-color-secondary">Company location</span>
     <span class="fw-bold" style="font-size: 15px;">Plot 3,Abimbola way,Isolo,Lagos</span>
  </div>

    <div class=" container d-flex justify-content-between align-items-center border-bottom  border-1 border-color-secondary mt-4 " style="height: 60px; width: 460px;">
    <span class="text-muted text-color-secondary">Date of registration</span>
     <span class="fw-bold" style="font-size: 15px;">14 March 2019</span>
  </div>
      <div class=" container d-flex justify-content-between align-items-center border-bottom  border-1 border-color-secondary mt-4 " style="height: 60px; width: 460px;">
    <span class="text-muted text-color-secondary">Registration expiry</span>
   <span class="badge rounded-pill " style=" background-color: #eaf3e8; color: #14532d; padding: 12px;">Valid Until March 2026</span>
  </div>


  

    <div class=" container d-flex justify-content-between align-items-center border-bottom  border-1 border-color-secondary mt-4 " style="height: 60px; width: 460px;">
    <span class="text-muted text-color-secondary">Reported by </span>
     <span class="fw-bold" style="font-size: 15px;">Justice Nweke · Port Harcourt</span>
  </div>

  <div class="card rounded-5 shadow-sm  d-flex justify-content-center align-items-center mt-4" style="background-color: #fdf4f4;  width: 460px; height: 150px;">
    <div class="container d-flex justify-content-center align-items-center">
   <button class="btn rounded-3" type="button" style="width: 198px; height: 50px; background-color: #1a5c2e; color: white;">Share result</button>
   <button class=" btn btn-outline-danger ms-2 rounded-2" type="button" style="width: 198px; height: 50px;"> Report Concern</button>
   </div>
  </div>
     
  
  
  

   
  </div>  
  </div>      


       <div class="col-md-6" style="padding-left:12%;">
               <div class="card border-1 shadow-sm" style="width: 305px; height:164px ; border-radius:32px ;">
                <div class="card-body">
                  <div class="card-text">
                    <h4 class="text-muted " style="font-size: 20px;">NAFDAC HOTLINE</h4>
                    <h2 class="fw-bold" style="color: #1a5c2e;"> 0800 <span>162</span>  <span>3322</span></h2>
                    <h5 class="text-muted fw-semibold text-color-secondary small">Available 24/7 for emergencies</h5>
                  </div>
                </div>
               </div>
            </div>


       

        </div></div></div></div>`


    container.innerHTML = page2;

    let loaders = document.querySelectorAll('.indicator-box');
    let text = document.querySelectorAll('.js-text');
    let count = 0;



    let timer = setInterval(function() {
      
      if (count < loaders.length) {
        loaders[count].innerHTML =`<div class="parent" style="width: 20px; height: 20px; background: #1a3a2a; border-radius: 50%;"></div>`;
        text[count].classList.remove('text-muted');
        text[count].style.color = '#1a5c2e'
        text[count].classList.add('fw-medium');
        count++; 
      } else {
        clearInterval(timer); 
        container.innerHTML = page3;
      }

    }, 1000); 

  } else {
     event.stopPropagation();
     return;
  }
});

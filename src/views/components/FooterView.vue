<template>
  <q-footer  class="bg-grey-5 text-white">

    <div class="row items-center justify-between">
      <div class="col-sm-6 col-lg-4">
        <div class="row q-py-md">       
            <div class="row items-center">
              <img
                src="@/assets/img/logo/logo.png"
                style="width: 40px; height: 35px"
                class="ml-3"
              />2023 Maxilife.All Rights Reserved.
            </div>
             
         </div>
        </div>
     
      
      <div class="col-lg-4 gt-sm"></div>
      <div class="col-sm-6 col-lg-4">
        <div class="row justify-end q-px-lg">        
          <a href="https://www.facebook.com/maxilife.multispecialty.clinic" target="_blank">
          <div class="p-0.5 rounded-full m-2 border-1">
         
            <svg
              fill="#ffffff"
              height="17px"
              width="18px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 310 310"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="XMLID_834_">
                  <path
                    id="XMLID_835_"
                    d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                  ></path>
                </g>
              </g>
            </svg>
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" class="bg-primary">
                    <strong>Follow us on Facebook</strong>                  
                </q-tooltip>
          </div>
          </a>
          <div class="m-2"><q-icon name="email" size="21px" />
 
               <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" class="bg-primary">
                    Email us here:<br/> <strong>maxilife_clinic2018@yahoo.com</strong>                  
                </q-tooltip>
           </div>
          <div class="m-2"><q-icon name="phone" size="21px" />
                <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" class="bg-primary">
                    Contact number:<br/> <strong>0933 818 5130</strong>                  
                </q-tooltip>
          </div>
         
        </div>
     
      </div>
    </div>
  
    
  </q-footer>
</template>

<script>
export default {};
</script>


<style scoped>

.q-footer img {
  margin-right: 10px;
  margin-left: 5px; 
}


</style>
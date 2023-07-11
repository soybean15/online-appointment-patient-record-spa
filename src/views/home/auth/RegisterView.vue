<template>

<section class=" bg-blue-900">
  <div class="flex flex-col items-end p-10  md:items-center md:h-screen ">
    
      <div class="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-5 sm:max-w-md   xl:p-0 border-blue-400">
          <div class="p-4 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold   text-blue-900 md:text-2xl my-7">
                  Create New Account
              </h1>
              <form  class="space-y-4 md:space-y-6" action="#">
                 
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 text-left ">Name</label>
                      <input type="name"  name="name" id="name" placeholder="name"
                      class="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600  focus:bg-white block w-full p-2.5 ">
                 
                  </div>

                   <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900  text-left"> Email</label>
                      <input type="email" name="email" id="email" placeholder="email"
                      class="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  focus:bg-white block w-full p-2.5 ">
                  </div>

                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 text-left">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" 
                      class="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  focus:bg-white block w-full p-2.5 ">
                   </div>

                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 text-left">Confirm password</label>
                      <input type="confirm-password"  name="confirm-password" id="confirm-password" placeholder="••••••••" 
                      class="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  focus:bg-white block w-full p-2.5 ">
                  </div>
                  <!-- Terms and Conditions -->
                  <div class="flex items-start my-5">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300">
                        <div class="ml-3 text-sm">
                            <label for="terms" class=" text-gray-400 ">I Accept the <a class="font-medium text-primary-700 hover:underline hover:text-blue-500" href="#">Terms and Conditions</a></label>
                        </div>
                      </div>
                  </div>

            
                  <button type="submit" class="w-full text-blue-700 font-bold  bg-blue-200 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg text-sm  px-5 py-2.5 text-center ">Sign Up</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400 my-20">
                      Already have an account? <router-link to="/login" class="font-medium text-primary-600 hover:underline text-blue-400 ">Login here</router-link> 
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  
</template>

<script>
export default {

}
</script>

<style>
.input{
    background-color: gray;
    border-color: grey;
}
</style>
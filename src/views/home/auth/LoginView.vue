<template>
   <div>
  <div class="flex h-screen w-full  bg-blue-950">
  
    
   <div class="w-full bg-center bg-cover h-screen  absolute opacity-40 bg-sky-950"></div>
    <div >
      <div></div>
      <div class="flex items-start h-screen justify-end absolute w-full shadow-4xl mt-20">
        <div class=""></div>
        <form
          @submit.prevent="authStore.handleLogin"
          class="w-96 lg:mx-50 h-2/3  px-5  mr-24 rounded-xl  opacity-100 items-center justify-center bg-white border-2 border-gray-200 shadow-3xl">
          
          <div class="flex justify-center h-20 mt-5" >
            <img src="../../../assets/logo.png" class="">
          </div>
          <div class="mt-5">
            <h1>Welcome Back!</h1>
            <!-- <font-awesome-icon icon="fa-solid fa-user-secret"/> -->
          </div>
          <div class="p-4 mt-4 my-1">
            <label class="flex justify-start mb-1 text-sm text-gray-800">Email</label>
            <input
              class="input border-b-2  p-3 w-80 border-gray-400 text-sm pl-3 bg-white"
              type="email"
             
              placeholder="Type your email"
            />
          </div>
          <div class="p-4 my-1 ">
            <label class="flex justify-start text-sm text-gray-800">Password</label>
            <input
              class="input border-b-2 p-3 w-80 border-gray-400 text-sm pl-3 bg-white"
              type="password"
            
              placeholder="Type your password"/>
          </div>


          <div class="flex items-center justify-between mt-5">
            <div class="flex items-start">
              <div class="flex items-center h-5 ml-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                  required=""
                />
              </div>
              <div class="ml-2 text-sm">
                <label for="remember" class="text-gray-400 "
                  >Remember me</label
                >
              </div>
            </div>
            <a
              href="#"
              class="text-sm font-medium text-gray-400 hover:underline hover:text-blue-500 dark:text-primary-500 my-2 mr-4"
              >Forgot password?</a
            >
          </div>
          <button type="submit" class="w-full text-blue-700  my-5 bg-blue-200 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign In</button>
                
          <p class="text-sm font-light text-gray-500 dark:text-gray-400 my-4">
            Don’t have an account yet?
            <a href="#" class="font-medium text-blue-400 hover:underline dark:text-primary-500" >Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<!doctype html>
<html lang="en">
  <head>
        <?php
            include 'includes/head.php'; 
        ?>  
  </head>
  <body class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
    <div class="min-h-screen w-full bg-gray-50/50">

        <?php
            include 'includes/navbar.php'; 
        ?>  
      
      <div class="p-4 xl:ml-80">

          <?php
              include 'includes/header.php'; 
          ?> 


          <div class="max-w-[500px] mx-auto bg-white rounded-md p-8 shadow-md">

              <div id="errorBlock" class="hidden flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">Error!</span> <span id="errorMessage"></span>
                </div>
              </div>
              <div id="successBlock" class="hidden flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">Success!</span> <span id="successMessage"></span>
                </div>
              </div>



              <h2 class="text-2xl font-bold mb-6 text-center">Create Employee</h2>
              <form>
                  <div class="mb-4">
                      <label for="employee_id" class="block text-gray-700 font-bold mb-2">Employee ID:</label>
                      <input type="text" id="employee_id" name="employee_id" class="form-input w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter Employee ID" required>
                  </div>
                  <div class="mb-4">
                      <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
                      <input type="text" id="name" name="name" class="form-input w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter Name" required>
                  </div>
                  <div class="mb-4">
                      <label for="father" class="block text-gray-700 font-bold mb-2">Father Name:</label>
                      <input type="text" id="father" name="father" class="form-input w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter Father Name" required>
                  </div>
                  <div class="mb-4">
                      <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                      <input type="email" id="email" name="email" class="form-input w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter Email" required>
                  </div>
                  <div class="mb-4">
                      <label for="phone" class="block text-gray-700 font-bold mb-2">Phone</label>
                      <input type="text" id="phone" name="phone" class="form-input w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter Phone Number" required>
                  </div>
                  <div class="mb-4">
                      <label for="nid" class="block text-gray-700 font-bold mb-2">Nid Number</label>
                      <input type="text" id="nid" name="nid" class="form-input w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter Phone Number" required>
                  </div>
                  <div class="mt-6">
                    
<button id="createBtn" type="submit" class="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center justify-center text-white">
    <svg id="spinner" aria-hidden="true" role="status" class="hidden inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    <span id="buttonText">Submit</span>
</button>
                  </div>
              </form>
          </div>

          <?php
              include 'includes/footer.php'; 
          ?> 
      </div>
    </div>
  </body>
</html>

<!doctype html>
<html lang="en">
  <head>
      <?php
          include 'includes/head.php'; 
      ?>  
  </head>
  <body class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
    <div class="min-h-screen  w-full bg-gray-50/50">

        <?php
            include 'includes/navbar.php'; 
        ?>  
  
      <div class="p-4 xl:ml-80">
  
          <?php
              include 'includes/header.php'; 
          ?> 


          <div class="w-full mx-auto bg-white rounded-md p-8 shadow-md">
            <h2 class="mb-6 text-2xl font-bold text-center">Employee Information</h2>
            <div class="overflow-x-auto">
              <table class="w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="border px-4 py-2">Employee ID</th>
                    <th class="border px-4 py-2">Name</th>
                    <th class="border px-4 py-2">Father's Name</th>
                    <th class="border px-4 py-2">Email</th>
                    <th class="border px-4 py-2">Phone</th>
                    <th class="border px-4 py-2">NID Number</th>
                  </tr>
                </thead>
                <tbody id="employeeData">
                </tbody>
              </table>
            </div>
          </div>

          <?php
              include 'includes/footer.php'; 
          ?> 

      </div>
    </div>

    <script type="text/javascript">
      $(document).ready(function(){
          getAllEmployees();
      });
    </script>

  </body>
</html>

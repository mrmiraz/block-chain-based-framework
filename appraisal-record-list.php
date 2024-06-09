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
            <h2 class="mb-6 text-2xl font-bold text-center">Appraisal Records</h2>
            <div class="overflow-x-auto">
              <table class="w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="border px-4 py-2">Employee ID</th>
                    <th class="border px-4 py-2">Start Date</th>
                    <th class="border px-4 py-2">End Date</th>
                    <th class="border px-4 py-2">Duties</th>
                    <th class="border px-4 py-2">Skills</th>
                    <th class="border px-4 py-2">Skill Point</th>
                    <th class="border px-4 py-2">Accuracy Point</th>
                    <th class="border px-4 py-2">Spirit Point</th>
                    <th class="border px-4 py-2">Attendance</th>
                  </tr>
                </thead>
                <tbody id="appraisalData">
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
          getAllAppraisals();
      });
    </script>


  </body>
</html>

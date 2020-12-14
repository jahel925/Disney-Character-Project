var counter = 0;

$("button").click(function(){
    counter = counter + 1;
    $(".counter").text("This quiz has been taken " + counter + "times");
    
    let age = $(".age").val();
	let dessert = $(".dessert").val();
    
    if (parseInt(age)>=18 && dessert.toLowerCase() === "Lemon tart")
		{
             $(".character").show();
            $(".character").text ("You are Ursala!");
             $(".character").append('<img  src="https://media3.giphy.com/media/onZIkheksIuje/giphy.gif?cid=ecf05e4734geis321242dujfozrrq8kuu8v1kkpduy4frm91&rid=giphy.gif">');
			}
    
    else if (parseInt(age)<18 && dessert.toLowerCase() === "Lemon tart")
		{
            $(".character").show();
            $(".character").text ("You are Sebastian the Crab!");
             $(".character").append("<img   src='https://media2.giphy.com/media/QuPDU2hAZF6vu/giphy.gif?cid=ecf05e47sawaxgcll1fp90jkw3b7soxh20p8k0y6hoxqzq9p&rid=giphy.gif'>");
			}

	else if (parseInt(age)>=18 && dessert.toLowerCase() === "Corn muffins"){
         $(".character").show();
   		$(".character").text ("You are Goofy!");
        $(".character").append("<img  src='https://media3.giphy.com/media/wJoDQt3uMfXW0/giphy.gif?cid=ecf05e47wa8rwwo6kr9sur3ccx5sp6eb6978jor4rzu5g7zi&rid=giphy.gif'>");
}

  else if (parseInt(age)<18 && dessert.toLowerCase() === "Corn muffins"){
         $(".character").show();
   		$(".character").text ("You are Cruella de vil!");
        $(".character").append("<img src='https://media4.giphy.com/media/lzVWF3SaGvGc8/giphy.gif?cid=ecf05e47a1js03732oxx6uggox0qlpugsex8reoyn8d1frpz&rid=giphy.gif'>");
}
    else if (parseInt(age)<18 && dessert.toLowerCase() === "Ice cream"){
        $(".character").show();
   		$(".character").text ("You are Russell!");
        $(".character").append("<img  src='https://media1.giphy.com/media/J6Y87I5nxKCuA/giphy.gif?cid=ecf05e47159eefde203a8e1dd263054c66668b282aff12db&rid=giphy.gif'>");
}
  
  
     else if (parseInt(age)>=18 && dessert.toLowerCase() === "Ice cream"){
          $(".character").show();
       	$(".character").text ("You are Elsa!");
        $(".character").append('<img   src="https://media3.giphy.com/media/6ym6xK7Omq9Ak/giphy.gif?cid=ecf05e47f508d624e0bd97642ec3a8949a586a725f603f2e&rid=giphy.gif">');
}

});

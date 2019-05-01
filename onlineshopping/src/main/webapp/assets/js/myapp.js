$(function(){
	
	switch(menu){
	
	case 'About us':
		$('#about').addClass('active');
		break;
		
	case 'Contact us':
		$('#contact').addClass('active');
		break;
		
	case 'All Products':
		$('#listProducts').addClass('active');
		break;
		
		
	Default:
		$('#listProducts').addClass('active');
		break;
	
	}
}
		
);





function	initializeRenderers() {
	console.log("initializeRenderers");
	  if (r1) {
	    return;
	  }

	  // create and initialize a 3D renderer
	  r1 = new X.renderer3D();
	  r1.container = 'rend1';
	  r1.init();
	  r1.camera.position = [0, 0, 300];
	  
	  r2 = new X.renderer2D();
	  r2.container = 'rend2';
	  r2.orientation = 'X';
	  r2.init();
	  
	  //r2.camera.up = [0, 1,0]

	  r3 = new X.renderer2D();
	  r3.container = 'rend3';
	  r3.orientation = 'Y';
	  r3.init();

	  r4 = new X.renderer2D();
	  r4.container = 'rend4';
	  r4.orientation = 'Z';
	  r4.init();
	  
/*
	  // create the left hemisphere mesh
	  var lh = new X.mesh();
	  // .. attach a Freesurfer .smoothwm mesh
	  lh.file = 'http://x.babymri.org/?lh.smoothwm';
	 //lh.file = _inputData.file;
	  // change the color to a smooth red
	  lh.color = [0.7, 0.2, 0.2];
	  // add some transparency
	  lh.opacity = 0.6;

//	  alert(JSON.stringify(lh, null, 4));

	    // ... and for the right hemisphere
	  var rh = new X.mesh();
	  rh.file = 'http://x.babymri.org/?rh.smoothwm';
	  // a smooth green color for this one
	  rh.color = [0, 0.7, 0];
	  // add some transparency
	  rh.opacity = 0.6;

*/
	r1.onShowtime = function() {
    
	    window.console.log('Loading completed.');
	    
	    
	    if (_inputData.brainMask.file != null) {

	       	r2.add(brainMask);
		    r3.add(brainMask);
		    r4.add(brainMask);

		    r2.rend();
		    r3.rend();
		    r4.rend();
	      
	    }  
  
	}
}

function parse(_inputData){
	console.log("enter parse(data)");
  
	// initialize renderers
	initializeRenderers();

	brainMask = new X.volume();
	brainMask.file = _inputData['brainMask']['file'].name;
	brainMask.filedata = _inputData['brainMask']['filedata'];


	console.log("volume.file",brainMask.filedata);

	r1.add(brainMask);	

	r1.render(); 

 	r1.onShowtime = function(){
 		window.console.log('Loading completed.');
 		
 		if(_inputData.brainMask.file !=null){
 			r2.add(brainMask);
 			r3.add(brainMask);
 			r4.add(brainMask);

 			r2.render();
 			r3.render();
 			r4.render();
 		}
 		
 	}  

}


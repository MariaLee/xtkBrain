function	initializeRenderers() {
	console.log("initializeRenderers");
//	  if (r1) {
//	    return;
//	  }

	  // create and initialize a 3D renderer
	  r1 = new X.renderer3D();
	  r1.container = 'rend1';
	  r1.init();
	  r1.camera.position = [0, 0, -200];
	//  r1.camera.up = [0, 1, 0];
	  
	  r2 = new X.renderer3D();
	  r2.container = 'rend2';
	  r2.init();
	  r2.camera.position = [200,0,0];
	  //r2.camera.up = [0, 1,0]

	  r3 = new X.renderer3D();
	  r3.container = 'rend3';
	  r3.init();
	  r3.camera.position = [0, 200, 0];

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
      
      // r1.add(brainMask);
      // r1.render();
      
    }
	  
//	  r1.add(lh); // add the mesh to the renderer
//	  r1.add(rh);
	  // start the loading of the .VTK file and display it on renderer r1.
		  // once the file was fully loaded, the r1.onShowtime function is executed
		 // r1.render();
		  /*

	  //the onShowtime function gets executed, once the renderer r1 completely loaded the .VTK file;
	  r1.onShowtime = function(){
	  	//since the mesh was loaded , we add it now to the other renderers
	  	//this way, the .vtk file is loaded only once.
	  	r2.add(lh);
	  	r2.add(rh);
	  	r3.add(lh);
	  	r3.add(rh);

	  	r2.render();
	  	r3.render();
	  }
	  */

	  
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
	console.log("OOKKKK?");

	r1.render(); 

 	r1.onShowtime = function(){
 		window.console.log('Loading completed.');
 		/*
 		if(_inputData.brainMask.file !=null){
 			r2.add(brainMask);
 			r3.add(brainMask);

 			r2.render();
 			r3.render();
 		}
 		*/
 	}  

}


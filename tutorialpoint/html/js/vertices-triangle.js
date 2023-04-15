         /*================Creating a canvas=================*/
         var canvas = document.getElementById('my_Canvas');
         var gl = canvas.getContext('experimental-webgl'); 

         /*==========Defining and storing the geometry=======*/

         var vertices = [
            -0.5,  0.5,  0.0,
             0.5,  0.5,  0.0,
			 0.0,  0.0,  0.0,
			 0.0, -0.3,  0.0,
             0.2, -0.5,  0.0, 
            -0.2, -0.5,  0.0
		];
		 
		var colors = [
			1,0,0, 0,1,0, 0,0,1, 
		    1,1,0, 0,1,1, 1,0,1
		];
		 
		 // Triangle requires vertices
		 var indices = [0,1,2,3,4,5];

		 // VERTEX BUFFER 
         // Create an empty buffer object to store the vertex buffer
         var vertex_buffer = gl.createBuffer();
         //Bind appropriate array buffer to it
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
         // Pass the vertex data to the buffer
         gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
         // Unbind the buffer
         gl.bindBuffer(gl.ARRAY_BUFFER, null);

		 // INDEX BUFFER
         // Create an empty buffer object to store Index buffer
         var Index_Buffer = gl.createBuffer();
         // Bind appropriate array buffer to it
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
         // Pass the vertex data to the buffer
         gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
         // Unbind the buffer
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
		 
         // Create an empty buffer object and store color data
         var color_buffer = gl.createBuffer ();
         gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
         gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
		 
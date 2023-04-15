         /*================Creating a canvas=================*/
         var canvas = document.getElementById('my_Canvas');
         var gl = canvas.getContext('experimental-webgl'); 

         /*==========Defining and storing the geometry=======*/

         var vertices = [
            -0.5, 0.5, 0.0,
             0.0, 0.5, 0.0,
	     0.0, 0.0, 0.0,
            -0.5,-0.5, 0.0, 
         ];

         // Create an empty buffer object to store the vertex buffer
         var vertex_buffer = gl.createBuffer();

         //Bind appropriate array buffer to it
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

         // Pass the vertex data to the buffer
         gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

         // Unbind the buffer
         gl.bindBuffer(gl.ARRAY_BUFFER, null);

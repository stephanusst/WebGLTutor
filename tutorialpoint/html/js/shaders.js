
         /*=========================Shaders========================*/
         // vertex shader source code
         var vertCode =
            'attribute vec4 coordinates;' +
			'attribute vec3 color;' +
			'varying vec3 vColor;' +
			'uniform vec4 translation;'+
			'uniform mat4 u_xformMatrix;' +
            'void main(void) {' +
//               'gl_Position = vec4(coordinates, 1.0) + translation;' + 
               'gl_Position = u_xformMatrix * coordinates + translation;' + 

               'gl_PointSize = 30.0;'+
			   'vColor = color;'+
            '}';

         // Create a vertex shader object
         var vertShader = gl.createShader(gl.VERTEX_SHADER);
         // Attach vertex shader source code
         gl.shaderSource(vertShader, vertCode);
         // Compile the vertex shader
         gl.compileShader(vertShader);

         // fragment shader source code
         var fragCode = 
			'precision mediump float;'+
			'varying vec3 vColor;'+
            'void main(void) {' +
               'gl_FragColor = vec4(vColor, 1.0);' +	   
            '}';

         // Create fragment shader object
         var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
         // Attach fragment shader source code
         gl.shaderSource(fragShader, fragCode);
         // Compile the fragmentt shader
         gl.compileShader(fragShader);
         // Create a shader program object to store
         // the combined shader program
         var shaderProgram = gl.createProgram();
         // Attach a vertex shader
         gl.attachShader(shaderProgram, vertShader); 
         // Attach a fragment shader
         gl.attachShader(shaderProgram, fragShader);

         // Link both the programs
         gl.linkProgram(shaderProgram);

         // Use the combined shader program object
         gl.useProgram(shaderProgram);


		 

         /*======== Associating shaders to buffer objects ========*/

         // Bind vertex buffer object
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);	 
		 // TRIANGLE
         // TBind index buffer object
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);		 
         // Get the attribute locations
         var coord = gl.getAttribLocation(shaderProgram, "coordinates");
         // Point an attribute to the currently bound VBO
         gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
         // Enable the attribute
         gl.enableVertexAttribArray(coord);
 
	     // bind the color buffer
         gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
         // get the attribute location
         var color = gl.getAttribLocation(shaderProgram, "color");
         // point attribute to the volor buffer object
         gl.vertexAttribPointer(color, 3, gl.FLOAT, false,0,0) ;
         // enable the color attribute
         gl.enableVertexAttribArray(color);
		 

		 
 		 
		 

 /*============= Drawing the primitive ===============*/

         // Clear the canvas
         gl.clearColor(5.0, 5.0, 0.5, 0.5);

         // Enable the depth test
         gl.enable(gl.DEPTH_TEST);
 
         // Clear the color buffer bit
         gl.clear(gl.COLOR_BUFFER_BIT);

         // Set the view port
         gl.viewport(0,0,canvas.width,canvas.height);

         // Draw the points
          gl.drawArrays(gl.POINTS, 0, 6);
		  
		 // Draw the lines
         //gl.drawArrays(gl.LINES, 0, 2);

		 // Draw the line strip
         //gl.drawArrays(gl.LINE_STRIP, 0, 3);

		 // Draw the line loop
         //gl.drawArrays(gl.LINE_LOOP, 0, 3);

		 // Draw the triangle
         gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);

		 // Draw the triangle strip
         //gl.drawElements(gl.TRIANGLE_STRIP, 4, gl.UNSIGNED_SHORT,0);		

		 // Draw the triangle fan
         //gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT,0);
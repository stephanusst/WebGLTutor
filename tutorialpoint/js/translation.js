         /* ==========translation======================================*/
         var Tx = 0.0, Ty = -0.25, Tz = 0.0;
         var translation = gl.getUniformLocation(shaderProgram, 'translation');
         gl.uniform4f(translation, Tx, Ty, Tz, 0.0);
		 
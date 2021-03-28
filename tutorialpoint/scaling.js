         /*===================scaling==========================*/

         var Sx = 1.8, Sy = 1.0, Sz = 1.0;
         var xformMatrix = new Float32Array([
            Sx,   0.0,  0.0,  0.0,
            0.0,  Sy,   0.0,  0.0,
            0.0,  0.0,  Sz,   0.0,
            0.0,  0.0,  0.0,  1.0  
         ]);

         var u_xformMatrix = gl.getUniformLocation(shaderProgram, 'u_xformMatrix');
         gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
(function(){

	        Dropzone.autoDiscover = false;
            var imgUpload = new Dropzone("#img-upload", {
            url: 'https://api.cloudinary.com/v1_1/dccp5abtr/image/upload',
            createImageThumbnails:false
            });

	        var $ = function(id){return document.getElementById(id)};
			var canvas_container = $('canvas-container');
			var canvas = new fabric.Canvas('c');
			
			var reader = new FileReader();
			reader.onload = function(event) {
  				var data = event.target.result;
  				fabric.Image.fromURL(data, function(image) {
    			var imageObject = image.set({
      				left: 10,
      				top: 10,
      				angle: 0

    				});
    			imageObject.hasControls = false;
    				canvas.add(imageObject).renderAll();
    				canvas.setActiveObject(imageObject);
  					});
				};

			imgUpload.on("success", (file, response) => {
  			reader.readAsDataURL(file);
			});

			imgUpload.on("sending", function(file, xhr, formData) {
  				formData.append('api_key', 314976358927773);
  				formData.append('timestamp', Date.now()/1000|0);
  				formData.append('upload_preset', 'tryytafk');
			});
			
  			$('angle-control').onchange = function() {
    			canvas.getActiveObject().setAngle(parseInt(this.value, 10)).setCoords();
   				canvas.renderAll();
 			 };

  			$('scale-control').onchange = function() {
    			canvas.getActiveObject().scale(parseFloat(this.value)).setCoords();
   				canvas.renderAll();
 			 };

 			function updateControls() {
   				 scaleControl.value = canvas.getActiveObject().getScaleX();
    			 angleControl.value = canvas.getActiveObject().getAngle();
    			 
  			}

        var deleteObject = $('delete-object');
   			deleteObject.onclick = function()
  			{
  				canvas.getActiveObject().remove();
  			}
  			var saveCollage = $('save_collage');
  			saveCollage.onclick = function()
  			{
  				canvas.deactivateAll().renderAll();
  				window.open(canvas.toDataURL('png'));
  			}
  			var toFront = $('bring-to-front');
  			toFront.onclick = function()
  			{
  				canvas.bringToFront(canvas.getActiveObject()) 
  			}
  			
  			var Forward = $('bring-forward');
  			Forward.onclick = function()
  			{
  				canvas.bringForward(canvas.getActiveObject()) 
  			}

  			var toBack = $('send-to-back');
  			toBack.onclick = function()
  			{
  				canvas.sendToBack(canvas.getActiveObject()) 
  			}
  			
  			var Backwards = $('send-backwards');
  			Backwards.onclick = function()
  			{
  				canvas.sendBackwards(canvas.getActiveObject()) 
  			}

  			canvas.on({
    			'object:scaling': updateControls,
    			'object:resizing': updateControls,
    			'object:rotating': updateControls
 			});
			function cancel(e) {
				if (e.preventDefault) { e.preventDefault(); }
				return false;
		    }

		    
			// fabric.Object.prototype.transparentCorners = false;

			
		})();

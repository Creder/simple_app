(function(){
	        var $ = function(id){return document.getElementById(id)};
			var canvas_container = $('canvas-container');
			var canvas = new fabric.Canvas('c');
			var ctx = canvas.getContext('2d');
			canvas_container.addEventListener('drop', function (e) {
				console.log("DROP");
				e = e || window.event;
				if (e.preventDefault) {
					e.preventDefault();
				}
				var dt = e.dataTransfer;
				var files = dt.files;
				for (var i=0; i<files.length; i++) {
					var file = files[i];
					var reader = new FileReader();
					//attach event handlers here...
					reader.onload = function (e) {
						var img = new Image();
						img.src = e.target.result;
						var imgInstance = new fabric.Image(img, {
							left: 100,
							top: 100,

						});
						imgInstance.hasControls = false;
						canvas.add(imgInstance);
					}
					reader.readAsDataURL(file);
				}
				
				return false;
			});
			canvas_container.addEventListener('dragover', cancel);
			canvas_container.addEventListener('dragenter', cancel);

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
   if(!Detector.webgl){
    Detector.addGetWebGLMessage();
  } else {
    var container = document.getElementById('container');
    var globe = new DAT.Globe(container);      
    var xhr;
    TWEEN.start();

    xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/Parsed_refugee_camp_data.json', true);
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          window.data = data;
          globe.addData(data[0][1], {format: 'magnitude', name: data[0][0], animated: true});
          globe.createPoints();
          // globe.setTarget([4.659797980385109, 0.55612037755986923], 250.7);
          globe.animate();
            document.body.style.backgroundImage = 'none'; // remove loading
          }
        }
      };
      xhr.send(null);
    }
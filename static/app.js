
//  const fetchAudio = ()=> {
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ "notes": "-B,E,G,F#,E" })
//   };
//   let url = '/gettrack';
//   // fetch() returns a promise that
//   // resolves once headers have been received
//   return fetch(url, requestOptions)
//     .then(res => {
//     console.log(res);
//       if (!res.ok)
//         throw new Error(`${res.status} = ${res.statusText}`);
//       // response.body is a readable stream.
//       // Calling getReader() gives us exclusive access to
//       // the stream's content
//       var reader = res.body.getReader();
//       // read() returns a promise that resolves
//       // when a value has been received
//       return reader
//         .read()
//         .then((result) => {
//         console.log(result);
//           return result;
//         });
//     })
// }


// fetchAudio()
//   .then((response) => {
//     // response.value for fetch streams is a Uint8Array
//     var blob = new Blob([response.value], { type: 'audio/wav' });
//     var url = window.URL.createObjectURL(blob)
// const audio  = new Audio(url);
// audio.play();
//    // console.log(url);

//   })
//   .catch((error) => {
//     console.log(error);
//   });
$("#loader").hide();

//
//function getTrack() {
//  $("#index-banner").hide();
//  $("#loader").show();
//  var request = new XMLHttpRequest();   // new HttpRequest instance
//  request.open("POST", "/gettrack", true);
//  request.responseType = 'arraybuffer';
//  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//  request.onload = function (evt) {
//
//    var blob = new Blob([request.response], { type: 'audio/wav' });
//    var objectUrl = URL.createObjectURL(blob);
//    let aut = document.getElementById("sid");
//    aut.src = objectUrl;
//    document.getElementById("aid").load();
//    $("#loader").hide();
//    $("#index-banner").show();
//    console.log(evt);
//    console.log(blob);
//  }
//
//  let gnote = $("#input_text").val();
//
//  console.log(gnote);
//
//  request.send(JSON.stringify({ "notes": gnote }));
//}



function getTrack() {
  $("#index-banner").hide();
  $("#loader").show();
  var request = new XMLHttpRequest();   // new HttpRequest instance
  request.open("POST", "/gettrack", true);
  request.responseType = 'arraybuffer';
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.onload = function (evt) {

    var blob = new Blob([request.response], { type: 'audio/mpeg' });
    var objectUrl = URL.createObjectURL(blob);
    let aut = document.getElementById("sid");
    aut.src = objectUrl;
    document.getElementById("aid").load();
    $("#loader").hide();
    $("#index-banner").show();
    console.log(evt);
    console.log(blob);
  }

  let gnote = $("#input_text").val();

  console.log(gnote);

  request.send(JSON.stringify({ "notes": gnote }));
}


getTrack();


// $('#C').unbind().click(function(){
//   console.log("C button clicked");
// let input_text = $("#input_text").val();
// console.log(input_text);
// $("#input_text").val('');
// console.log($("#input_text").val());
// console.log(input_text + ',C')
//  $("#input_text").val(input_text + ',C');
// });

// $('#Csharp').unbind().click(function(){
//   console.log("C# button clicked");
// let input_text = $("#input_text").val();
// console.log(input_text);
// $("#input_text").val('');
// console.log($("#input_text").val());
// console.log(input_text + ',C#')
//  $("#input_text").val(input_text + ',C#');
// });
$('.note-btn').unbind().click(function (e) {
  console.log("C button clicked", e.target.id);
  btnId = e.target.id;
  console.log(btnId === 'C');
  if (btnId == 'C') {
    console.log("C button clicked");
    let input_text = $("#input_text").val();
    console.log(input_text);
    $("#input_text").val('');
    console.log($("#input_text").val());
    console.log(input_text + ',C')
    $("#input_text").val(input_text + ',C');
  }
  else if (btnId == 'Csharp') {

  }
  else if (btnId == 'D') {

  }
  else if (btnId == 'Dsharp') {

  }
  else if (btnId == 'E') {

  }
  else if (btnId == 'F') {

  }
  else if (btnId == 'Fsharp') {

  }
  else if (btnId == 'G') {

  }
  else if (btnId == 'Gsharp') {

  }
  else if (btnId == 'A') {

  }
  else if (btnId == 'Asharp') {

  }
  else if (btnId == 'B') {

  }
  else {

  }
});

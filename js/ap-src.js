
       
 //var uid = firebase.auth().currentUser.uid;
        
        // var dbBloges= firebase.database().ref().child("Users");
        // dbBloges.on("value",function(blogs){
        //     if(blogs.exists()){
        //         var userHtml="";
        //         blogs.forEach(function(singleblog){
        //             counter=counter+1;
        //             userHtml+="<div class='row'>";
        //             userHtml+="<div class='col-sm-5'><p style='color:grey';>"
        //                 + "Name:"+blogs.val().username
        //                 +"</p></div>";
        //             userHtml+="</div>";    
        //         });
        //         $("#blogs").html(userHtml);
        //     }
        // });
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                getUserData(user.uid)
            }
        })
        
        function getUserData(uid) {
            firebase.database().ref('Appointments/' + uid).once("value", snap => {
                var userHtml="";
                var emailHtml="";
                var dateHtml="";
                var timeHtml="";
                var confHtml="";



                userHtml+=snap.val().username;
               
                emailHtml+=snap.val().email;
                dateHtml+=snap.val().date;
                timeHtml+=snap.val().time;
                confHtml+=snap.val().confirmation;
                
                console.log(snap.val())
                $("#op-name").html(userHtml)  
                $("#op-email").html(emailHtml)
                $("#op-date").html(dateHtml)
                $("#op-time").html(timeHtml)
                $("#op-conf").html(confHtml)
                
                
                
            })
        }


        
//         var starCountRef = firebase.database().ref('Users');
//         starCountRef.on('value', (snapshot) => {
//     const data = snapshot.val();
//     var userHtml="";
//     userHtml+="<div class='col-sm-5'><p style='color:grey';>"
//                         + "Name:"+data
//                         +"</p></div>";
//   });

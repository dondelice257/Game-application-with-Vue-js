
        var vue1 = new Vue({
            el : '#app',
            data: function(){
                return{
                showMe : true,
                scoreD : 100,
                scoreS : 100,
                }
            },
            methods : {
                showHide(){
                    this.showMe = !this.showMe2
                },
                play(){
                    let numb = [1, 3, 5, 7, 9];
                    var ul = document.querySelector('ul');
                    let randD = Math.floor(Math.random() * numb.length);
                    let randS = Math.floor(Math.random() * numb.length);


                    this.scoreD = this.scoreD-randD;
                    this.scoreS = this.scoreD-randS;
                     let newLi1 = document.createElement('li');
                     let newLi2 = document.createElement('li');
                     let giveUp = document.querySelector('#giveUp');
                     newLi1.innerHTML= "Delice wins" + randD;
                     newLi2.innerHTML= "Dushisoft wins" + randS;
                     let newSpan1 = document.createElement('span');
                     let newSpan2 = document.createElement('span');

                     newSpan1.innerHTML="X"
                     newSpan2.innerHTML="X"

                     newLi1.appendChild(newSpan1);
                     newLi2.appendChild(newSpan2);

                     let spans = document.querySelectorAll('span');

                     

                     newSpan1.addEventListener('click', function(){
                        ul.removeChild(newLi1)
                     });
                     newSpan2.addEventListener('click', function(){
                        ul.removeChild(newLi2)
                     })

                     ul.appendChild(newLi1);
                     ul.appendChild(newLi2);

                     newLi1.style.backgroundColor="green";
                     newLi2.style.backgroundColor="red";
                      
                   

                    if(this.scoreD<0){
                        this.scoreD=100;
                        this.scoreS=100;
                        alert('Delice win the game')

                    }
                  
                    if(this.scoreS<0){
                        this.scoreD=100;
                        this.scoreS=100;
                        alert('Dushisoft win the game');


                    };
                    giveUp.addEventListener('click', function(){
                        ul.removeChild(newLi1);

                    })
                    

                },
               

                

                

            }
        });
      
 

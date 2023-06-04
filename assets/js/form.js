

let social_method = document.querySelectorAll('.social-method');
let social_meth = document.querySelector('.social-method');
let social_select = document.querySelector('.social-select');
let Quantity = document.querySelector('.Quantity');
let spanTotalPrice = document.querySelector('#spanTotalPrice');
let listOrder = {

    // Follower : ['0.5$ For 1K' , '0.2$ For 1K' , '1$ For 1K' ],
    // comment : ['1.5$ For 1K' , '2$ For 1K' , '4$ For 1K' ],
    // Like : ['' , ''  , '' ] ,
    // Story : ['' , '' , ''] ,
    
    Selected : ['Plese Selected Method'],
    Story : [
        {title : '0.8$ For 1K' , price : 0.5} ,
        {title : '0.1$ For 1K' , price : 0.1} ,
        {title : '4$ For 1K' , price : 0.8}  

    ] ,
    Follower : [
        {title : '0.5$ For 1K' , price : 1},
        {title : '0.2$ For 1K' , price : 2},
        {title : '0.4$ For 1K' , price : 3}
    ], 
    Like : [
        {title : '0.1$ For 1K' , price : 0.1},
        {title : '0.4$ For 1K' , price : 0.4},
        {title : '1$ For 1K' , price : 1},
    ] ,
    comment : [
        {title : '0.5$ For 1K' , price : 0.5} ,
        {title : '0.2$ For 1K' , price : 0.2} ,
        {title : '1$ For 1K' , price : 1}  
    ]
};

// console.log(listOrder['Follower']);
// console.log(listOrder['Follower'][0].price);

social_method.forEach((objecst)=>{
    console.log(objecst);
    objecst.addEventListener('change' , (ss)=>{
        
        social_select.innerHTML = '';
        social_select.insertAdjacentHTML('beforeend' , '<option>' + 'select Panel'+  '</option>');
        
        listOrder[ss.target.value].forEach((elm)=>{        
            social_select.insertAdjacentHTML('beforeend' , '<option>' + elm.title +  '</option>');
        });

        // social_select.addEventListener('change' , (event)=>{
        //     let huum = listOrder[ss.target.value].filter((ev)=>{
        //         return ev.title == event.target.value
                
        //     });

        //     console.log(huum[0].price);

           
            
        // });
        


   

    });

    Quantity.addEventListener('keyup' , (eve)=>{
    
        
        let mon = listOrder[social_meth.value].filter((even)=>{
           

            return even.title == social_select.value
           
            
        })
        

     
        // console.log(mon[0].price);
        // console.log(Quantity.value);
      
       spanTotalPrice.innerHTML = (Quantity.value / 1000) *  mon[0].price + '$'
    })





})





let Support = document.querySelector('.box-open-chat');

Support.addEventListener('click' , (ev)=>{
    console.log(ev);
})
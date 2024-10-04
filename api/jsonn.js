fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
    data.products.forEach(element => {
        // console.log(element.title);
        const row=document.querySelector('.row')
        const col=document.createElement('div')
        col.classList.add('col-lg-3')
        col.innerHTML=`
        <img src='${element.thumbnail}' width='100%'>
        <h3>${element.title}</h3>
        <h6>${element.price}</h6>
        <a href="#" class="btn btn-danger see-more-btn" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#productModal">See More</a>
        `
    
        row.appendChild(col)
    });

    document.querySelectorAll('.see-more-btn').forEach(btn=>{
        btn.addEventListener('click', (e)=>{
        const productId=e.target.getAttribute('data-id');
        const product=data.products.find(p=>p.id==productId)

        if (product){
            document.getElementById('modalImage').src=product.thumbnail;
            document.getElementById('modalTitle').textContent=product.title;
            document.getElementById('modalDescription').textContent=product.description;
            document.getElementById('modalPrice').textContent=`price: $${product.price}`;

        }
        })
    })

})

.catch(error =>{
    console.error('Error fetching the data:',error);
});
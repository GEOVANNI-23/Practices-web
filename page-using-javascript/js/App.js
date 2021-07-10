class Producto{
    constructor (name, price, year){
        this.name=name;
        this.price=price;
        this.year=year;
    }
}

class IU{
    addProduct(Producto){

    const listProduct=document.getElementById('lista-productos');
    const elemento1=document.createElement('div');
        elemento1.innerHTML=`
            <div class="card text-center mb-4">
             <div class="card-body">
                <Strong> Nombre del Producto</Strong>: ${Producto.name}
                <Strong> Precio del Producto</Strong>: ${Producto.price}
                <Strong> Año del Producto</Strong>: ${Producto.year}
                <a href="#" id="delete" class="btn btn-danger" name="delete"> DELETE</a>
             </div>
            </div>
        `;
        listProduct.appendChild(elemento1);

    }

    reset(){
        document.getElementById('formulario-productos').reset();
    }

    deleteProduct(elemento1){
        if(elemento1.name=== "delete"){
             elemento1.parentElement.parentElement.parentElement.remove();
             this.showMessage('Product deleted', 'danger');
            
        }
        
    }
    showMessage(message, cssClass){
        const div= document.createElement('div');
        div.className=`alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        /**show message in DOM */
        const container=document.querySelector('.container');
        const app=document.querySelector('#app');
        container.insertBefore(div, app);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },1000);

        
    }
}

/*Events*/ 

const btnevent=document.getElementById('btnsubmit');
btnevent.addEventListener('click', (e)=>{

    const name=document.getElementById('nombre').value;
    const price=document.getElementById('precio').value;
    const year=document.getElementById('year').value;

    const Products =new Producto(name,price,year);

    const iu=new IU();

    if(name===""||price===""||year===""){
        return iu.showMessage("Completa todos los campos",'warning');
    }

    iu.addProduct(Products);
    iu.reset();
    iu.showMessage('Product added', 'success');

    e.preventDefault();
}
);

document.getElementById('lista-productos').addEventListener('click',(e)=>{
    const iu=new IU();
    iu.deleteProduct(e.target);
});


//Obtenemos el id del boton
const botoonAdd=document.getElementById('btn-add');

//Escuchamos el evento del boton
botoonAdd.addEventListener('click',(e) =>{
    const name=document.getElementById('name').value;
    const ap=document.getElementById('ap').value;
    const am=document.getElementById('am').value;
    const age=document.getElementById('age').value;
    const course=document.getElementById('courses').value;
    const date=document.getElementById('date').value;
    const modality=document.getElementById('course-modality').value;

    //Creamos un objeto de tipo Alumno y le pasamos por parámetro sus atributos que va a tener
    const alumno=new Alumno(name,ap,am,age,course,date,modality);
    const events=new Eventos();
    events.addAlumno(alumno);
    events.showMessages('Producto Agregado','success');
    
    e.preventDefault();
});

//Dado que el boton de eliminar esta en el div con clase list capturaremos el evento de list
document.getElementById('list').addEventListener('click',(e)=>{
    const events=new Eventos();
    //target hace referencia al elemento que vamos a seleccionar
    events.deleteAlumno(e.target);
});

//Creamos la clase alumno y recibimos los datos del formulario
class Alumno{
    constructor(name,ap,am,age,course,date,modality){
        this.name=name;
        this.ap=ap;
        this.am=am;
        this.age=age;
        this.course=course;
        this.date=date;
        this.modality=modality;
    }
}
//Creamos la clase de eventos o métodos que va a tener la aplicación
class Eventos{
    //El método de addAlumno recibe el objeto alumno creado para insertarlo Y/O mostrarlo en el DOM
    addAlumno(Alumno){
        const list=document.getElementById('list');
        const newElment=document.createElement('div');
        newElment.innerHTML=`
            <div class"card text-center">
                <div class"card-body"> 
                    <strong>Alumno:</strong> ${Alumno.name}
                    <strong>Apellido Paterno:</strong> ${Alumno.ap}
                    <strong>Apellido Materno:</strong> ${Alumno.am}
                    <strong>Edad:</strong> ${Alumno.age}
                    <strong>Curso:</strong> ${Alumno.course}
                    <strong>Fecha de Inicio:</strong> ${Alumno.date}
                    <strong>Modalidad:</strong> ${Alumno.modality}
                    <a href="#" id="delete" class="btn btn-danger btn-radius" name="delete">ELIMINAR</a>
                </div>
            </div>
        `;
        list.appendChild(newElment);
    }
    //Dado aque vamos a eliminar un elemento debemos pasarle por parámetro ese elemento a la función
    deleteAlumno(newElment){
        //Comprobaremos si ese elemento tiene como propiedad un name con valor delete
        if(newElment.name==="delete"){
            //Si el elemento tiene la propedad antes mencionada subiremos un nivel desde ese elemento hasta su elmento padre o mejor dicho hasta su elmento contenedor utilizando parent y quitamos o removemos todo el elemento con todo su contenido con la funcion remove 
            newElment.parentElement.parentElement.parentElement.remove();
            this.showMessages('Alumno Eliminado','danger');
        }
        
    }
    showMessages(message, classCss){
        const newElement2=document.createElement('div');
        newElement2.className=`alert alert-${classCss} mt-4`;
        //Le agragamos un texto al alert
        newElement2.appendChild(document.createTextNode(message));
        //seleccionamos el elemento con la clase contenedor
        const div=document.querySelector('.container');
        //seleccionamos el elemento con el id app
        const app=document.querySelector('#app');
        //Insertamos el nuevo elemneto antes del elemento con la clase contenedor y antes de elemento con el id app
        div.insertBefore(newElement2,app);

        //La siguiente funcion otorga un retraso al elemento que le indiquemos dentro
        setTimeout(function(){
            //seleccionamos el elemento con la clase alert y le quitamos esa clase para que desaparesca
            document.querySelector('.alert').remove();
        },1000);//los 1000 es quivalente a 1 segundo y es el tiempo en el cual el elemento seleccionado aparecera y antes de quitarle su clase
    }

}

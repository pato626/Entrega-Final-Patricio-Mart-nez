import { useForm } from "react-hook-form";




const SobreNosotros = () => {

  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  }

  return (


    <div>
      <div>
      <h1 className='title'>SOBRE NOSOTROS</h1>
      <h2 className='descripcion'>
        ¡Rekt! tu destino para la máxima energía y estilo. Estamos emocionados
        de que estés aquí para explorar nuestros productos de bebidas energéticas y moda única.
        Para brindarte una experiencia personalizada y mantenerte al tanto de las últimas novedades,
        te invitamos a completar este formulario. Queremos conocerte mejor y asegurarnos de que recibas
        información exclusiva sobre lanzamientos,
        promociones y eventos especiales. Gracias por ser parte de la comunidad Rekt </h2>
        </div>
        <div className='input-border'>
          <h2 className='title'>Contacto</h2>
          <div className='container bg-sub'><h3 className='title'>¡A continuación, ingrese sus datos y nos pondremos en contacto con usted!</h3></div>
          <form className='formulario' onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder='Nombre y apellido' className='input-border' {...register("nombre")} />
            <input type="text" placeholder='Ingrese su teléfono' className='input-border'{...register("telefono")}/>
            <input type="email" placeholder='Ingrese su email' className='input-border'{...register("email")}/>
            <button type='submit' className='input-border'>Enviar</button>

          </form>
        </div>
    </div>
  )
}

export default SobreNosotros
import Logout from "../components/Logout"
import Pdf from "../components/Pdf"

const Employee = () => {
  return (
    <main className="flex gap-4">
        <aside className="w-[20%] p-2 shadow-lg shadow-[#8A7EbE] pb-10 rounded-lg h-[100vh] sticky top-0 left-0">
            <div className="py-10">
                <img src="/images/lajama-name.png" alt="la jama logo" />
            </div>
            <hr className="text-primary" />
            <div className="mt-10">
                <ul className="space-y-10">
                    
                    <li className="flex items-center gap-4 px-4 justify-between">
                        <span><img src="/images/icons/project-manager.svg" alt="operaciones icon"/></span>
                        <span className="text-[16px] text-primary">Capacitaciones</span>
                        <span><img src="/images/icons/vector.svg" alt="vector logo"/></span>
                    </li>
                    
                </ul>
            </div>
        </aside>
        <div className="w-full">
          <div className="flex justify-end p-4">
            <Logout />
          </div>
          <div className="w-full h-full mt-10">
              <h2 className="text-center text-primary text-3xl">Manuales de Inicio</h2>
              <div className="mt-10 px-4">
                  <div className="grid grid-cols-2">
                      <Pdf description={"Manual de Bienvenidad"} source={"manual-1"}/>
                      <Pdf description={"Manual de Vestimenta"} source={"manual-vestimenta"}/>
                      <Pdf description={"Manual de Procedimientos de Cocina"} source={"manual-cocina"}/>
                      <Pdf description={"Manual de Higiene y Seguridad Alimentaria"} source={"manual-higiene-seguridad-alimentaria"}/>
                      <Pdf description={"Manual de Atención al Cliente"} source={"manual-atencion-cliente"}/>
                      <Pdf description={"Manual de Seguridad y Salud Laboral"} source={"manual-seguridad-laboral"}/>
                      <Pdf description={"Manual de Capacitación en Ventas y Técnicas de Sugerencias"} source={"manual-ventas-sugerencias"}/>
                      <Pdf description={"Manual de Manejo de Caja y Transacciones"} source={"manual-caja-transacciones"}/>
                      <Pdf description={"Manual de Mantenimiento de Instalaciones y Equipos"} source={"manual-mantenimiento"}/>
                      <Pdf description={"Manual de Manejo de Crisis"} source={"manual-manejo-crisis"}/>
                      
                  </div>
              </div>
          </div>   
        </div>  
    </main>
  )
}

export default Employee
import Logout from "../components/Logout"

const Main = () => {
  return (
    <main className="flex gap-4">
        <aside className="w-[20%] p-2 shadow-lg shadow-primary/50 pb-10 rounded-lg h-[100vh] sticky top-0 left-0">
            <div className="py-10">
                <img src="/images/lajama-name.png" alt="la jama logo" />
            </div>
            <hr className="text-primary"/>
            <div className="mt-10">
                <ul className="space-y-10">
                    <li className="flex items-center gap-4 px-4 justify-between">
                        <span><img src="/images/icons/dashborad.svg" alt="dashborad icon" /></span>
                        <span className="text-[16px] text-primary">Dashboard</span>
                        <span><img src="/images/icons/vector.svg" alt="vector logo" /></span>
                    </li>
                    <li className="flex items-center gap-4 px-4 justify-between">
                        <span><img src="/images/icons/sales-preformance.svg" alt="ventas icon" /></span>
                        <span className="text-[16px] text-primary">Ventas</span>
                        <span><img src="/images/icons/vector.svg" alt="vector logo" /></span>
                    </li>
                    <li className="flex items-center gap-4 px-4 justify-between">
                        <span><img src="/images/icons/trolley.svg" alt="ventas icon" /></span>
                        <span className="text-[16px] text-primary">Inventario</span>
                        <span><img src="/images/icons/vector.svg" alt="vector logo" /></span>
                    </li>
                    <li className="flex items-center gap-4 px-4 justify-between">
                        <span><img src="/images/icons/project-manager.svg" alt="operaciones icon" /></span>
                        <span className="text-[16px] text-primary">Operaciones</span>
                        <span><img src="/images/icons/vector.svg" alt="vector logo" /></span>
                    </li>
                    <li className="flex items-center gap-4 px-4 justify-between">
                        <span><img src="/images/icons/manager.svg" alt="clientes icon" /></span>
                        <span className="text-[16px] text-primary">Clientes</span>
                        <span><img src="/images/icons/vector.svg" alt="vector logo" /></span>
                    </li>
                    <li className="flex items-center gap-4 px-4 justify-between">
                        <span><img src="/images/icons/money.svg" alt="finanzas icon" /></span>
                        <span className="text-[16px] text-primary">Finanzas</span>
                        <span><img src="/images/icons/vector.svg" alt="vector logo" /></span>
                    </li>
                    <li className="flex items-center gap-4 px-4 justify-between">
                        <span><img src="/images/icons/rupee.svg" alt="inversiones icon" /></span>
                        <span className="text-[16px] text-primary">Inversiones</span>
                        <span><img src="/images/icons/vector.svg" alt="vector logo" /></span>
                    </li>
                    <li className="flex items-center gap-4 px-4 justify-between">
                        <span><img src="/images/icons/commercial.svg" alt="marketing icon" /></span>
                        <span className="text-[16px] text-primary">Marketing</span>
                        <span><img src="/images/icons/vector.svg" alt="vector logo" /></span>
                    </li>
                </ul>
            </div>
        </aside>
        <div>
          <Logout />
        </div>
        {/* <div className="max-w-[79%] mt-10">
                <tableau-viz id="tableauViz"       
                src='https://public.tableau.com/views/CustomerSupportDashboard_17274500677220/Overview?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'      
                toolbar="bottom" hide-tabs>
                </tableau-viz>
                
        </div> */}
    </main>
  )
}

export default Main
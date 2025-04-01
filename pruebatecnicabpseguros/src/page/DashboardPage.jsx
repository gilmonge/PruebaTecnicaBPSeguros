import MenuLateralComponent from "../component/MenuLateral/MenuLateralComponent"

const DashboardPage = () => {
    return (
        <div>
            <MenuLateralComponent />

            <div className="pc-container">
                <div className="pc-content">
                    <div className="row">
                        <div className="col-sm-12">


                            <div className="pc-container">
                                <div className="pc-content">

                                    <div className="row">

                                        <div className="col-md-6 col-xl-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="mb-2 f-w-400 text-muted">Total Clientes</h6>
                                                    <h4 className="mb-3">4,42,236</h4>
                                                    <p className="mb-0 text-muted text-sm">Total de clientes del sistema</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="mb-2 f-w-400 text-muted">Total Pólizas</h6>
                                                    <h4 className="mb-3">78,250</h4>
                                                    <p className="mb-0 text-muted text-sm">Total de pólizas activas</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
function Select() {
    return (
        <div
            className="relative grid grid-cols-2 w-full divide-x mt-10 place-items-center place-content-center divide-none">
            <div className=" form-contro w-full">
                <div className="input-group">
                    <input type="text" placeholder="Nom,spécialité"
                           className="input input-bordered mr-3 w-full max-w-xs"/>
                </div>
            </div>
            <div className="form-control w-full">
                <div className="input-group ">
                    <input type="text" placeholder="Ville"
                           className="input input-bordered text-eerie-black w-full max-w-xs"/>
                    <button
                        className="btn btn-square transition ease-in-out delay-150 bg-green-ish hover:-translate-y-1 hover:bg-emerald duration-300 border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Select;
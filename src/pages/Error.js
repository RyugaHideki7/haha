import {useNavigate} from "react-router-dom";

function Error() {
    let navigate = useNavigate();
    return (
        <div data-aos="fade-right" className="hero min-h-screen text-xl">
            <div className="hero h-3/4 bg-error-img bg-contain bg-no-repeat bg-center mb-auto">
            </div>
            <div className="flex-none mt-56 ml-8">
                <a onClick={() => {
                    navigate("/")
                }}
                   className="btn normal-case border-none transition ease-in-out delay-150 bg-purple-error hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300s">Revenir
                    vers la page d'acceuil</a>
            </div>
        </div>
    );
}

export default Error;
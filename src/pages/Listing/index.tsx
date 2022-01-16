import MovieCard from "../../components/MovieCard";
import Pagination from "C:/projetos/dsmovie/frontend/src/components/Pagination";

function Listing() {

    return (
        <>
            <Pagination />

            <div className="contaier">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="mb-3 col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
            
                </div>
            </div>
        </>
    );
}

export default Listing;
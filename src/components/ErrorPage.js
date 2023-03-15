import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="vh-100">
            <div className="center-vertical text-center position-relative" id="error-page">
                <h1>404</h1>
                <p>Sorry, an unexpected error has occurred</p>
                <p className="text-secondary">{error.statusText || error.message}</p>
            </div>
        </div>
    );
}